/* ═══════════════════════════════════════════
   EDENELLE CRÉATION — components.js
   Nav, Footer, Cart, shared utilities
   ═══════════════════════════════════════════ */

// ── CART STATE ──
const Cart = {
  items: JSON.parse(localStorage.getItem('edenelle_cart') || '[]'),
  
  add(item) {
    this.items.push(item);
    this.save();
    this.updateCount();
    this.showNotif(item.name);
  },
  
  remove(index) {
    this.items.splice(index, 1);
    this.save();
    this.updateCount();
  },
  
  save() {
    localStorage.setItem('edenelle_cart', JSON.stringify(this.items));
  },
  
  total() {
    return this.items.reduce((sum, i) => sum + i.price, 0).toFixed(2);
  },
  
  count() { return this.items.length; },
  
  updateCount() {
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = this.count();
      el.style.display = this.count() > 0 ? 'flex' : 'none';
    });
  },
  
  showNotif(name) {
    const notif = document.getElementById('cart-notif');
    if (!notif) return;
    notif.querySelector('.notif-name').textContent = name;
    notif.classList.add('show');
    setTimeout(() => notif.classList.remove('show'), 3000);
  }
};

// ── RENDER NAV ──
function renderNav(activePage = '') {
  const html = `
    <div class="top-banner">
      <div class="banner-track">
        <span>🇫🇷 Confectionné en Vendée</span>
        <span>·</span>
        <span>🧵 Broderie personnalisée au prénom de bébé</span>
        <span>·</span>
        <span>📦 Mondial Relay offert dès 130€ — code <strong>LIVRAISON</strong></span>
        <span>·</span>
        <span>✅ Matières Oeko-Tex certifiées</span>
        <span>·</span>
        <span>⭐ +4000 clients satisfaits</span>
        <span>·</span>
        <span>🇫🇷 Confectionné en Vendée</span>
        <span>·</span>
        <span>🧵 Broderie personnalisée au prénom de bébé</span>
        <span>·</span>
        <span>📦 Mondial Relay offert dès 130€ — code <strong>LIVRAISON</strong></span>
        <span>·</span>
        <span>✅ Matières Oeko-Tex certifiées</span>
        <span>·</span>
        <span>⭐ +4000 clients satisfaits</span>
      </div>
    </div>
    <nav>
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">Edenelle <span>Création</span></a>
        <ul class="nav-links" id="navLinks">
          <li>
            <a href="catalogue.html" class="${activePage==='packs'?'active':''}">Packs Brodés</a>
            <div class="nav-dropdown">
              <a href="catalogue.html?cat=packs">Tous les packs</a>
              <a href="catalogue.html?cat=packs-polaire">Packs polaire</a>
              <a href="catalogue.html?cat=packs-coton">Packs coton</a>
            </div>
          </li>
          <li>
            <a href="catalogue.html?cat=couvertures" class="${activePage==='couvertures'?'active':''}">Couvertures</a>
          </li>
          <li>
            <a href="catalogue.html?cat=gigoteuses" class="${activePage==='gigoteuses'?'active':''}">Gigoteuses</a>
          </li>
          <li>
            <a href="catalogue.html?cat=trousseau" class="${activePage==='trousseau'?'active':''}">Trousseau</a>
            <div class="nav-dropdown">
              <a href="catalogue.html?cat=tenues">Tenues de naissance</a>
              <a href="catalogue.html?cat=doudous">Doudous</a>
              <a href="catalogue.html?cat=bain">Bain & Peignoirs</a>
              <a href="catalogue.html?cat=sacs">Sacs & Pochettes</a>
            </div>
          </li>
          <li>
            <a href="catalogue.html?cat=accessoires" class="${activePage==='accessoires'?'active':''}">Accessoires</a>
          </li>
          <li>
            <a href="carte-cadeau.html" class="${activePage==='cadeau'?'active':''}">🎁 Idées Cadeaux</a>
          </li>
        </ul>
        <div class="nav-right">
          <button class="nav-icon" onclick="toggleSearch()" title="Rechercher">🔍</button>
          <button class="nav-icon" onclick="window.location='contact.html'" title="Contact">👤</button>
          <button class="nav-icon" onclick="toggleCart()" title="Panier" style="position:relative;">
            🛍️
            <span class="cart-count" style="display:none;">0</span>
          </button>
          <button class="nav-burger" onclick="toggleMobileNav()">☰</button>
        </div>
      </div>
      <!-- Mobile nav -->
      <div id="mobileNav" style="display:none; background:var(--warm-white); border-top:1px solid var(--border); padding:20px 32px;">
        <ul style="list-style:none; display:flex; flex-direction:column; gap:16px;">
          <li><a href="catalogue.html" style="font-size:14px; color:var(--text); text-decoration:none; letter-spacing:0.1em; text-transform:uppercase;">Packs Brodés</a></li>
          <li><a href="catalogue.html?cat=couvertures" style="font-size:14px; color:var(--text); text-decoration:none; letter-spacing:0.1em; text-transform:uppercase;">Couvertures</a></li>
          <li><a href="catalogue.html?cat=gigoteuses" style="font-size:14px; color:var(--text); text-decoration:none; letter-spacing:0.1em; text-transform:uppercase;">Gigoteuses</a></li>
          <li><a href="catalogue.html?cat=trousseau" style="font-size:14px; color:var(--text); text-decoration:none; letter-spacing:0.1em; text-transform:uppercase;">Trousseau</a></li>
          <li><a href="catalogue.html?cat=accessoires" style="font-size:14px; color:var(--text); text-decoration:none; letter-spacing:0.1em; text-transform:uppercase;">Accessoires</a></li>
          <li><a href="carte-cadeau.html" style="font-size:14px; color:var(--gold); text-decoration:none; letter-spacing:0.1em; text-transform:uppercase;">🎁 Idées Cadeaux</a></li>
          <li><a href="contact.html" style="font-size:14px; color:var(--text); text-decoration:none; letter-spacing:0.1em; text-transform:uppercase;">Contact</a></li>
        </ul>
      </div>
    </nav>
    <!-- Cart notification -->
    <div id="cart-notif" style="position:fixed; top:90px; right:24px; background:var(--text); color:var(--cream); padding:14px 20px; font-size:12px; letter-spacing:0.06em; z-index:500; transform:translateX(120%); transition:transform 0.3s; border-left:3px solid var(--gold);">
      ✓ <span class="notif-name"></span> ajouté au panier
    </div>
  `;
  document.getElementById('site-header').innerHTML = html;
  Cart.updateCount();
}

