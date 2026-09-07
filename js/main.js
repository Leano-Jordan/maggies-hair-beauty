const q = (selector, scope = document) => scope.querySelector(selector);
const qa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

q('#year')?.append(String(new Date().getFullYear()));

// Navigation is intentionally self-contained. Booking/business enhancements
// must never be able to prevent the primary navigation from initializing.
const toggle = q('.nav-toggle');
const nav = q('.primary-nav');
const setNavState = (open) => {
  if (!toggle || !nav) return;
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  document.body.classList.toggle('nav-open', open);
};

if (toggle && nav) {
  toggle.addEventListener('click', () => setNavState(!nav.classList.contains('open')));
  qa('a', nav).forEach((link) => link.addEventListener('click', () => setNavState(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      setNavState(false);
      toggle.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) setNavState(false);
  }, { passive: true });
}

// Business data is optional. Navigation, filters and the visual site remain
// functional if the data module is unavailable in a restricted environment.
import('../data/business.js')
  .then(({ business }) => {
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
  })
  .catch((error) => console.warn('Optional business data enhancement unavailable:', error));

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
