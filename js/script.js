// ==================== DATA: 11 TONOS ====================
const SHADES = [
  { num: 100, name: 'Sweet Porcelain', color: '#f7e4d0' },
  { num: 200, name: 'Yogurt Fit',      color: '#f3dcc0' },
  { num: 300, name: 'Very Natural',    color: '#efd2ac' },
  { num: 400, name: 'Light Cotton',    color: '#ecc79a' },
  { num: 500, name: 'Sand Creamy',     color: '#e5bb87' },
  { num: 600, name: 'Souffle Beige',   color: '#dcac72' },
  { num: 700, name: 'Coconut Medium',  color: '#c99257' },
  { num: 800, name: 'Ginger Tan',      color: '#b87d44' },
  { num: 900, name: 'Warm Honey',      color: '#a2673a' },
  { num: 920, name: 'Sand Glow',       color: '#8f5a34' },
  { num: 940, name: 'Moca Radiance',   color: '#734527' },
];

// ==================== RENDER SHADES ====================
const shadeGrid = document.getElementById('shadeGrid');
const shadeSelected = document.getElementById('shadeSelected');
const shadeInput = document.getElementById('shadeInput');

SHADES.forEach((shade) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'shade';
  btn.dataset.num = shade.num;
  btn.innerHTML = `
    <span class="shade__swatch" style="background:${shade.color}"></span>
    <span class="shade__info">
      <span class="shade__num">${shade.num}</span>
      <span class="shade__name">${shade.name}</span>
    </span>
  `;
  btn.addEventListener('click', () => selectShade(shade, btn));
  shadeGrid.appendChild(btn);
});

function selectShade(shade, btn) {
  document.querySelectorAll('.shade').forEach((el) => el.classList.remove('is-active'));
  btn.classList.add('is-active');
  shadeSelected.textContent = `Tono elegido: ${shade.num} · ${shade.name}`;
  shadeSelected.classList.add('is-set');
  shadeInput.value = `${shade.num} · ${shade.name}`;
}

// ==================== MOBILE NAV ====================
const navBurger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

navBurger.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('is-open'));
});

// ==================== BUY FORM ====================
const buyForm = document.getElementById('buyForm');
const toast = document.getElementById('toast');

buyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!shadeInput.value) {
    showToast('Por favor elige un tono antes de continuar ✨');
    document.getElementById('tonos').scrollIntoView({ behavior: 'smooth' });
    return;
  }
  showToast(`¡Agregado! HUMIDE ${shadeInput.value} · $38.000`);
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('is-visible'), 3000);
}

// ==================== SCROLL REVEAL ====================
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => observer.observe(el));

// ==================== FOOTER YEAR ====================
document.getElementById('year').textContent = new Date().getFullYear();