// ── RENDER FOOTER ──
function renderFooter() {
  const html = `
    <div class="footer-main">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo" style="color:var(--gold-light);">Edenelle <span>Création</span></a>
        <p>Créations brodées personnalisées, confectionnées artisanalement en Vendée pour célébrer l'arrivée de votre trésor.</p>
        <div class="footer-social">
          <a href="https://www.tiktok.com/@edenelle.creation" class="social-btn" target="_blank">TT</a>
          <a href="https://www.facebook.com/edenelle.creation" class="social-btn" target="_blank">FB</a>
          <a href="https://www.instagram.com/edenellecreation/" class="social-btn" target="_blank">IG</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Collections</h4>
        <ul>
          <li><a href="catalogue.html">Packs Brodés</a></li>
          <li><a href="catalogue.html?cat=couvertures">Couvertures</a></li>
          <li><a href="catalogue.html?cat=gigoteuses">Gigoteuses</a></li>
          <li><a href="catalogue.html?cat=doudous">Doudous</a></li>
          <li><a href="catalogue.html?cat=tenues">Tenues</a></li>
          <li><a href="catalogue.html?cat=bain">Bain</a></li>
          <li><a href="catalogue.html?cat=sacs">Sacs & Pochettes</a></li>
          <li><a href="catalogue.html?cat=accessoires">Accessoires</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Informations</h4>
        <ul>
          <li><a href="a-propos.html">Notre histoire</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="carte-cadeau.html">Carte cadeau</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="livraison.html">Livraison</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Légal</h4>
        <ul>
          <li><a href="cgv.html">CGV</a></li>
          <li><a href="confidentialite.html">Confidentialité</a></li>
          <li><a href="mentions-legales.html">Mentions légales</a></li>
          <li><a href="retours.html">Politique de retour</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© Edenelle Création 2021 — SIRET n°94845473100019 — Challans, Vendée (85300)</span>
      <span>Fait avec 🧵 en Vendée</span>
    </div>
  `;
  document.getElementById('site-footer').innerHTML = html;
}

// ── RENDER BADGE STRIP ──
function renderBadgeStrip() {
  const el = document.getElementById('badge-strip');
  if (!el) return;
  el.innerHTML = `
    <div class="badge-strip">
      <div class="badge-strip-track">
        <span class="badge-item">🇫🇷 <strong>Confectionné en France</strong> · Artisanal en Vendée</span>
        <span class="badge-item">🧵 <strong>Broderie personnalisée</strong> · Au prénom de bébé</span>
        <span class="badge-item">✅ <strong>Matières Oeko-Tex</strong> · Sûres pour bébé</span>
        <span class="badge-item">📦 <strong>Mondial Relay offert</strong> · Dès 130€ code LIVRAISON</span>
        <span class="badge-item">⭐ <strong>+4000 clients</strong> · Satisfaits</span>
        <span class="badge-item">💛 <strong>Satisfaite</strong> · Ou remboursée</span>
        <span class="badge-item">🇫🇷 <strong>Confectionné en France</strong> · Artisanal en Vendée</span>
        <span class="badge-item">🧵 <strong>Broderie personnalisée</strong> · Au prénom de bébé</span>
        <span class="badge-item">✅ <strong>Matières Oeko-Tex</strong> · Sûres pour bébé</span>
        <span class="badge-item">📦 <strong>Mondial Relay offert</strong> · Dès 130€ code LIVRAISON</span>
        <span class="badge-item">⭐ <strong>+4000 clients</strong> · Satisfaits</span>
        <span class="badge-item">💛 <strong>Satisfaite</strong> · Ou remboursée</span>
      </div>
    </div>
  `;
}

// ── UTILITIES ──
function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
}

function toggleSearch() {
  const q = prompt('Rechercher un produit :');
  if (q) window.location = `catalogue.html?q=${encodeURIComponent(q)}`;
}

function toggleCart() {
  window.location = 'panier.html';
}

// Notif show helper
document.addEventListener('DOMContentLoaded', () => {
  const notif = document.getElementById('cart-notif');
  if (notif) {
    notif.addEventListener('transitionend', () => {});
  }
});

// CSS inject for notif
const s = document.createElement('style');
s.textContent = `#cart-notif.show { transform: translateX(0) !important; }`;
document.head.appendChild(s);
