const q = (selector, scope = document) => scope.querySelector(selector);
const qa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

q('#year')?.append(String(new Date().getFullYear()));

// Navigation is deliberately independent of business/booking data so a data error
// can never make the site's primary navigation unusable.
const toggle = q('.nav-toggle');
const nav = q('.primary-nav');
const setNavState = (open) => {
  if (!toggle || !nav) return;
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
};

toggle?.addEventListener('click', () => setNavState(!nav.classList.contains('open')));
nav && qa('a', nav).forEach((link) => link.addEventListener('click', () => setNavState(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    setNavState(false);
    toggle?.focus();
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 800) setNavState(false);
}, { passive: true });

// Booking/contact enhancements are optional. Normal links remain usable when
// JavaScript or the external WhatsApp service is unavailable.
try {
  const { business } = await import('../data/business.js');

  qa('.booking-link').forEach((link) => {
    const number = business.whatsapp.replace(/\D/g, '');
    link.href = `https://wa.me/${number}?text=${encodeURIComponent(business.bookingMessage)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  const fields = [
    ['footer-phone', business.phone], ['footer-email', business.email],
    ['contact-phone', business.phone], ['contact-email', business.email],
    ['footer-address', business.address], ['contact-address', business.address]
  ];
  fields.forEach(([id, value]) => {
    const element = q(`#${id}`);
    if (!element) return;
    element.textContent = value;
    if (id.includes('phone')) element.href = `tel:${business.phone.replace(/\s/g, '')}`;
    if (id.includes('email')) element.href = `mailto:${business.email}`;
  });

  q('#booking-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Hi ${business.name},\nI'd like to book an appointment.\n\nService: ${form.get('service') || ''}\nPreferred date: ${form.get('date') || ''}\nPreferred time: ${form.get('time') || ''}\nNotes: ${form.get('note') || ''}`;
    window.location.href = `https://wa.me/${business.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  });
} catch (error) {
  console.warn('Optional business data enhancement unavailable:', error);
}

const filters = qa('.filter');
filters.forEach((button) => button.addEventListener('click', () => {
  filters.forEach((item) => {
    item.classList.remove('active');
    item.setAttribute('aria-pressed', 'false');
  });
  button.classList.add('active');
  button.setAttribute('aria-pressed', 'true');
  qa('[data-category]').forEach((item) => {
    item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter;
  });
}));
