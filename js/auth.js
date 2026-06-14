// ============================================================================
// IELTS TRAINER — Google Authentication & Sync
// ============================================================================
import { state, saveState } from './state.js';
import { $, el, showToast } from './utils.js';
import { updateSidebarProgress } from './progress.js';
import { renderPage } from './router.js';

export function getGoogleClientId() {
  return localStorage.getItem('ielts_trainer_google_client_id') || '';
}

export function initAuth() {
  checkAuthGate();
  renderAuthWidget();

  // Load Google Client library dynamically if not already present
  if (!window.google) {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = setupGoogleSignIn;
    document.head.appendChild(script);
  } else {
    setupGoogleSignIn();
  }
}

function setupGoogleSignIn() {
  try {
    if (!window.google || !window.google.accounts) return;

    const client_id = getGoogleClientId();
    if (!client_id) {
      console.warn('Google Client ID is not configured. Please paste it in the settings UI.');
      return;
    }

    window.google.accounts.id.initialize({
      client_id: client_id,
      callback: handleCredentialResponse,
      auto_select: false,
      cancel_on_tap_outside: true
    });

    renderGoogleButton();
  } catch (error) {
    console.warn('Google Auth initialization failed. Falling back to Demo Mode only.', error);
  }
}

function renderGoogleButton() {
  const containerSidebar = document.getElementById('google-signin-btn-container');
  const containerGate = document.getElementById('google-signin-btn-container-gate');
  
  if (window.google && window.google.accounts) {
    if (containerSidebar) {
      window.google.accounts.id.renderButton(
        containerSidebar,
        { 
          theme: 'dark', 
          size: 'large',
          type: 'standard',
          shape: 'pill',
          text: 'signin_with',
          width: '220'
        }
      );
    }
    if (containerGate) {
      window.google.accounts.id.renderButton(
        containerGate,
        { 
          theme: 'dark', 
          size: 'large',
          type: 'standard',
          shape: 'pill',
          text: 'signin_with',
          width: '260'
        }
      );
    }
  }
}

function handleCredentialResponse(response) {
  try {
    const payload = decodeJwt(response.credential);
    
    const user = {
      id: payload.sub,
      name: payload.name,
      email: payload.email,
      picture: payload.picture
    };

    signInUser(user);
    showToast(`Signed in as ${user.name}! ☁️`, 'success');
  } catch (error) {
    console.error('Failed to parse Google credential:', error);
    showToast('Sign-in failed. Please try again.', 'warning');
  }
}

function decodeJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}

function signInUser(user) {
  state.user = user;
  localStorage.setItem('ielts_trainer_active_user', JSON.stringify(user));
  
  // If no progress for this user, save current local progress under their ID
  const userStateKey = `ielts_trainer_state_${user.id}`;
  if (!localStorage.getItem(userStateKey)) {
    localStorage.setItem(userStateKey, JSON.stringify(state));
  }

  // Reload page to start fresh under user context
  location.reload();
}

export function signOutUser() {
  if (state.user) {
    localStorage.removeItem('ielts_trainer_active_user');
    state.user = null;
    
    // Reload page to load offline progress context
    location.reload();
  }
}

export function checkAuthGate() {
  const gate = $('#auth-gate');
  if (!gate) return;

  if (state.user) {
    document.body.classList.remove('auth-blocked');
    gate.innerHTML = '';
  } else {
    document.body.classList.add('auth-blocked');
    renderAuthGate(gate);
  }
}

function renderAuthGate(gate) {
  const client_id = getGoogleClientId();
  gate.innerHTML = `
    <div class="auth-gate-bg">
      <div class="auth-gate-blob blob-1"></div>
      <div class="auth-gate-blob blob-2"></div>
    </div>
    <div class="auth-gate-card card">
      <div class="auth-gate-logo">
        <span class="auth-gate-logo-icon">🎯</span>
        <h2>IELTS Trainer</h2>
        <span class="auth-gate-logo-subtitle">8-Week Study Companion</span>
      </div>
      <p class="auth-gate-desc">
        Access your personalized IELTS study calendar, master AWL vocabulary flippers, track streaks, and sync your study schedules across devices.
      </p>

      ${!client_id ? `
        <div class="auth-setup-config">
          <span class="setup-config-label">Setup Stored Google Client ID:</span>
          <div class="setup-config-input-row" style="margin-top: 8px;">
            <input type="password" id="gate-config-clientid" placeholder="Paste Client ID here..." class="setup-config-input">
            <button class="btn-setup-config-save" id="btn-gate-config-clientid-save">Save</button>
          </div>
          <p class="setup-config-help" style="margin-top: 6px;">Your client ID is stored locally in your browser cache. Hidden from Git & AI.</p>
        </div>
      ` : `
        <div class="google-signin-btn-row-gate">
          <div id="google-signin-btn-container-gate" class="google-signin-btn-container"></div>
          <button class="btn-config-reset" id="btn-gate-clientid-reset" title="Reset Client ID" style="height: 40px; width: 40px;">⚙️</button>
        </div>
      `}

      <div class="auth-gate-divider">
        <span>OR</span>
      </div>

      <button class="btn btn-primary btn-gate-demo" id="btn-gate-demo">🧪 Continue with Demo Profile</button>
    </div>
  `;

  // Attach button events
  if (client_id) {
    renderGoogleButton();
    
    $('#btn-gate-clientid-reset').addEventListener('click', () => {
      if (confirm('Are you sure you want to clear your stored Google Client ID?')) {
        localStorage.removeItem('ielts_trainer_google_client_id');
        showToast('Google Client ID cleared.', 'info');
        checkAuthGate();
        setTimeout(() => location.reload(), 300);
      }
    });
  } else {
    $('#btn-gate-config-clientid-save').addEventListener('click', () => {
      const inputVal = $('#gate-config-clientid').value.trim();
      if (inputVal) {
        localStorage.setItem('ielts_trainer_google_client_id', inputVal);
        showToast('Google Client ID saved locally! 💾', 'success');
        setupGoogleSignIn();
        checkAuthGate();
      } else {
        showToast('Please enter a valid Client ID.', 'warning');
      }
    });
  }

  $('#btn-gate-demo').addEventListener('click', () => {
    // Simulate sign in
    const demoUser = {
      id: 'demo-user-123',
      name: 'Alex IELTS Candidate',
      email: 'alex.ielts@gmail.com',
      picture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100'
    };
    signInUser(demoUser);
  });
}

