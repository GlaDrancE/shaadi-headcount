// Shared config + tiny Supabase REST helper. No SDK — fetch is enough.
const CFG = {
  url: 'https://oiwuldtgzbbvoyptthtl.supabase.co',
  key: 'sb_publishable_X04q2Cn7a5__TB1Sda48Ng_5puIWaPG',
  // ---- FILL THESE BEFORE DEPLOY ----
  upiVpa: 'ayush@upi',                 // your real UPI ID (money lands with your real name)
  upiName: 'Ayush Ramteke',
  whatsapp: '91XXXXXXXXXX',            // your WhatsApp for onboarding, country code, digits only
  linkedin: 'https://www.linkedin.com/in/ayush-ramteke',
  siteBase: 'https://gladrance.github.io/shaadi-headcount',                        // e.g. 'https://shaadiheadcount.vercel.app' (set after deploy; used in guest links)
};

async function sb(path, body, method = 'POST') {
  const r = await fetch(`${CFG.url}/rest/v1/${path}`, {
    method,
    headers: { apikey: CFG.key, Authorization: `Bearer ${CFG.key}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
    body: body && JSON.stringify(body),
  });
  if (!r.ok) throw new Error(await r.text());
  const t = await r.text();
  return t ? JSON.parse(t) : null;
}
const rpc = (fn, args) => sb(`rpc/${fn}`, args);

// Fake-door analytics: one lead_id per browser, insert-only events.
const leadId = (() => { try { return localStorage.lead_id ||= crypto.randomUUID(); } catch { return crypto.randomUUID(); } })();
const track = (offer, event, payload = {}) => sb('events', { lead_id: leadId, offer, event, payload }).catch(() => {});

const upiLink = (amount, note) =>
  `upi://pay?pa=${encodeURIComponent(CFG.upiVpa)}&pn=${encodeURIComponent(CFG.upiName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
const waLink = (phone, text) => `https://wa.me/${phone.length === 10 ? '91' + phone : phone}?text=${encodeURIComponent(text)}`;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
