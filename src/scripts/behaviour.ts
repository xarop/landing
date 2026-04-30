// ----- Contact Form AJAX -----
const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
const contactFeedback = document.getElementById('contact-form-feedback');
if (contactForm && contactFeedback) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    contactFeedback.style.display = 'none';
    contactFeedback.textContent = '';
    const formData = new FormData(contactForm);
    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        contactFeedback.textContent = 'Missatge enviat!';
        contactFeedback.style.display = 'block';
        contactFeedback.style.color = 'var(--color-accent)';
        contactForm.reset();
      } else {
        contactFeedback.textContent = data.error || 'Error enviant el missatge.';
        contactFeedback.style.display = 'block';
        contactFeedback.style.color = 'red';
      }
    } catch {
      contactFeedback.textContent = 'Error de connexió.';
      contactFeedback.style.display = 'block';
      contactFeedback.style.color = 'red';
    }
  });
}
// ----- Contact Modal -----
const contactModal = document.getElementById('contact-modal');
const openContactBtn = document.getElementById('open-contact-modal');
const closeContactBtn = contactModal?.querySelector('.modal__close');
const modalBackdrop = contactModal?.querySelector('.modal__backdrop');

function setContactModal(open: boolean) {
  if (!contactModal) return;
  contactModal.setAttribute('aria-hidden', open ? 'false' : 'true');
  if (open) {
    contactModal.focus();
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

openContactBtn?.addEventListener('click', () => setContactModal(true));
closeContactBtn?.addEventListener('click', () => setContactModal(false));
modalBackdrop?.addEventListener('click', () => setContactModal(false));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && contactModal?.getAttribute('aria-hidden') === 'false') {
    setContactModal(false);
  }
});
/**
 * Site behaviour: flavor switcher, theme toggle, hamburger drawer,
 * lang/flavors popovers, scroll reveals.
 *
 * Loaded once from Base.astro with `<script>` (Astro will bundle it).
 */

const root = document.documentElement;

/* ----- Flavor switcher ----- */
const flavorBtns = document.querySelectorAll<HTMLButtonElement>('[data-flavor]');
const stored = localStorage.getItem('xarop:flavor');
if (stored) root.setAttribute('data-flavor', stored);

flavorBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const f = btn.getAttribute('data-flavor');
    if (!f) return;
    root.setAttribute('data-flavor', f);
    try { localStorage.setItem('xarop:flavor', f); } catch {}
    flavorBtns.forEach((b) =>
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false')
    );
  });
});
const cur = root.getAttribute('data-flavor');
flavorBtns.forEach((b) =>
  b.setAttribute('aria-pressed', b.getAttribute('data-flavor') === cur ? 'true' : 'false')
);

/* ----- Theme toggle ----- */
const themeBtn = document.querySelector<HTMLButtonElement>('.theme-toggle');
const storedTheme = localStorage.getItem('xarop:theme');
if (storedTheme) root.setAttribute('data-theme', storedTheme);

themeBtn?.addEventListener('click', () => {
  const isDark =
    root.getAttribute('data-theme') === 'dark' ||
    (!root.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
  const next = isDark ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('xarop:theme', next); } catch {}
});

/* ----- Reveal on scroll ----- */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
if (reduce) {
  reveals.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach((el) => io.observe(el));
}

/* ----- Hamburger drawer ----- */
const topbar = document.querySelector<HTMLElement>('.topbar');
const hamburger = document.querySelector<HTMLButtonElement>('.hamburger');

const setNavOpen = (open: boolean) => {
  if (!topbar || !hamburger) return;
  topbar.setAttribute('data-nav-open', open ? 'true' : 'false');
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
};

hamburger?.addEventListener('click', (e) => {
  e.stopPropagation();
  const open = topbar?.getAttribute('data-nav-open') === 'true';
  setNavOpen(!open);
});
document.querySelectorAll('.topbar__nav a').forEach((a) => {
  a.addEventListener('click', () => setNavOpen(false));
});

/* ----- Popovers (lang + flavors) ----- */
const popovers = document.querySelectorAll<HTMLElement>('.popover');

const setPop = (pop: HTMLElement, open: boolean) => {
  pop.setAttribute('data-open', open ? 'true' : 'false');
  pop.querySelector<HTMLButtonElement>('.popover__trigger')?.setAttribute(
    'aria-expanded',
    open ? 'true' : 'false'
  );
};

popovers.forEach((pop) => {
  const trig = pop.querySelector<HTMLButtonElement>('.popover__trigger');
  trig?.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = pop.getAttribute('data-open') === 'true';
    popovers.forEach((p) => { if (p !== pop) setPop(p, false); });
    setPop(pop, !open);
  });
  pop.querySelectorAll<HTMLElement>('.popover__panel button, .popover__panel a').forEach((b) => {
    b.addEventListener('click', () => setTimeout(() => setPop(pop, false), 80));
  });
});

document.addEventListener('click', (e) => {
  const target = e.target as Node;
  popovers.forEach((p) => {
    if (p.getAttribute('data-open') === 'true' && !p.contains(target)) setPop(p, false);
  });
  if (topbar?.getAttribute('data-nav-open') === 'true' && !topbar.contains(target)) {
    setNavOpen(false);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  popovers.forEach((p) => setPop(p, false));
  setNavOpen(false);
});

export {};
