const themeKey = 'ifn.theme';

function setTheme(next) {
  if (next) {
    document.documentElement.dataset.theme = next;
    localStorage.setItem(themeKey, next);
  } else {
    delete document.documentElement.dataset.theme;
    localStorage.removeItem(themeKey);
  }
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme || 'dark';
  setTheme(current === 'dark' ? 'light' : 'dark');
}

function formatDate(d) {
  try {
    return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' }).format(d);
  } catch {
    return d.toISOString().slice(0, 10);
  }
}

function toast(text) {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();

  const el = document.createElement('div');
  el.id = 'toast';
  el.textContent = text;
  el.style.position = 'fixed';
  el.style.insetInlineStart = '1rem';
  el.style.insetBlockEnd = '1rem';
  el.style.padding = '0.7rem 0.9rem';
  el.style.border = '1px solid var(--border)';
  el.style.background = 'var(--panel)';
  el.style.backdropFilter = 'blur(10px)';
  el.style.borderRadius = '0.9rem';
  el.style.color = 'var(--text)';
  el.style.boxShadow = 'var(--shadow)';
  el.style.zIndex = '999';
  document.body.appendChild(el);

  window.setTimeout(() => el.remove(), 1800);
}

// Init theme
const saved = localStorage.getItem(themeKey);
if (saved === 'light' || saved === 'dark') setTheme(saved);

document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

// Footer year
document.getElementById('year').textContent = String(new Date().getFullYear());

// Build date (client-side)
document.getElementById('buildDate').textContent = formatDate(new Date());

// Copy email
document.getElementById('copyEmail')?.addEventListener('click', async () => {
  const text = document.getElementById('emailText')?.textContent?.trim() || '';
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    toast('کپی شد');
  } catch {
    toast('کپی نشد');
  }
});

