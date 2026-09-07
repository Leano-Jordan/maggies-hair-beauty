const q = (selector, scope = document) => scope.querySelector(selector);
const qa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

q('#year')?.append(String(new Date().getFullYear()));

const toggle = q('.nav-toggle');
const nav = q('.primary-nav');
const setNavState = (open) => {
  if (!toggle || !nav) return;
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.setAttribute('aria-hidden', String(!open && window.innerWidth <= 800));
  document.body.classList.toggle('nav-open', open);
};

if (toggle && nav) {
  setNavState(false);
  toggle.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    setNavState(open);
    if (open) q('a', nav)?.focus();
  });
  qa('a', nav).forEach((link) => link.addEventListener('click', () => setNavState(false)));
  document.addEventListener('click', (event) => {
    if (nav.classList.contains('open') && !event.target.closest('.header-inner')) setNavState(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      setNavState(false);
      toggle.focus();
    }
  });
  window.addEventListener('resize', () => {
    const mobile = window.innerWidth <= 800;
    nav.setAttribute('aria-hidden', String(mobile && !nav.classList.contains('open')));
    if (!mobile) setNavState(false);
  }, { passive: true });
}

const setContactField = (id, value, type) => {
  const element = q(`#${id}`);
  if (!element) return;
  element.textContent = value;
  if (type === 'phone') element.href = `tel:${value.replace(/\s/g, '')}`;
  if (type === 'email') element.href = `mailto:${value}`;
};

import('../data/business.js')
  .then(({ business }) => {
    const number = business.whatsapp.replace(/\D/g, '');
    qa('.booking-link').forEach((link) => {
      link.href = `https://wa.me/${number}?text=${encodeURIComponent(business.bookingMessage)}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });

    setContactField('footer-phone', business.phone, 'phone');
    setContactField('footer-email', business.email, 'email');
    setContactField('contact-phone', business.phone, 'phone');
    setContactField('contact-email', business.email, 'email');
    setContactField('footer-address', business.address);
    setContactField('contact-address', business.address);

    const hours = q('#hours-list');
    if (hours && Array.isArray(business.openingHours)) {
      hours.replaceChildren(...business.openingHours.map(([day, time]) => {
        const item = document.createElement('li');
        item.textContent = `${day}: ${time}`;
        return item;
      }));
    }

    const dateInput = q('#date');
    if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

    q('#booking-form')?.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const message = `Hi ${business.name},\nI'd like to book an appointment.\n\nService: ${form.get('service') || 'Not specified'}\nPreferred date: ${form.get('date') || 'Not specified'}\nPreferred time: ${form.get('time') || 'Not specified'}\nNotes: ${form.get('note') || 'None'}`;
      window.location.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    });
  })
  .catch((error) => console.warn('Business data enhancement unavailable:', error));

import('../data/services.js')
  .then(({ services }) => {
    const select = q('#service');
    if (!select || !Array.isArray(services)) return;
    const current = select.value;
    select.replaceChildren(new Option('Choose a service', ''));
    services.flatMap((group) => group.services.map((service) => ({ ...service, category: group.category })))
      .forEach((service) => select.append(new Option(`${service.name} · ${service.price}`, service.name)));
    if (current) select.value = current;
  })
  .catch((error) => console.warn('Service data enhancement unavailable:', error));

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

qa('img').forEach((image) => {
  image.addEventListener('error', () => image.closest('.image-frame, .page-hero-media, .hero-art, .gallery-tile, .contact-photo, .image-card')?.classList.add('media-failed'), { once: true });
});
