// ============================================================================
// IELTS TRAINER — DOM & Formatting Utilities
// ============================================================================
export function $(sel, parent = document) { return parent.querySelector(sel); }
export function $$(sel, parent = document) { return [...parent.querySelectorAll(sel)]; }

export function el(tag, attrs = {}, ...children) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'className') e.className = v;
    else if (k === 'dataset') Object.assign(e.dataset, v);
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'innerHTML') e.innerHTML = v;
    else e.setAttribute(k, v);
  }
  for (const c of children) {
    if (typeof c === 'string') e.appendChild(document.createTextNode(c));
    else if (c) e.appendChild(c);
  }
  return e;
}

export function formatMinutes(m) {
  if (m >= 60) {
    const h = Math.floor(m / 60);
    const r = m % 60;
    return r > 0 ? `${h}h ${r}m` : `${h}h`;
  }
  return `${m}m`;
}

export function animateCounter(element, target, duration = 800) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function showToast(message, type = 'success') {
  const container = $('#toast-container');
  const toast = el('div', { className: `toast toast-${type}` },
    el('span', { className: 'toast-icon' }, type === 'success' ? '✅' : type === 'info' ? 'ℹ️' : '⚠️'),
    el('span', { className: 'toast-message' }, message)
  );
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