export function renderAuthWidget() {
  const sidebar = $('#sidebar');
  if (!sidebar) return;

  // Find or create profile section
  let profileWidget = $('#sidebar-profile-widget');
  if (!profileWidget) {
    // Insert profile widget right above the footer
    const footer = $('.sidebar-footer', sidebar);
    profileWidget = el('div', { id: 'sidebar-profile-widget', className: 'sidebar-profile-widget' });
    sidebar.insertBefore(profileWidget, footer);
  }

  if (state.user) {
    // User is logged in
    profileWidget.innerHTML = `
      <div class="user-profile-card">
        <img class="user-avatar" src="${state.user.picture}" alt="${state.user.name}" onerror="this.src='https://lh3.googleusercontent.com/a/default-user=s80-c'">
        <div class="user-info">
          <span class="user-name">${state.user.name}</span>
          <span class="user-status"><span class="status-pulse"></span> Cloud Synced</span>
        </div>
        <button class="btn-signout" id="btn-sidebar-signout" title="Sign Out">🚪</button>
      </div>
    `;
    
    $('#btn-sidebar-signout').addEventListener('click', signOutUser);
  } else {
    // User is logged out
    const client_id = getGoogleClientId();
    profileWidget.innerHTML = `
      <div class="auth-prompt-card">
        <span class="auth-prompt-title">Sync Your Progress</span>
        <p class="auth-prompt-desc">Sign in to save your 8-week schedule and AWL word practice across devices.</p>
        ${!client_id ? `
          <div class="auth-setup-config">
            <span class="setup-config-label">Paste Google Client ID:</span>
            <div class="setup-config-input-row">
              <input type="password" id="input-config-clientid" placeholder="..." class="setup-config-input">
              <button class="btn-setup-config-save" id="btn-config-clientid-save">Save</button>
            </div>
            <p class="setup-config-help">Saved locally in your browser. Hidden from Git & AI.</p>
          </div>
        ` : `
          <div class="google-signin-btn-row">
            <div id="google-signin-btn-container" class="google-signin-btn-container"></div>
            <button class="btn-config-reset" id="btn-config-clientid-reset" title="Reset Stored Client ID">⚙️</button>
          </div>
        `}
        <button class="btn-demo-signin" id="btn-demo-signin">🧪 Try Demo Sign-In</button>
      </div>
    `;

    if (client_id) {
      renderGoogleButton();

      $('#btn-config-clientid-reset').addEventListener('click', () => {
        if (confirm('Clear stored Google Client ID?')) {
          localStorage.removeItem('ielts_trainer_google_client_id');
          showToast('Client ID cleared.', 'info');
          renderAuthWidget();
          setTimeout(() => location.reload(), 300);
        }
      });
    } else {
      $('#btn-config-clientid-save').addEventListener('click', () => {
        const inputVal = $('#input-config-clientid').value.trim();
        if (inputVal) {
          localStorage.setItem('ielts_trainer_google_client_id', inputVal);
          showToast('Google Client ID saved locally! 💾', 'success');
          setupGoogleSignIn();
          renderAuthWidget();
        } else {
          showToast('Please enter a valid Client ID.', 'warning');
        }
      });
    }

    $('#btn-demo-signin').addEventListener('click', () => {
      // Simulate Google auth for demo/testing
      const demoUser = {
        id: 'demo-user-123',
        name: 'Alex IELTS Candidate',
        email: 'alex.ielts@gmail.com',
        picture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100'
      };
      signInUser(demoUser);
    });
  }
}
