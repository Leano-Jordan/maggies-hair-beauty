/* Maggie's premium motion layer.
 * GSAP/ScrollTrigger + Lenis are progressive enhancements only.
 * Core navigation, content and booking remain functional without them.
 */
const loadScript = (src, globalName) => new Promise((resolve, reject) => {
  if (window[globalName]) { resolve(); return; }
  const existing = document.querySelector('script[data-mags-motion="' + globalName + '"]');
  if (existing) {
    existing.addEventListener('load', resolve, { once:true });
    existing.addEventListener('error', reject, { once:true });
    return;
  }
  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  script.dataset.magsMotion = globalName;
  script.onload = resolve;
  script.onerror = reject;
  document.head.appendChild(script);
});
const initPremiumMotion = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const Lenis = window.Lenis;
  if (!gsap || !ScrollTrigger || !Lenis) return false;

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    lerp: 0.08,
    autoRaf: false,
    anchors: true,
    stopInertiaOnNavigate: true
  });

  window.maggiesLenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(1000, 33);

  gsap.fromTo('.hero h1 .hero-line',
    { clipPath:'inset(0 0 100% 0)' },
    { clipPath:'inset(0 0 0 0)', duration:1, stagger:0.06, ease:'power3.out', delay:0.08 }
  );

  const menuCards = gsap.utils.toArray('.menu-card');
  if (menuCards.length) {
    gsap.from(menuCards, {
      y:24,
      autoAlpha:0,
      duration:0.8,
      stagger:0.08,
      ease:'power2.out',
      scrollTrigger:{trigger:menuCards[0], start:'top 85%', once:true}
    });
  }

  const clipImages = gsap.utils.toArray('.clip-image');
  clipImages.forEach((image) => {
    gsap.fromTo(image,
      { clipPath:'inset(100% 0 0 0)', scale:1.08 },
      {
        clipPath:'inset(0 0 0 0)',
        scale:1,
        duration:0.9,
        ease:'power2.out',
        scrollTrigger:{trigger:image, start:'top 82%', once:true}
      }
    );
  });

  const parallaxTargets = gsap.utils.toArray('.parallax');
  parallaxTargets.forEach((target) => {
    gsap.to(target, {
      yPercent:-30,
      ease:'none',
      scrollTrigger:{
        trigger:target.closest('.hero,.inspiration-section') || target,
        scrub:1,
        start:'top top',
        end:'bottom top'
      }
    });
  });

  const magneticTargets = gsap.utils.toArray('.whatsapp-primary');
  magneticTargets.forEach((button) => {
    const move = (event) => {
      const rect = button.getBoundingClientRect();
      const x = Math.max(-10, Math.min(10, (event.clientX - (rect.left + rect.width / 2)) * 0.18));
      const y = Math.max(-10, Math.min(10, (event.clientY - (rect.top + rect.height / 2)) * 0.18));
      gsap.to(button,{x,y,duration:0.25,ease:'power2.out',overwrite:true});
    };
    const reset = () => gsap.to(button,{x:0,y:0,duration:0.35,ease:'power2.out',overwrite:true});
    button.addEventListener('pointermove',move);
    button.addEventListener('pointerleave',reset);
    gsap.to(button,{
      boxShadow:'0 0 0 8px rgba(214,199,184,0.14)',
      duration:0.9,
      repeat:-1,
      yoyo:true,
      repeatDelay:4,
      ease:'sine.inOut'
    });
  });

  gsap.utils.toArray('.premium-card').forEach((card) => {
    card.addEventListener('mouseenter', () => gsap.to(card,{y:-4,duration:0.25,ease:'power2.out',overwrite:true}));
    card.addEventListener('mouseleave', () => gsap.to(card,{y:0,duration:0.25,ease:'power2.out',overwrite:true}));
  });

  ScrollTrigger.refresh();
  return true;
};

const start = async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  try {
    await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js','gsap');
    await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js','ScrollTrigger');
    await loadScript('https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.min.js','Lenis');
    initPremiumMotion();
  } catch (_) {
    // Motion is optional. Native scrolling and all core site functions remain intact.
  }
};

start();
