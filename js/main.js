document.documentElement.classList.add('js');

const q = (selector, scope = document) => scope.querySelector(selector);
const qa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const MOBILE_BREAKPOINT = 800;
const root = document.body?.dataset.root || '';

const setContactField = (id, value, type) => {
  const element = q(`#${id}`);
  if (!element) return;
  element.textContent = value;
  if (type === 'phone') element.href = `tel:${value.replace(/\s/g, '')}`;
  if (type === 'email') element.href = `mailto:${value}`;
};

const initNavigation = () => {
  const toggle = q('.nav-toggle');
  const nav = q('.primary-nav');
  if (!toggle || !nav) return;

  const setNavState = (open, { restoreFocus = false } = {}) => {
    const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
    const active = mobile && open;
    nav.classList.toggle('open', active);
    toggle.setAttribute('aria-expanded', String(active));
    toggle.setAttribute('aria-label', active ? 'Close navigation' : 'Open navigation');
    nav.setAttribute('aria-hidden', String(mobile && !active));
    document.body.classList.toggle('nav-open', active);
    if (restoreFocus) toggle.focus();
  };

  const closeNav = () => setNavState(false);

  setNavState(false);

  toggle.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    setNavState(open);
    if (open) q('a', nav)?.focus();
  });

  qa('a', nav).forEach((link) => link.addEventListener('click', closeNav));

  document.addEventListener('click', (event) => {
    if (nav.classList.contains('open') && !event.target.closest('.header-inner')) closeNav();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      closeNav();
      toggle.focus();
    }
  });

  window.addEventListener('resize', () => setNavState(false), { passive: true });
};

const initYear = () => {
  const year = q('#year');
  if (year) year.textContent = String(new Date().getFullYear());
};

const initMediaFallbacks = () => {
  qa('img').forEach((image) => {
    image.addEventListener('error', () => {
      image.closest('.image-frame, .page-hero-media, .hero-art, .gallery-tile, .contact-photo, .image-card')
        ?.classList.add('media-failed');
    }, { once: true });
  });
};

const initGalleryFilters = () => {
  const filters = qa('.filter');
  if (!filters.length) return;

  filters.forEach((button) => button.addEventListener('click', () => {
    filters.forEach((item) => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });

    qa('[data-category]').forEach((item) => {
      item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter;
    });
  }));
};

const initGalleryLightbox = () => {
  const dialog = q('#gallery-lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const image = q('#lightbox-image', dialog);
  const title = q('#lightbox-title', dialog);
  const close = q('.gallery-lightbox-close', dialog);
  if (!image || !title || !close) return;

  let trigger = null;

  const closeDialog = () => {
    if (dialog.open) dialog.close();
    trigger?.focus();
    trigger = null;
  };

  qa('.gallery-tile[data-lightbox]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      trigger = link;
      image.src = link.href;
      image.alt = link.querySelector('img')?.alt || link.textContent.trim();
      title.textContent = link.querySelector('span')?.textContent.trim() || image.alt;
      dialog.showModal();
      close.focus();
    });
  });

  close.addEventListener('click', closeDialog);
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeDialog();
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeDialog();
  });
};

const initialiseBusiness = async (business, config) => {
  const number = business.whatsapp.replace(/\D/g, '');
  const bookingMessage = business.bookingMessage || `Hi ${business.name}, I'd like to book an appointment.`;

  if (config.enableWhatsApp && number) {
    qa('.booking-link').forEach((link) => {
      link.href = `https://wa.me/${number}?text=${encodeURIComponent(bookingMessage)}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
  }

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
  if (dateInput) {
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString().slice(0, 10);
    dateInput.min = localDate;
  }

  if (!config.enableBooking) return;

  q('#booking-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const service = String(form.get('service') || '').trim();
    const date = String(form.get('date') || '').trim();
    const time = String(form.get('time') || '').trim();
    const note = String(form.get('note') || '').trim();

    if (!service) {
      q('#service')?.focus();
      return;
    }

    const message = `Hi ${business.name},
I'd like to book an appointment.

Service: ${service}
Preferred date: ${date || 'Not specified'}
Preferred time: ${time || 'Not specified'}
Notes: ${note || 'None'}`;

    if (config.enableWhatsApp && number) {
      window.location.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    }
  });
};

const initialiseServices = async (services, config) => {
  if (!config.enableBooking) return;
  const select = q('#service');
  if (!select || !Array.isArray(services)) return;

  const current = select.value;
  const options = [new Option('Choose a service', '')];

  services.flatMap((group) => group.services.map((service) => ({
    ...service,
    category: group.category
  }))).forEach((service) => {
    options.push(new Option(`${service.name} · ${service.price}`, service.name));
  });

  select.replaceChildren(...options);
  if (current) select.value = current;
};

initNavigation();
initYear();
initGalleryFilters();
initGalleryLightbox();
initMediaFallbacks();

Promise.all([
  import(`${root}data/business.js`),
  import(`${root}data/services.js`),
  import(`${root}config/site-config.js`)
])
  .then(([{ business }, { services }, { siteConfig }]) => {
    return Promise.all([
      initialiseBusiness(business, siteConfig),
      initialiseServices(services, siteConfig)
    ]);
  })
  .catch((error) => console.warn('Optional site enhancements unavailable:', error));
