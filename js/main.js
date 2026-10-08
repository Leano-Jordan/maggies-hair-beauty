document.documentElement.classList.add('js');

const q = (selector, scope = document) => scope.querySelector(selector);
const qa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const MOBILE_BREAKPOINT = 800;
const root = document.body?.dataset.root || '';
const getBookingPath = () => root ? root + 'contact.html' : 'pages/contact.html';

const setContactField = (id, value, type) => {
  const element = q('#' + id);
  if (!element) return;
  const text = String(value || '').trim();
  if (!text) {
    element.hidden = true;
    return;
  }
  element.hidden = false;
  element.textContent = text;
  if (type === 'phone') element.href = 'tel:' + text.replace(/\s/g, '');
  if (type === 'email') element.href = 'mailto:' + text;
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

const initVerifiedProof = (business, config) => {
  const proof = business?.proof || {};
  qa('[data-proof-strip]').forEach((strip) => {
    const google = q('[data-google-proof]', strip);
    const validRating = Number.isFinite(Number(proof.googleRating)) && Number(proof.googleRating) > 0;
    const validCount = Number.isFinite(Number(proof.googleReviewCount)) && Number(proof.googleReviewCount) > 0;
    if (google && validRating && validCount && config.enableSocialProof) {
      google.textContent = Number(proof.googleRating).toFixed(1) + '★ Google (' + Number(proof.googleReviewCount) + '+)';
      google.hidden = false;
    } else if (google) {
      google.hidden = true;
    }
  });

  qa('[data-reply-time]').forEach((element) => {
    const minutes = Number(proof.whatsappResponseTime);
    if (Number.isFinite(minutes) && minutes > 0) {
      element.textContent = 'Usually replies in ' + minutes + ' mins';
      element.hidden = false;
    } else {
      element.hidden = true;
    }
  });
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
  if (!document.body || !config.enableBooking || q('.mobile-action-bar')) return;

  const bar = document.createElement('div');
  bar.className = 'mobile-action-bar';

  const booking = document.createElement('a');
  booking.className = 'mobile-action booking-link';
  booking.href = getBookingPath();
  booking.innerHTML = '<span aria-hidden="true">WA</span><span>Fast booking</span>';

  const location = document.createElement('a');
  location.className = 'mobile-action location-link';
  location.href = business.mapUrl || (getBookingPath() + '#visit');
  location.setAttribute('aria-label', 'Open salon location');
  location.innerHTML = '<span aria-hidden="true">⌖</span><span>Location</span>';

  if (business.mapUrl) {
    location.target = '_blank';
    location.rel = 'noopener noreferrer';
  }

  bar.append(booking, location);
  document.body.append(bar);
};

const initServiceAccordions = () => {
  qa('.service-detail-list').forEach((list) => {
    qa('details', list).forEach((item) => {
      item.addEventListener('toggle', () => {
        if (!item.open) return;
        qa('details', list).forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  });
};

const initServiceBookLinks = () => {
  qa('[data-book-service]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const service = String(link.dataset.bookService || '').trim();
      if (!service) return;
      event.preventDefault();
      const target = new URL(link.getAttribute('href') || 'contact.html', window.location.href);
      target.searchParams.set('service', service);
      window.location.href = target.href;
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

    if (preferredDate && date?.min && preferredDate < date.min) {
      date.setCustomValidity('Please choose today or a future date.');
      date.reportValidity();
      return;
    }
    date?.setCustomValidity('');

    const displayDate = preferredDate
      ? new Intl.DateTimeFormat('en-ZA', { weekday:'long', day:'numeric', month:'long' }).format(new Date(preferredDate + 'T12:00:00'))
      : 'Not specified';

    const message = [
      "Hi Maggie's, I'd like " + serviceName + " on " + displayDate + " at " + (preferredTime || 'a flexible time') + ".",
      notes ? "Notes: " + notes : ""
    ].filter(Boolean).join('\n');

    const number = business.whatsapp.replace(/\D/g, '');
    if (config.enableWhatsApp && number) {
      window.location.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
    }
  });
};

const initQuickBooking = (business, config) => {
  const form = q('#quick-book-form');
  if (!form || !config.enableBooking || !config.enableWhatsApp) return;

  const refresh = q('#quick-refresh', form);
  const availability = q('#quick-availability', form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const refreshGoal = String(refresh?.value || '').trim();
    const whenFree = String(availability?.value || '').trim();

    if (!refreshGoal) {
      refresh?.focus();
      return;
    }
    if (!whenFree) {
      availability?.focus();
      return;
    }

    const message = [
      "Hi Maggie's, I'd like " + refreshGoal + " on " + whenFree + "."
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

  if (config.enableBooking) {
    const bookingPath = getBookingPath();
    qa('.booking-link').forEach((link) => {
      if (link.dataset.directWhatsapp === 'true' && config.enableWhatsApp && number) {
        link.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(bookingMessage);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        return;
      }
      link.href = bookingPath;
      link.target = '';
      link.rel = '';
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
    const entries = business.openingHours
      .filter((entry) => Array.isArray(entry) && entry.length >= 2 && entry[0] && entry[1]);
    if (entries.length) {
      hours.replaceChildren(...entries.map(([day, time]) => {
        const item = document.createElement('li');
        item.textContent = day + ': ' + time;
        return item;
      }));
    } else {
      const item = document.createElement('li');
      item.textContent = 'Availability is confirmed directly on WhatsApp.';
      hours.replaceChildren(item);
    }
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
initServiceAccordions();
initServiceBookLinks();

Promise.all([
  import(root + 'data/business.js'),
  import(root + 'data/services.js'),
  import(root + 'config/site-config.js')
]).then(([businessModule, servicesModule, configModule]) => {
  if (configModule.siteConfig.enablePremiumMotion) {
    import(root + 'js/motion.js').catch(() => {});
  }
  return Promise.all([businessModule, servicesModule, configModule]);
})
  .then(async ([{ business }, { services }, { siteConfig }]) => {
    initStickyActions(business, siteConfig);
    initVerifiedProof(business, siteConfig);
    initRefillShelf(business, siteConfig);
    initReviewWidget(business);
    if (siteConfig.enableSocialProof) {
      const [{ testimonials }, { portfolio }] = await Promise.all([
        import(root + 'data/testimonials.js'),
        import(root + 'data/portfolio.js')
      ]);
      initSocialProof(testimonials, siteConfig);
      initPortfolio(portfolio, siteConfig);
    }
    return Promise.all([
      initialiseBusiness(business, siteConfig),
      initialiseServices(services, siteConfig)
    ]);
  })
  .catch((error) => console.warn('Optional site enhancements unavailable:', error));

const initComparisonSliders = () => {
  qa('[data-comparison]').forEach((card) => {
    const range = q('.comparison-range', card);
    const before = q('.comparison-before', card);
    const handle = q('.comparison-handle', card);
    if (!range || !before || !handle) return;
    const sync = () => {
      const value = Number(range.value);
      before.style.width = value + '%';
      handle.style.left = value + '%';
    };
    range.addEventListener('input', sync);
    sync();
  });
};

const initPortfolio = (portfolio, config) => {
  const section = q('[data-transformations]');
  if (!section || !config.enableGallery || !Array.isArray(portfolio?.transformations)) return;
  const approved = portfolio.transformations.filter((item) => item && item.approved === true && item.before && item.after && item.title);
  if (approved.length < 6) return;
  const grid = q('.transformations-grid', section);
  if (!grid) return;
  section.hidden = false;
  grid.replaceChildren(...approved.slice(0,6).map((item) => {
    const figure = document.createElement('figure');
    figure.className = 'transformation-card';
    figure.innerHTML = '<div class="transformation-pair"><img class="before" alt=""><img class="after" alt=""></div><figcaption><strong></strong><span></span></figcaption>';
    const before = q('.before',figure);
    const after = q('.after',figure);
    before.src = item.before;
    after.src = item.after;
    before.alt = item.title + ' before';
    after.alt = item.title + ' after';
    q('strong',figure).textContent = item.title;
    q('span',figure).textContent = item.category || 'Transformation';
    return figure;
  }));
};

const initSocialProof = (testimonials, config) => {
  const section = q('[data-social-proof]');
  if (!section || !config.enableSocialProof || !Array.isArray(testimonials) || testimonials.length < 2) return;
  const approved = testimonials.filter((item) => item && item.verified === true && item.source === 'Google' && item.name && item.suburb && item.review);
  if (approved.length < 2) return;
  const grid = q('.social-proof-grid', section);
  if (!grid) return;
  section.hidden = false;
  grid.replaceChildren(...approved.slice(0,2).map((item) => {
    const article = document.createElement('article');
    article.className = 'social-proof-card';
    article.innerHTML = '<div class="social-proof-stars" aria-label="5 star Google review">★★★★★</div><blockquote></blockquote><footer></footer>';
    q('blockquote',article).textContent = item.review;
    q('footer',article).textContent = item.name + ' · ' + item.suburb;
    return article;
  }));
};

const initRefillShelf = (business, config) => {
  const section = q('[data-refill-shelf]');
  if (!section || !config.enableRefillShelf) return;
  const message = String(business?.refillOffer || '').trim();
  if (!message) return;
  const copy = q('.refill-copy', section);
  if (copy) copy.textContent = message;
  section.hidden = false;
};

const initReviewWidget = (business) => {
  qa('[data-review-widget]').forEach((widget) => {
    const score = q('.review-score strong', widget);
    const quote = q('[data-review-quote]', widget);
    const profile = business?.googleBusinessProfileUrl || '';
    if (profile && score && quote) {
      quote.textContent = 'Verified reviews will appear here when the salon’s approved Google Business Profile source is connected.';
      widget.dataset.connected = 'true';
      widget.setAttribute('data-profile-url', profile);
    }
  });
};

initComparisonSliders();
