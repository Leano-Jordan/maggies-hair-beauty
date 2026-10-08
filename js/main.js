document.documentElement.classList.add('js');

const q = (selector, scope = document) => scope.querySelector(selector);
const qa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const MOBILE_BREAKPOINT = 800;
const root = document.body?.dataset.root || '';

const setContactField = (id, value, type) => {
  const element = q('#' + id);
  if (!element) return;
  element.textContent = value;
  if (type === 'phone') element.href = 'tel:' + value.replace(/\s/g, '');
  if (type === 'email') element.href = 'mailto:' + value;
};

const setLocalDateMinimum = (input) => {
  if (!input) return;
  const today = new Date();
  const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString().slice(0, 10);
  input.min = localDate;
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

  window.addEventListener('resize', closeNav, { passive:true });
};

const initYear = () => {
  const year = q('#year');
  if (year) year.textContent = String(new Date().getFullYear());
};

const initMediaFallbacks = () => {
  qa('img').forEach((image) => {
    image.addEventListener('error', () => {
      image.closest('.image-frame, .page-hero-media, .hero-art, .gallery-tile, .contact-photo, .image-card, .services-hero-image, .service-showcase-media')
        ?.classList.add('media-failed');
    }, { once:true });
  });
};

const initGalleryFilters = () => {
  const filters = qa('.filter');
  if (!filters.length) return;

  filters.forEach((button) => button.addEventListener('click', () => {
    filters.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
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

const initStickyActions = (business, config) => {
  if (!document.body || !config.enableBooking) return;
  if (q('.mobile-action-bar')) return;

  const bar = document.createElement('div');
  bar.className = 'mobile-action-bar';
  bar.innerHTML =
    '<a class="mobile-action booking-link" href="' + root + 'contact.html"><span aria-hidden="true">WA</span><span>Fast booking</span></a>' +
    '<a class="mobile-action location-link" href="' + (business.mapUrl || (root + 'contact.html#visit')) + '" aria-label="Open salon location"><span aria-hidden="true">⌖</span><span>Location</span></a>';

  document.body.append(bar);
  if (business.mapUrl) {
    const location = q('.mobile-action.location-link', bar);
    location.target = '_blank';
    location.rel = 'noopener noreferrer';
  }
};

const initServiceBookLinks = () => {
  qa('[data-book-service]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const service = String(link.dataset.bookService || '').trim();
      if (!service) return;
      event.preventDefault();
      const separator = link.href.includes('?') ? '&' : '?';
      window.location.href = link.href + separator + 'service=' + encodeURIComponent(service);
    });
  });
};

const initBookingForm = (business, config) => {
  const form = q('#booking-form');
  if (!form || !config.enableBooking) return;

  const service = q('#service', form);
  const date = q('#date', form);
  const timeWindow = q('#time-window', form);
  const note = q('#note', form);
  setLocalDateMinimum(date);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const serviceName = String(service?.value || '').trim();
    const preferredDate = String(date?.value || '').trim();
    const preferredTime = String(timeWindow?.value || '').trim();
    const notes = String(note?.value || '').trim();

    if (!serviceName) {
      service?.focus();
      return;
    }

    const displayDate = preferredDate
      ? new Intl.DateTimeFormat('en-ZA', { weekday:'long', day:'numeric', month:'long' }).format(new Date(preferredDate + 'T12:00:00'))
      : 'Not specified';

    const message = [
      'Hi ' + business.name + ',',
      "I'd like to book an appointment.",
      '',
      'Service: ' + serviceName,
      'Preferred date: ' + displayDate,
      'Preferred time: ' + (preferredTime || 'Flexible'),
      'Notes: ' + (notes || 'None')
    ].join('\n');

    const number = business.whatsapp.replace(/\D/g, '');
    if (config.enableWhatsApp && number) {
      window.location.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
    }
  });
};

const initQuickBooking = (business, config) => {
  const form = q('#quick-book-form');
  if (!form || !config.enableBooking || !config.enableWhatsApp) return;

  const date = q('#quick-date', form);
  setLocalDateMinimum(date);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const service = String(q('#quick-service', form)?.value || '').trim();
    const preferredDate = String(date?.value || '').trim();
    const preferredTime = String(q('#quick-time', form)?.value || '').trim();
    if (!service) {
      q('#quick-service', form)?.focus();
      return;
    }

    const displayDate = preferredDate
      ? new Intl.DateTimeFormat('en-ZA', { weekday:'short', day:'numeric', month:'short' }).format(new Date(preferredDate + 'T12:00:00'))
      : 'Not specified';

    const message = [
      'Hi ' + business.name + ',',
      "I'd like to book.",
      '',
      'Service: ' + service,
      'Preferred date: ' + displayDate,
      'Preferred time: ' + (preferredTime || 'Flexible')
    ].join('\n');

    const number = business.whatsapp.replace(/\D/g, '');
    if (number) {
      window.location.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
    }
  });
};

const initialiseBusiness = async (business, config) => {
  const number = business.whatsapp.replace(/\D/g, '');
  const bookingMessage = business.bookingMessage || ("Hi " + business.name + ", I'd like to book an appointment.");

  if (config.enableWhatsApp && number) {
    qa('.booking-link').forEach((link) => {
      link.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(bookingMessage);
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
      item.textContent = day + ': ' + time;
      return item;
    }));
  }

  const mapLink = q('#contact-map-link');
  if (mapLink && config.enableMap && business.mapUrl) {
    mapLink.href = business.mapUrl;
    mapLink.target = '_blank';
    mapLink.rel = 'noopener noreferrer';
    mapLink.hidden = false;
  }

  if (!config.enableBooking) return;
  initBookingForm(business, config);
  initQuickBooking(business, config);
};

const populateServiceSelect = (select, services) => {
  if (!select || !Array.isArray(services)) return;
  const options = [new Option('Choose a service', '')];

  services.flatMap((group) => group.services.map((service) => ({
    ...service,
    category: group.category
  }))).forEach((service) => {
    options.push(new Option(service.name + ' · ' + service.price, service.name));
  });

  select.replaceChildren(...options);
};

const initialiseServices = async (services, config) => {
  if (!Array.isArray(services)) return;

  [q('#service'), q('#quick-service')].forEach((select) => {
    if (select) populateServiceSelect(select, services);
  });

  const requestedService = new URLSearchParams(window.location.search).get('service');
  const bookingSelect = q('#service');
  if (requestedService && bookingSelect) {
    const matching = [...bookingSelect.options].find((option) => option.value === requestedService);
    if (matching) {
      bookingSelect.value = matching.value;
      q('#booking-selection')?.replaceChildren(document.createTextNode('Selected service: ' + matching.textContent));
    }
  }

  qa('[data-category-jump]').forEach((jump) => {
    jump.addEventListener('click', () => {
      qa('[data-category-jump]').forEach((item) => item.classList.toggle('active', item === jump));
    });
  });
};

initNavigation();
initYear();
initGalleryFilters();
initGalleryLightbox();
initMediaFallbacks();
initServiceBookLinks();

Promise.all([
  import(root + 'data/business.js'),
  import(root + 'data/services.js'),
  import(root + 'config/site-config.js')
])
  .then(([{ business }, { services }, { siteConfig }]) => {
    initStickyActions(business, siteConfig);
    return Promise.all([
      initialiseBusiness(business, siteConfig),
      initialiseServices(services, siteConfig)
    ]);
  })
  .catch((error) => console.warn('Optional site enhancements unavailable:', error));
