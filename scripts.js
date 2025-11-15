export function qs(sel, ctx = document) { return ctx.querySelector(sel); }
export function qsa(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

export function createEl(tag, opts = {}) {
  const el = document.createElement(tag);
  if (opts.className) el.className = opts.className;
  if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => el.setAttribute(k, v));
  if (opts.html) el.innerHTML = opts.html;
  return el;
}

export function slugify(str) {
  return (str || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const storage = {
  get(key, def = []) {
    try { return JSON.parse(localStorage.getItem(key)) ?? def; }
    catch { return def; }
  },
  set(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
};

export function truncate(text, n = 140) {
  if (!text) return "";
  return text.length > n ? text.slice(0, n) + "…" : text;
}
