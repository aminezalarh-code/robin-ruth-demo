/* USA Souvenir — interactive browser demonstration.
   All data is sample data held in this browser only (resettable). */
(function () {
  'use strict';
const SKY = {
  boston: 'M0 60 L0 38 L8 38 L8 26 L14 26 L14 18 L18 10 L22 18 L22 26 L30 26 L30 34 L38 34 L38 22 L46 22 L46 34 L54 34 L54 14 L58 4 L62 14 L62 34 L72 34 L72 28 L80 28 L80 40 L90 40 L90 30 L100 30 L100 60 Z',
  'new-york': 'M0 60 L0 34 L8 34 L8 22 L16 22 L16 30 L24 30 L24 12 L28 12 L30 2 L32 12 L36 12 L36 30 L44 30 L44 18 L52 18 L52 26 L60 26 L60 8 L66 8 L66 28 L76 28 L76 20 L84 20 L84 36 L100 36 L100 60 Z',
  miami: 'M0 60 L0 40 L10 40 L10 30 L18 30 L18 40 L26 40 L26 24 L36 24 L36 40 L46 40 L46 30 L56 30 L56 40 L66 40 L66 20 L74 20 L74 40 L100 40 L100 60 Z M84 40 L85 22 Q78 18 74 22 Q80 16 86 20 Q88 12 96 14 Q90 16 88 21 Q96 20 98 26 Q92 22 87 23 L88 40 Z',
};
const esc2 = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function objectSvg(kind, c, city) {
  const C = esc2(city.toUpperCase());
  const sky = (x, y, s, fill) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="${SKY[c.slug] || SKY.boston}" fill="${fill}"/></g>`;
  switch (kind) {
    case 'mug': return `<path d="M520 300 h70 a60 60 0 0 1 0 150 h-70" fill="none" stroke="${c.main}" stroke-width="34"/>
      <rect x="250" y="250" width="300" height="320" rx="28" fill="${c.main}"/><rect x="250" y="250" width="300" height="26" rx="13" fill="${c.dark}"/>
      ${sky(285, 390, 2.3, c.light)}<text x="400" y="360" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="54" fill="${c.light}">${C}</text>`;
    case 'tumbler': return `<path d="M290 230 L510 230 L485 600 Q400 620 315 600 Z" fill="${c.main}"/><rect x="280" y="200" width="240" height="44" rx="14" fill="${c.dark}"/>
      <rect x="395" y="160" width="12" height="60" rx="6" fill="${c.dark}"/>${sky(320, 430, 1.6, c.light)}
      <text x="400" y="380" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="40" fill="${c.light}">${C}</text>`;
    case 'crossbody': return `<path d="M300 300 Q400 60 500 300" fill="none" stroke="${c.dark}" stroke-width="14"/>
      <rect x="250" y="290" width="300" height="250" rx="40" fill="${c.main}"/><path d="M250 340 h300 v40 Q400 430 250 380 Z" fill="${c.dark}" opacity=".55"/>
      <circle cx="400" cy="400" r="12" fill="${c.light}"/>${sky(300, 450, 2, c.light)}`;
    case 'cap': return `<path d="M230 430 Q240 230 400 220 Q560 230 570 430 Z" fill="${c.main}"/><path d="M200 430 Q400 470 640 440 Q660 500 560 500 Q400 500 230 470 Z" fill="${c.dark}"/>
      <circle cx="400" cy="222" r="14" fill="${c.dark}"/><text x="400" y="380" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="56" fill="${c.light}">${C}</text>`;
    case 'keyring': return `<circle cx="400" cy="230" r="70" fill="none" stroke="#9aa3ad" stroke-width="14"/><rect x="392" y="290" width="16" height="50" fill="#9aa3ad"/>
      <rect x="290" y="330" width="220" height="260" rx="30" fill="${c.main}"/>${sky(305, 470, 1.9, c.light)}
      <text x="400" y="430" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="40" fill="${c.light}">${C}</text>`;
    case 'tote': return `<path d="M320 300 Q320 160 400 160 Q480 160 480 300" fill="none" stroke="${c.dark}" stroke-width="18"/>
      <path d="M230 290 h340 l-20 320 h-300 Z" fill="${c.light}" stroke="${c.main}" stroke-width="6"/>${sky(270, 470, 2.6, c.main)}
      <text x="400" y="420" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="56" fill="${c.main}">${C}</text>`;
    case 'magnet': return `<g transform="rotate(-6 400 400)"><rect x="220" y="260" width="360" height="260" rx="22" fill="${c.main}"/>
      ${sky(240, 380, 3.2, c.dark)}<text x="400" y="340" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="58" fill="${c.light}">${C}</text></g>`;
    case 'tshirt': return `<path d="M300 200 L230 240 L180 330 L250 360 L280 320 L280 600 L520 600 L520 320 L550 360 L620 330 L570 240 L500 200 Q400 260 300 200 Z" fill="${c.main}"/>
      ${sky(320, 420, 1.6, c.light)}<text x="400" y="400" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="44" fill="${c.light}">${C}</text>`;
    case 'shotglass': return `<path d="M320 300 L480 300 L460 540 L340 540 Z" fill="${c.light}" stroke="${c.main}" stroke-width="8"/><rect x="336" y="510" width="128" height="30" fill="${c.main}"/>
      <text x="400" y="430" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="34" fill="${c.main}">${C}</text>`;
    case 'ornament': return `<rect x="370" y="190" width="60" height="40" rx="8" fill="#c9a227"/><circle cx="400" cy="380" r="160" fill="${c.main}"/>
      <path d="M240 380 Q400 330 560 380 Q400 430 240 380" fill="${c.light}" opacity=".7"/><text x="400" y="395" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="40" fill="${c.dark}">${C}</text>`;
    case 'postcards': return `<g transform="rotate(-8 400 400)"><rect x="210" y="250" width="380" height="250" rx="10" fill="${c.light}" stroke="${c.dark}" stroke-width="4"/></g>
      <g transform="rotate(4 400 400)"><rect x="220" y="270" width="380" height="250" rx="10" fill="${c.main}"/>${sky(240, 400, 3.4, c.dark)}
      <text x="410" y="350" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="30" fill="${c.light}">GREETINGS FROM ${C}</text></g>`;
    case 'snowglobe': return `<circle cx="400" cy="350" r="170" fill="${c.light}" stroke="${c.main}" stroke-width="6"/>${sky(300, 340, 2, c.main)}
      <path d="M260 480 h280 l30 110 h-340 Z" fill="${c.dark}"/><text x="400" y="560" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="34" fill="${c.light}">${C}</text>`;
    case 'display': return `<rect x="390" y="140" width="20" height="470" fill="#7a828c"/><rect x="300" y="600" width="200" height="22" rx="10" fill="#4a525c"/>
      ${[0, 1, 2, 3].map((i) => `<rect x="${290 + (i % 2) * 120}" y="${170 + i * 105}" width="100" height="90" rx="10" fill="${i % 2 ? c.main : c.dark}"/>`).join('')}
      <rect x="320" y="110" width="160" height="44" rx="8" fill="${c.main}"/><text x="400" y="141" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="24" fill="${c.light}">${C}</text>`;
    default: return `<rect x="250" y="250" width="300" height="300" rx="30" fill="${c.main}"/>`;
  }
}

function productSvg({ kind, citySlug, city, palette }) {
  const c = { slug: citySlug, ...palette };
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbf8f3"/><stop offset="1" stop-color="#efe9df"/></linearGradient></defs>
  <rect width="800" height="800" fill="url(#bg)"/><ellipse cx="400" cy="650" rx="240" ry="26" fill="#000" opacity=".08"/>
  ${objectSvg(kind, c, city)}
  <text x="30" y="775" font-family="Arial, sans-serif" font-size="18" fill="#8a8f96">Sample artwork</text></svg>`;
}

const KIND={'001':'mug','002':'tumbler','003':'crossbody','004':'cap','005':'keyring','006':'tote','007':'magnet','008':'tshirt','101':'snowglobe','102':'ornament','103':'postcards','104':'shotglass','901':'display','902':'display','501':'crossbody','502':'mug'};
const CITYART={bos:['boston','Boston',{main:'#13294b',dark:'#c8102e',light:'#f4efe6'}],nyc:['new-york','New York',{main:'#1d1d1f',dark:'#f2b705',light:'#f7f4ec'}],mia:['miami','Miami',{main:'#0f7c8c',dark:'#ff6f59',light:'#fff6ea'}]};
const ART={};
function artFor(p){ if(ART[p.id]) return ART[p.id]; var m=/-(bos|nyc|mia)-(\d{3})$/i.exec(p.sku)||[];
  var c=CITYART[(m[1]||'bos').toLowerCase()], k=KIND[m[2]]||'mug', pal=p.is_liquidation?Object.assign({},c[2],{main:'#8a8f96'}):c[2];
  return ART[p.id]='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(productSvg({kind:k,citySlug:c[0],city:c[1],palette:pal})); }

  var LS = 'usas-demo-v2';
  var S;
  var ROLES = [
    ['visitor', 'Visitor (not signed in)'], ['retailer', 'Retailer — Harbor Gifts'],
    ['dist-boston', 'Distributor — Boston'], ['dist-new-york', 'Distributor — New York'], ['dist-miami', 'Distributor — Miami'],
    ['admin', 'Amana administrator'], ['association', 'Association representative'],
  ];
  var AV = { in_stock: 'In stock', low_stock: 'Low stock', out_of_stock: 'Out of stock', on_request: 'Available on request' };
  var ST = { submitted: 'Submitted', confirmed: 'Confirmed', preparing: 'Preparing', shipped: 'Shipped', completed: 'Completed', cancelled: 'Cancelled' };
  var NEXT = { submitted: ['confirmed', 'cancelled'], confirmed: ['preparing', 'cancelled'], preparing: ['shipped', 'cancelled'], shipped: ['completed'], completed: [], cancelled: [] };
  var CS = { draft: 'Draft', submitted: 'Submitted to partner', under_review: 'Under review', approved: 'Approved by partner', partially_approved: 'Partially approved', declined: 'Declined' };
  var SAMPLE_QB = 'Customer,Company,Main Email,Main Phone,Billing Address City,Billing Address State\nSalem Witch Gifts,Salem Witch Gifts LLC,orders@salem-gifts.example,(978) 555-0101,Salem,MA\nQuincy Market Corner,Quincy Market Corner,buyer@quincy-corner.example,(617) 555-0102,Boston,MA\nPlymouth Rock Shop,,not-an-email,(508) 555-0103,Plymouth,MA\nNantucket Harbor Store,Nantucket Harbor Store,hello@nantucket-harbor.example,,Nantucket,MA\nDuplicate entry,,buyer@quincy-corner.example,,Boston,MA\n';

  // ---------- state ----------
  function fresh() {
    var d = JSON.parse(JSON.stringify(window.SEED));
    d.role = 'visitor'; d.cart = []; d.audit = []; d.imports = []; d.campaigns = []; d.support = null; d.seq = 5000;
    d.commission = null; d.fee = null; d.ledger = {}; d.flash = null;
    return d;
  }
  function load() { try { var s = localStorage.getItem(LS); if (s) { S = JSON.parse(s); return; } } catch (e) { } S = fresh(); }
  function save() { try { localStorage.setItem(LS, JSON.stringify(S)); } catch (e) { } }
  function nid() { return ++S.seq; }
  function now() { return new Date().toISOString().slice(0, 19).replace('T', ' '); }
  function audit(a, d) { S.audit.unshift({ at: now(), who: roleName(), action: a, detail: d || '' }); }

  // ---------- helpers ----------
  function esc(v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function money(c) { return c == null ? '—' : (c < 0 ? '-$' : '$') + (Math.abs(c) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function cents(v) { if (v === '' || v == null) return null; var n = Number(String(v).replace(/[$,\s]/g, '')); return isFinite(n) && n >= 0 ? Math.round(n * 100) : NaN; }
  function dt(s) { if (!s) return '—'; var d = new Date(String(s).replace(' ', 'T') + 'Z'); return isNaN(d) ? s : d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/New_York' }); }
  function dtt(s) { if (!s) return '—'; var d = new Date(String(s).replace(' ', 'T') + 'Z'); return isNaN(d) ? s : d.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'America/New_York' }); }
  function by(arr, k, v) { for (var i = 0; i < arr.length; i++) if (arr[i][k] === v) return arr[i]; return null; }
  function loc(id) { return by(S.locations, 'id', id); }
  function locSlug(s) { return by(S.locations, 'slug', s); }
  function distOfLoc(lid) { return by(S.distributors, 'location_id', lid); }
  function dist(id) { return by(S.distributors, 'id', id); }
  function brand(id) { return by(S.brands, 'id', id); }
  function cat(id) { return by(S.categories, 'id', id); }
  function prod(id) { return by(S.products, 'id', id); }
  function cost(pid) { var c = by(S.costs, 'product_id', pid); return c ? c.unit_cost_cents : null; }
  function setCost(pid, v) { var c = by(S.costs, 'product_id', pid); if (c) c.unit_cost_cents = v; else S.costs.push({ product_id: pid, unit_cost_cents: v }); }
  function price(p) { return p.is_liquidation && p.clearance_price_cents != null ? p.clearance_price_cents : p.unit_price_cents; }
  function img(p) { return artFor(p); }
  function roleName() { var r = by(ROLES.map(function (x) { return { k: x[0], n: x[1] }; }), 'k', S.role); return r ? r.n : S.role; }
  function myDistId() {
    if (S.role.indexOf('dist-') === 0) return distOfLoc(locSlug(S.role.slice(5)).id).id;
    if (S.role === 'admin' && S.support) return S.support;
    return null;
  }
  function autoAv(p, q) { if (q == null) return p.availability; if (q <= 0) return 'out_of_stock'; if (q < p.case_qty * Math.max(1, p.min_cases) * 3) return 'low_stock'; return 'in_stock'; }
  function pill(s) { return '<span class="pill pill-' + esc(s) + '">' + esc(ST[s] || s) + '</span>'; }
  function flash(m) { S.flash = m; }
  function go(h) { if (location.hash === '#' + h) render(); else location.hash = h; }
  function publicProducts(f) {
    return S.products.filter(function (p) {
      if (!p.active) return false;
      var l = loc(p.location_id); if (!l.active) return false;
      if (f.loc && p.location_id !== f.loc) return false;
      if (f.city && l.slug !== f.city) return false;
      if (f.brand && brand(p.brand_id).slug !== f.brand) return false;
      if (f.category && cat(p.category_id).slug !== f.category) return false;
      if (f.status === 'liquidation' && !p.is_liquidation) return false;
      if (f.status === 'regular' && p.is_liquidation) return false;
      if (f.displays && !cat(p.category_id).is_display) return false;
      if (f.q) { var q = f.q.toLowerCase(); if ((p.name + ' ' + p.sku + ' ' + (p.description || '')).toLowerCase().indexOf(q) < 0) return false; }
      return true;
    }).sort(function (a, b) { return a.is_liquidation - b.is_liquidation || cat(a.category_id).sort - cat(b.category_id).sort || brand(a.brand_id).name.localeCompare(brand(b.brand_id).name) || a.name.localeCompare(b.name); });
  }

  // ---------- shared components ----------
  function productCard(p, showCity) {
    var l = loc(p.location_id), b = brand(p.brand_id), c = cat(p.category_id), pr = price(p);
    var priceHtml = p.is_liquidation && p.clearance_price_cents != null
      ? '<p class="price price-clear"><strong>' + money(p.clearance_price_cents) + '</strong><span>/ unit</span> <s>' + money(p.unit_price_cents) + '</s></p>'
      : p.unit_price_cents == null ? '<p class="price"><strong>Price on request</strong></p>' : '<p class="price"><strong>' + money(p.unit_price_cents) + '</strong><span>/ unit</span></p>';
    return '<article class="card product-card"><a href="#product-' + esc(p.sku) + '" class="product-img"><img src="' + img(p) + '" alt="' + esc(b.name + ' ' + p.name) + '" loading="lazy" width="400" height="400">' +
      (p.is_liquidation ? '<span class="tag tag-red">Liquidation</span>' : '') + (c.is_display ? '<span class="tag">Approved display</span>' : '') + '</a>' +
      '<div class="card-body"><p class="eyebrow">' + esc(b.name) + ' · ' + esc(c.name) + (showCity ? ' · <strong>' + esc(l.city) + '</strong>' : '') + '</p>' +
      '<h3><a href="#product-' + esc(p.sku) + '">' + esc(p.name) + '</a></h3><p class="sku">SKU ' + esc(p.sku) + '</p>' + priceHtml +
      '<p class="small">Case of ' + p.case_qty + (pr != null ? ' · ' + money(pr * p.case_qty) + ' / case' : '') + ' · Min. ' + p.min_cases + ' case' + (p.min_cases > 1 ? 's' : '') + '</p>' +
      '<p class="small avail avail-' + p.availability + '">' + AV[p.availability] + (p.qty_available != null ? ' · ' + p.qty_available + ' units' : '') + '</p>' + orderControl(p) + '</div></article>';
  }
  function orderControl(p) {
    if (p.unit_price_cents == null || p.availability === 'on_request') return '<a class="btn btn-outline btn-block" href="#product-' + esc(p.sku) + '">Request a quote</a>';
    if (p.availability === 'out_of_stock') return '<p class="muted small">Out of stock — ask the distributor</p>';
    if (S.role === 'visitor') return '<button class="btn btn-outline btn-block" data-act="role" data-v="retailer">Sign in to order</button>';
    if (S.role !== 'retailer') return '<p class="muted small">Ordering is available to retailer accounts.</p>';
    var o = ''; for (var i = p.min_cases; i < p.min_cases + 10; i++) o += '<option value="' + i + '">' + i + ' case' + (i > 1 ? 's' : '') + ' · ' + i * p.case_qty + ' units</option>';
    return '<form class="add-form" data-act="add"><input type="hidden" name="pid" value="' + p.id + '"><select name="cases" aria-label="Cases">' + o + '</select><button class="btn" type="submit">Add</button></form>';
  }
  function filters(f, opts) {
    return '<form class="filters" data-act="filter" data-base="' + esc(opts.base) + '">' +
      (opts.search ? '<label class="grow">Search<input type="search" name="q" value="' + esc(f.q || '') + '" placeholder="Product name or SKU"></label>' : '') +
      (opts.city ? '<label>City<select name="city"><option value="">All cities</option>' + S.locations.filter(function (l) { return l.active; }).map(function (l) { return '<option value="' + l.slug + '"' + (f.city === l.slug ? ' selected' : '') + '>' + esc(l.city) + '</option>'; }).join('') + '</select></label>' : '') +
      '<label>Brand<select name="brand"><option value="">All brands</option>' + S.brands.map(function (b) { return '<option value="' + b.slug + '"' + (f.brand === b.slug ? ' selected' : '') + '>' + esc(b.name) + '</option>'; }).join('') + '</select></label>' +
      '<label>Category<select name="category"><option value="">All categories</option>' + S.categories.map(function (c) { return '<option value="' + c.slug + '"' + (f.category === c.slug ? ' selected' : '') + '>' + esc(c.name) + '</option>'; }).join('') + '</select></label>' +
      (opts.status ? '<label>Status<select name="status"><option value="">All products</option><option value="regular"' + (f.status === 'regular' ? ' selected' : '') + '>Regular merchandise</option><option value="liquidation"' + (f.status === 'liquidation' ? ' selected' : '') + '>Liquidation</option></select></label>' : '') +
      '<button class="btn" type="submit">Apply</button></form>';
  }
  var F = {}; // current filters per page (in memory)

  // ---------- public views ----------
  function vHome() {
    var locs = S.locations.filter(function (l) { return l.active; });
    var liq = publicProducts({ status: 'liquidation' }).slice(0, 4);
    return '<section class="hero"><div class="wrap hero-grid"><div><p class="kicker">Wholesale souvenirs · Local distributors</p>' +
      '<h1>Souvenirs for your shelves, supplied by the distributor in your city.</h1>' +
      '<p class="lead">Browse up-to-date city catalogs from Robin Ruth, Memorie and partner brands. Build a wholesale order in case quantities and send it straight to your local distributor for confirmation.</p>' +
      '<form class="city-picker" data-act="pickcity"><label for="city">Choose your market</label><div class="row"><select id="city" name="city">' + locs.map(function (l) { return '<option value="' + l.slug + '">' + esc(l.city) + ', ' + l.state + '</option>'; }).join('') + '</select><button class="btn btn-lg" type="submit">View catalog</button></div></form>' +
      '<p class="small muted">Order requests only · Distributor confirms availability, freight and terms</p></div>' +
      '<div class="hero-art" aria-hidden="true"><img src="' + img(by(S.products, 'sku', 'RR-BOS-001')) + '" class="hero-img hero-img-0" alt=""><img src="' + img(by(S.products, 'sku', 'RR-NYC-002')) + '" class="hero-img hero-img-1" alt=""><img src="' + img(by(S.products, 'sku', 'RR-MIA-003')) + '" class="hero-img hero-img-2" alt=""></div></div></section>' +
      '<section class="wrap pad"><h2 class="section-title">City catalogs</h2><div class="city-grid">' + locs.map(function (l) { var d = distOfLoc(l.id); return '<a class="city-card city-' + l.slug + '" href="#' + l.slug + '"><span class="city-name">' + esc(l.city) + '</span><span class="city-tag">' + esc(l.tagline) + '</span><span class="small">' + esc(d.name) + '<br>Catalog updated ' + dt(l.catalog_published_at) + '</span><span class="arrow">View catalog →</span></a>'; }).join('') + '</div></section>' +
      '<section class="band"><div class="wrap three-col"><div><p class="step-num">01</p><h3>Pick your city</h3><p>Each catalog shows the products, case packs and stock held by the local distributor.</p></div><div><p class="step-num">02</p><h3>Build an order request</h3><p>Order in full cases. Orders that include several cities are split and routed to each distributor automatically.</p></div><div><p class="step-num">03</p><h3>Your distributor confirms</h3><p>The local team confirms availability, freight and terms, then updates the status as your order is prepared and shipped.</p></div></div></section>' +
      '<section class="wrap pad"><div class="section-head"><h2 class="section-title">Liquidation &amp; clearance</h2><a href="#liquidation">See all clearance →</a></div><div class="grid">' + liq.map(function (p) { return productCard(p, true); }).join('') + '</div></section>';
  }
  function vCity(l) {
    var d = distOfLoc(l.id), f = F[l.slug] || {}; f.loc = l.id;
    var items = publicProducts(f);
    return '<section class="city-hero city-' + l.slug + '"><div class="wrap city-hero-grid"><div><nav class="crumbs"><a href="#home">Home</a> / <span>' + esc(l.city) + '</span></nav>' +
      '<p class="kicker">' + esc(l.city) + ', ' + l.state + ' wholesale catalog</p><h1>' + esc(l.city) + ' souvenirs, wholesale</h1><p class="lead">' + esc(l.intro) + '</p>' +
      '<p class="updated">Catalog updated <strong>' + dt(l.catalog_published_at) + '</strong> · Edition ' + l.catalog_version + '</p>' +
      '<p><a class="btn btn-lg" href="#catalog-' + l.slug + '">Browse the catalog</a> <button class="btn btn-lg btn-ghost" data-act="pdf" data-v="' + l.id + '">View PDF catalog</button></p></div>' +
      '<aside class="dist-panel card"><p class="eyebrow">Your ' + esc(l.city) + ' distributor</p><h2>' + esc(d.name) + '</h2><dl class="kv"><dt>Phone</dt><dd>' + esc(d.phone) + '</dd><dt>Email</dt><dd>' + esc(d.email) + '</dd><dt>Hours</dt><dd>' + esc(d.hours) + '</dd><dt>Serving</dt><dd>' + esc(d.service_area) + '</dd></dl><a class="btn btn-outline btn-block" href="#enquire-' + l.slug + '">Send an enquiry</a></aside></div></section>' +
      '<section class="wrap pad" id="catalog-' + l.slug + '">' + filters(f, { base: l.slug, search: true, status: true }) +
      '<p class="muted small">' + items.length + ' product' + (items.length === 1 ? '' : 's') + ' in the ' + esc(l.city) + ' catalog</p><div class="grid">' + (items.length ? items.map(function (p) { return productCard(p); }).join('') : '<p>No products match these filters.</p>') + '</div></section>' +
      '<section class="wrap pad two-col"><section id="enquire-' + l.slug + '" class="card enquiry"><h2>Contact the ' + esc(l.city) + ' distributor</h2><p class="small muted">Your enquiry goes directly to the ' + esc(l.city) + ' distributor.</p>' + enquiryForm(l, null) + '</section>' +
      '<div class="faq"><h2>' + esc(l.city) + ' wholesale FAQ</h2><details><summary>Who supplies wholesale souvenirs in ' + esc(l.city) + '?</summary><p>' + esc(d.name) + ' supplies USA Souvenir orders for ' + esc(d.service_area) + '.</p></details><details><summary>What is the minimum order?</summary><p>Each product is sold in full cases; the case quantity and minimum cases are shown on every product.</p></details><details><summary>Is payment taken online?</summary><p>No. You send an order request; the distributor confirms availability, freight, taxes and final terms.</p></details></div></section>';
  }
  function enquiryForm(l, p) {
    return '<form class="form-grid" data-act="enquiry"><input type="hidden" name="loc" value="' + l.id + '">' + (p ? '<input type="hidden" name="pid" value="' + p.id + '">' : '') +
      '<label>Your name<input name="name" required maxlength="120"></label><label>Business<input name="business" maxlength="160"></label><label>Email<input name="email" type="email" required maxlength="160"></label><label>Phone<input name="phone" maxlength="40"></label>' +
      '<label class="full">Message<textarea name="message" required rows="3" maxlength="2000">' + (p ? 'Hello, I would like information about ' + esc(p.name) + ' (SKU ' + esc(p.sku) + ').' : '') + '</textarea></label><button class="btn" type="submit">Send enquiry</button></form>';
  }
  function vProduct(sku) {
    var p = by(S.products, 'sku', sku); if (!p || !p.active) return notFound();
    var l = loc(p.location_id), d = distOfLoc(l.id), b = brand(p.brand_id), c = cat(p.category_id);
    var pr = p.is_liquidation && p.clearance_price_cents != null ? '<p class="price price-clear"><strong>' + money(p.clearance_price_cents) + '</strong><span>/ unit</span> <s>' + money(p.unit_price_cents) + '</s></p>' : p.unit_price_cents == null ? '<p class="price"><strong>Price on request</strong></p>' : '<p class="price"><strong>' + money(p.unit_price_cents) + '</strong><span>/ unit</span></p>';
    return '<section class="wrap pad"><nav class="crumbs"><a href="#home">Home</a> / <a href="#' + l.slug + '">' + esc(l.city) + '</a> / <span>' + esc(p.name) + '</span></nav><div class="product-detail"><div class="pd-img"><img src="' + img(p) + '" alt="' + esc(p.name) + '">' + (p.is_liquidation ? '<span class="tag tag-red">Liquidation</span>' : '') + '</div><div>' +
      '<p class="eyebrow">' + esc(b.name) + ' · ' + esc(c.name) + '</p><h1>' + esc(p.name) + '</h1><p class="sku">SKU ' + esc(p.sku) + '</p>' + pr + '<p>' + esc(p.description) + '</p>' +
      '<dl class="kv"><dt>Case quantity</dt><dd>' + p.case_qty + ' units</dd><dt>Minimum order</dt><dd>' + p.min_cases + ' case' + (p.min_cases > 1 ? 's' : '') + '</dd><dt>Availability</dt><dd>' + AV[p.availability] + (p.qty_available != null ? ' · ' + p.qty_available + ' units' : '') + '</dd><dt>Stock updated</dt><dd>' + dt(p.stock_updated_at) + '</dd><dt>Distributor</dt><dd><a href="#' + l.slug + '">' + esc(d.name) + '</a></dd></dl>' +
      '<div class="pd-order">' + orderControl(p) + '</div><p class="note small">Order request only. Availability, freight, taxes and final terms are confirmed by the ' + esc(l.city) + ' distributor.</p></div></div>' +
      '<div class="narrow-block"><section class="card enquiry"><h2>Ask about this product</h2>' + enquiryForm(l, p) + '</section></div></section>';
  }
  function vLiquidation() {
    var f = F.liquidation || {}; f.status = 'liquidation';
    var items = publicProducts(f);
    return '<section class="page-head"><div class="wrap"><p class="kicker">National clearance</p><h1>Liquidation &amp; clearance souvenirs</h1><p class="lead">Selected previous-season merchandise from every city, priced to move. Each item is confirmed and shipped by the distributor that holds it.</p></div></section>' +
      '<section class="wrap pad">' + filters(f, { base: 'liquidation', city: true }) + '<p class="muted small">' + items.length + ' clearance items · Quantities are limited and confirmed by each distributor.</p><div class="grid">' + (items.length ? items.map(function (p) { return productCard(p, true); }).join('') : '<p>No clearance items match these filters.</p>') + '</div></section>';
  }
  function vDisplays() {
    return '<section class="page-head"><div class="wrap"><p class="kicker">Merchandising</p><h1>Brand-approved souvenir displays</h1><p class="lead">Spinners, risers and fixtures approved by Robin Ruth and Memorie. Order or ask your local distributor about configuration and availability.</p></div></section><section class="wrap pad"><div class="grid">' + publicProducts({ displays: true }).map(function (p) { return productCard(p, true); }).join('') + '</div></section>';
  }

  // ---------- retailer ----------
  var RET_ID = 1;
  function vBag() {
    if (S.role !== 'retailer') return denied('retailer');
    var groups = {}, order = [];
    S.cart.forEach(function (it) { var p = prod(it.pid); if (!groups[p.distributor_id]) { groups[p.distributor_id] = []; order.push(p.distributor_id); } groups[p.distributor_id].push({ p: p, cases: it.cases }); });
    var lt = function (i) { return price(i.p) * i.p.case_qty * i.cases; };
    var total = S.cart.reduce(function (s, it) { var p = prod(it.pid); return s + price(p) * p.case_qty * it.cases; }, 0);
    if (!S.cart.length) return '<section class="wrap pad"><h1>Order bag</h1><p>Your order bag is empty. <a href="#home">Choose a city catalog</a> to start.</p></section>';
    return '<section class="wrap pad"><h1>Order bag</h1>' + (order.length > 1 ? '<p class="note">Your bag contains products from <strong>' + order.length + ' distributors</strong>. Each distributor receives and confirms only its own portion.</p>' : '') +
      order.map(function (did) {
        var d = dist(did), l = loc(d.location_id), g = groups[did];
        return '<div class="card portion"><h2 class="portion-h">' + esc(l.city) + ' portion <span class="muted">→ ' + esc(d.name) + '</span></h2><div class="table-wrap"><table class="table"><thead><tr><th>Product</th><th>Unit price</th><th>Cases</th><th>Units</th><th class="num">Line total</th><th></th></tr></thead><tbody>' +
          g.map(function (i) { return '<tr><td><div class="line-prod"><img src="' + img(i.p) + '" alt="" width="48" height="48"><span><strong>' + esc(i.p.name) + '</strong><br><span class="sku">' + esc(i.p.sku) + '</span></span></div></td><td>' + money(price(i.p)) + '</td><td><input type="number" min="' + i.p.min_cases + '" max="999" value="' + i.cases + '" data-act="bagqty" data-v="' + i.p.id + '" aria-label="Cases" style="width:72px"></td><td>' + i.cases * i.p.case_qty + '</td><td class="num">' + money(lt(i)) + '</td><td><button class="linklike small" data-act="bagrm" data-v="' + i.p.id + '">Remove</button></td></tr>'; }).join('') +
          '</tbody><tfoot><tr><td colspan="4">Portion subtotal (before freight and taxes)</td><td class="num"><strong>' + money(g.reduce(function (s, i) { return s + lt(i); }, 0)) + '</strong></td><td></td></tr></tfoot></table></div></div>';
      }).join('') +
      '<div class="card checkout"><h2>Send order request</h2><p>Estimated merchandise total: <strong>' + money(total) + '</strong> <span class="muted">(excludes freight and taxes)</span></p><p class="note">This is an <strong>order request</strong>. Availability, freight, taxes and final terms are confirmed by the responsible local distributor. No online payment is taken.</p>' +
      '<form class="form-grid" data-act="submitorder"><label class="full">Ship to<textarea name="ship_to" rows="2" required>Harbor Gifts, 1 Sample Wharf, Boston MA</textarea></label><label class="full">Notes for the distributor<textarea name="notes" rows="2"></textarea></label><label class="full check"><input type="checkbox" name="ack" required> I understand this is an order request and the distributor will confirm availability, freight, taxes and final terms.</label><button class="btn btn-lg" type="submit">Submit order request</button></form></div></section>';
  }
  function portionsOf(oid) { return S.portions.filter(function (p) { return p.order_id === oid; }); }
  function vOrders() {
    if (S.role !== 'retailer') return denied('retailer');
    var os = S.orders.filter(function (o) { return o.retailer_id === RET_ID; }).sort(function (a, b) { return b.created_at.localeCompare(a.created_at); });
    return '<section class="wrap pad"><p class="kicker">Harbor Gifts (sample retailer)</p><h1>My orders</h1><table class="table"><thead><tr><th>Order</th><th>Date</th><th>Distributor portions</th><th class="num">Merchandise</th></tr></thead><tbody>' +
      os.map(function (o) { var ps = portionsOf(o.id); return '<tr><td><a href="#order-' + o.ref + '"><strong>' + o.ref + '</strong></a></td><td>' + dt(o.created_at) + '</td><td>' + ps.map(function (p) { return '<div class="portion-line">' + esc(loc(dist(p.distributor_id).location_id).city) + ': ' + pill(p.status) + '</div>'; }).join('') + '</td><td class="num">' + money(ps.reduce(function (s, p) { return s + p.subtotal_cents; }, 0)) + '</td></tr>'; }).join('') + '</tbody></table></section>';
  }
  function linesTable(pid) {
    var ls = S.lines.filter(function (l) { return l.portion_id === pid; });
    return '<div class="table-wrap"><table class="table"><thead><tr><th>SKU</th><th>Product</th><th>Cases</th><th>Units</th><th>Unit price</th><th class="num">Total</th></tr></thead><tbody>' + ls.map(function (l) { return '<tr><td class="sku">' + esc(l.sku) + '</td><td>' + esc(l.name) + (l.is_liquidation ? ' <span class="tag tag-red tag-sm">Liquidation</span>' : '') + '</td><td>' + l.cases + '</td><td>' + l.units + '</td><td>' + money(l.unit_price_cents) + '</td><td class="num">' + money(l.unit_price_cents * l.units) + '</td></tr>'; }).join('') + '</tbody></table></div>';
  }
  function history(pid) { return '<ul class="timeline">' + S.events.filter(function (e) { return e.portion_id === pid; }).map(function (e) { return '<li><strong>' + ST[e.status] + '</strong> · ' + dtt(e.created_at) + (e.note ? ' — ' + esc(e.note) : '') + '</li>'; }).join('') + '</ul>'; }
  function vOrder(ref) {
    if (S.role !== 'retailer') return denied('retailer');
    var o = by(S.orders, 'ref', ref); if (!o || o.retailer_id !== RET_ID) return notFound();
    var steps = ['submitted', 'confirmed', 'preparing', 'shipped', 'completed'];
    return '<section class="wrap pad"><nav class="crumbs"><a href="#orders">My orders</a> / <span>' + o.ref + '</span></nav><h1>Order request ' + o.ref + '</h1><p class="muted">Submitted ' + dtt(o.created_at) + '</p><p class="note">This is an <strong>order request</strong>. Availability, freight, taxes and final terms are confirmed by the responsible local distributor.</p>' +
      portionsOf(o.id).map(function (p) {
        var d = dist(p.distributor_id), l = loc(d.location_id);
        return '<div class="card portion"><div class="portion-head"><h2 class="portion-h">' + esc(l.city) + ' portion <span class="muted">→ ' + esc(d.name) + '</span></h2>' + pill(p.status) + '</div>' +
          (p.status !== 'cancelled' ? '<ol class="progress">' + steps.map(function (s, i) { return '<li class="' + (steps.indexOf(p.status) >= i ? 'done' : '') + '">' + ST[s] + '</li>'; }).join('') + '</ol>' : '') + linesTable(p.id) +
          '<p><strong>Merchandise subtotal:</strong> ' + money(p.subtotal_cents) + '</p>' + (p.carrier || p.tracking ? '<p><strong>Shipment:</strong> ' + esc(p.carrier || '') + (p.tracking ? ' · Tracking ' + esc(p.tracking) : '') + '</p>' : '') + (p.freight_note ? '<p><strong>Freight &amp; terms:</strong> ' + esc(p.freight_note) + '</p>' : '') +
          '<details><summary>Status history</summary>' + history(p.id) + '</details></div>';
      }).join('') + '</section>';
  }

  // ---------- distributor workspace ----------
  var WSTABS = [['ws', 'Overview'], ['ws-products', 'Products & stock'], ['ws-import', 'CSV import'], ['ws-catalog', 'Catalog & PDF'], ['ws-orders', 'Orders'], ['ws-enquiries', 'Enquiries'], ['ws-customers', 'Customers'], ['ws-campaigns', 'Campaigns'], ['ws-liquidation', 'Liquidation']];
  function ws(tab, title, body) {
    var did = myDistId(); var d = dist(did), l = loc(d.location_id);
    var newO = S.portions.filter(function (p) { return p.distributor_id === did && p.status === 'submitted'; }).length;
    var newE = S.enquiries.filter(function (e) { return e.distributor_id === did && e.status === 'new'; }).length;
    return '<div class="ws"><aside class="ws-nav"><p class="ws-loc"><span class="kicker">Distributor workspace</span><strong>' + esc(l.city) + '</strong><span class="small">' + esc(d.name) + '</span></p><nav>' +
      WSTABS.map(function (t) { return '<a href="#' + t[0] + '" class="' + (t[0] === tab ? 'is-current' : '') + '">' + t[1] + (t[0] === 'ws-orders' && newO ? ' <span class="badge">' + newO + '</span>' : '') + (t[0] === 'ws-enquiries' && newE ? ' <span class="badge">' + newE + '</span>' : '') + '</a>'; }).join('') +
      '</nav><a class="small" href="#' + l.slug + '">View public ' + esc(l.city) + ' catalog</a></aside><div class="ws-main"><h1 class="ws-title">' + title + '</h1>' + body + '</div></div>';
  }
  function needDist() { return myDistId() ? null : (S.role === 'admin' ? '<section class="wrap narrow pad"><h1>Support session required</h1><p>Administrators work inside a distributor workspace only through an explicit, logged support session.</p><p><a class="btn" href="#admin">Go to Locations &amp; support</a></p></section>' : denied('distributor')); }
  function vWs() {
    var x = needDist(); if (x) return x; var did = myDistId(), d = dist(did), l = loc(d.location_id);
    var mine = S.products.filter(function (p) { return p.distributor_id === did; });
    var c = function (f) { return mine.filter(f).length; };
    var open = S.portions.filter(function (p) { return p.distributor_id === did && p.status !== 'completed' && p.status !== 'cancelled'; }).length;
    var changed = c(function (p) { return p.updated_at > (l.catalog_published_at || ''); });
    var recent = S.portions.filter(function (p) { return p.distributor_id === did; }).sort(function (a, b) { return b.id - a.id; }).slice(0, 5);
    return ws('ws', esc(l.city) + ' overview', '<div class="stats"><a class="stat" href="#ws-orders"><span class="stat-n">' + open + '</span>Open orders</a><a class="stat" href="#ws-enquiries"><span class="stat-n">' + S.enquiries.filter(function (e) { return e.distributor_id === did && e.status === 'new'; }).length + '</span>New enquiries</a>' +
      '<a class="stat" href="#ws-products"><span class="stat-n">' + c(function (p) { return p.active && !p.is_liquidation; }) + '</span>Regular SKUs</a><a class="stat" href="#ws-liquidation"><span class="stat-n">' + c(function (p) { return p.active && p.is_liquidation; }) + '</span>Liquidation SKUs</a>' +
      '<a class="stat' + (c(function (p) { return p.availability === 'low_stock' || p.availability === 'out_of_stock'; }) ? ' stat-warn' : '') + '" href="#ws-products"><span class="stat-n">' + c(function (p) { return p.availability === 'low_stock' || p.availability === 'out_of_stock'; }) + '</span>Low / out of stock</a>' +
      '<a class="stat' + (changed ? ' stat-warn' : '') + '" href="#ws-catalog"><span class="stat-n">' + changed + '</span>Changes since last PDF</a></div>' +
      '<div class="card"><h2>Latest orders</h2><table class="table"><thead><tr><th>Order</th><th>Retailer</th><th>Status</th><th class="num">Subtotal</th></tr></thead><tbody>' + recent.map(function (p) { var o = by(S.orders, 'id', p.order_id); return '<tr><td><a href="#ws-order-' + p.id + '">' + o.ref + '</a></td><td>' + esc(by(S.retailers, 'id', o.retailer_id).business_name) + '</td><td>' + pill(p.status) + '</td><td class="num">' + money(p.subtotal_cents) + '</td></tr>'; }).join('') + '</tbody></table></div>');
  }
  function vWsProducts() {
    var x = needDist(); if (x) return x; var did = myDistId();
    var rows = S.products.filter(function (p) { return p.distributor_id === did; }).sort(function (a, b) { return a.is_liquidation - b.is_liquidation || cat(a.category_id).sort - cat(b.category_id).sort || a.name.localeCompare(b.name); });
    return ws('ws-products', 'Products &amp; stock', '<p class="small muted">Quick-edit stock and prices. Changes appear in the public catalog immediately; publish the catalog to refresh the PDF and update date.</p><div class="table-wrap"><table class="table"><thead><tr><th></th><th>Product / SKU</th><th>Status</th><th>Unit price · Qty · Availability</th><th>Stock updated</th></tr></thead><tbody>' +
      rows.map(function (p) {
        return '<tr><td><img src="' + img(p) + '" alt="" class="thumb" width="44" height="44"></td><td><strong>' + esc(p.name) + '</strong><br><span class="sku">' + esc(p.sku) + '</span> · <span class="small">' + esc(brand(p.brand_id).name) + ' · ' + esc(cat(p.category_id).name) + '</span></td><td>' + (p.is_liquidation ? '<span class="tag tag-red tag-sm">Liquidation</span>' : '<span class="tag tag-sm">Regular</span>') + '</td>' +
          '<td><form class="quick-edit" data-act="quick"><input type="hidden" name="pid" value="' + p.id + '"><input name="price" value="' + (p.unit_price_cents != null ? (p.unit_price_cents / 100).toFixed(2) : '') + '" placeholder="on request" aria-label="Unit price"><input name="qty" value="' + (p.qty_available == null ? '' : p.qty_available) + '" aria-label="Quantity"><select name="av" aria-label="Availability">' + Object.keys(AV).map(function (k) { return '<option value="' + k + '"' + (p.availability === k ? ' selected' : '') + '>' + AV[k] + '</option>'; }).join('') + '<option value="auto">Auto from qty</option></select><button class="btn btn-sm" type="submit">Save</button></form></td><td class="small">' + dt(p.stock_updated_at) + '</td></tr>';
      }).join('') + '</tbody></table></div>');
  }
  function catalogIssues(did) {
    return S.products.filter(function (p) { return p.distributor_id === did && p.active; }).map(function (p) {
      var m = []; if (!p.image) m.push('photo'); if (!p.description || p.description.length < 20) m.push('description');
      if (p.unit_price_cents == null && p.availability !== 'on_request') m.push('price'); if (p.qty_available == null && p.availability !== 'on_request') m.push('quantity');
      if (p.is_liquidation && cost(p.id) == null) m.push('private cost'); return { p: p, m: m };
    }).filter(function (x) { return x.m.length; });
  }
  function vWsCatalog() {
    var x = needDist(); if (x) return x; var did = myDistId(), l = loc(dist(did).location_id);
    var changed = S.products.filter(function (p) { return p.distributor_id === did && p.updated_at > (l.catalog_published_at || ''); });
    var iss = catalogIssues(did);
    return ws('ws-catalog', 'Catalog &amp; PDF', '<div class="card"><h2>' + esc(l.city) + ' catalog — edition ' + l.catalog_version + '</h2><p>Published ' + dtt(l.catalog_published_at) + '. The public catalog date and the PDF update when you publish.</p><p><button class="btn btn-ghost" data-act="pdf" data-v="' + l.id + '">View current PDF catalog</button></p>' +
      '<h3>' + changed.length + ' product change(s) since the last edition</h3>' + (changed.length ? '<ul class="small">' + changed.map(function (p) { return '<li>' + esc(p.name) + ' (' + esc(p.sku) + ') — ' + dtt(p.updated_at) + '</li>'; }).join('') + '</ul>' : '') +
      '<form data-act="publish"><label class="check"><input type="checkbox" name="ok" required> I have reviewed prices, quantities and products for this edition.</label><p><button class="btn btn-lg" type="submit">Publish catalog &amp; regenerate PDF</button></p></form></div>' +
      '<div class="card"><h2>Catalog check</h2><p class="small muted">Automatic check for missing or out-of-date information before you publish.</p>' + (iss.length ? '<table class="table"><tbody>' + iss.map(function (i) { return '<tr><td>' + esc(i.p.name) + ' <span class="sku">' + esc(i.p.sku) + '</span></td><td>' + i.m.map(function (m) { return '<span class="warn">' + m + '</span>'; }).join(' ') + '</td></tr>'; }).join('') + '</tbody></table>' : '<p>All active products have the required information.</p>') +
      '<p class="small muted">Planned assistance (later phase): photo organization, description drafts and catalog preparation from product records. People approve every price, quantity and published change.</p></div>');
  }
  function vWsOrders() {
    var x = needDist(); if (x) return x; var did = myDistId();
    var rows = S.portions.filter(function (p) { return p.distributor_id === did; }).sort(function (a, b) { return b.id - a.id; });
    return ws('ws-orders', 'Orders', '<table class="table"><thead><tr><th>Order</th><th>Date</th><th>Retailer</th><th>Status</th><th class="num">Your portion</th></tr></thead><tbody>' +
      rows.map(function (p) { var o = by(S.orders, 'id', p.order_id), multi = portionsOf(o.id).length > 1; return '<tr><td><a href="#ws-order-' + p.id + '"><strong>' + o.ref + '</strong></a>' + (multi ? ' <span class="tag tag-sm">Multi-distributor</span>' : '') + '</td><td>' + dt(o.created_at) + '</td><td>' + esc(by(S.retailers, 'id', o.retailer_id).business_name) + '</td><td>' + pill(p.status) + '</td><td class="num">' + money(p.subtotal_cents) + '</td></tr>'; }).join('') + '</tbody></table>');
  }
  function vWsOrder(id) {
    var x = needDist(); if (x) return x; var did = myDistId();
    var p = by(S.portions, 'id', id); if (!p || p.distributor_id !== did) return ws('ws-orders', 'Order not found', '<p>This order does not belong to your location.</p>');
    var o = by(S.orders, 'id', p.order_id), r = by(S.retailers, 'id', o.retailer_id), n = portionsOf(o.id).length;
    return ws('ws-orders', 'Order ' + o.ref, '<p>' + pill(p.status) + ' · Received ' + dtt(o.created_at) + (n > 1 ? ' · <strong>Multi-distributor order:</strong> you see only your portion (' + (n - 1) + ' other portion routed to other distributors).' : '') + '</p>' +
      '<div class="two-col"><div class="card"><h2>Retailer</h2><p><strong>' + esc(r.business_name) + '</strong><br>' + esc(r.contact_name) + '<br>' + esc(r.email) + '<br>' + esc(r.phone) + '</p><p><strong>Ship to:</strong> ' + esc(o.ship_to) + '</p>' + (o.notes ? '<p><strong>Notes:</strong> ' + esc(o.notes) + '</p>' : '') + '</div>' +
      '<div class="card"><h2>Update status</h2><form class="stack" data-act="portion"><input type="hidden" name="id" value="' + p.id + '">' +
      (NEXT[p.status].length ? '<label>New status<select name="status"><option value="">— keep ' + ST[p.status] + ' —</option>' + NEXT[p.status].map(function (s) { return '<option value="' + s + '">' + ST[s] + '</option>'; }).join('') + '</select></label>' : '<p>This order is ' + ST[p.status].toLowerCase() + '.</p>') +
      '<label>Freight &amp; final terms (visible to retailer)<input name="freight" value="' + esc(p.freight_note || '') + '" placeholder="e.g. Freight $38 via ground, net 30"></label><label>Carrier<input name="carrier" value="' + esc(p.carrier || '') + '"></label><label>Tracking number<input name="tracking" value="' + esc(p.tracking || '') + '"></label><label>Note for history<input name="note"></label><button class="btn" type="submit">Save update</button><p class="small muted">Confirming reserves stock (quantities are reduced). Cancelling a confirmed order returns stock.</p></form></div></div>' +
      '<div class="card"><h2>Items</h2>' + linesTable(p.id) + '<p><strong>Merchandise subtotal:</strong> ' + money(p.subtotal_cents) + '</p></div><div class="card"><h2>History</h2>' + history(p.id) + '</div>');
  }
  function vWsEnquiries() {
    var x = needDist(); if (x) return x; var did = myDistId();
    var rows = S.enquiries.filter(function (e) { return e.distributor_id === did; }).sort(function (a, b) { return b.id - a.id; });
    return ws('ws-enquiries', 'Enquiries', '<p class="small muted">Website enquiries for your location are assigned to you automatically. Chat and phone channels are not connected in this demonstration.</p>' + (rows.length ? '' : '<p>No enquiries yet.</p>') +
      rows.map(function (e) { var p = e.product_id ? prod(e.product_id) : null; return '<div class="card"><div class="portion-head"><h3>' + esc(e.business || e.name) + '</h3><span class="pill pill-' + e.status + '">' + e.status.replace('_', ' ') + '</span></div><p class="small">' + esc(e.name) + ' · ' + esc(e.email) + (e.phone ? ' · ' + esc(e.phone) : '') + ' · ' + dtt(e.created_at) + (p ? ' · SKU ' + esc(p.sku) : '') + '</p><p>' + esc(e.message) + '</p>' +
        '<form class="inline-form" data-act="enqstatus"><input type="hidden" name="id" value="' + e.id + '"><select name="status"><option value="new"' + (e.status === 'new' ? ' selected' : '') + '>New</option><option value="in_progress"' + (e.status === 'in_progress' ? ' selected' : '') + '>In progress</option><option value="closed"' + (e.status === 'closed' ? ' selected' : '') + '>Closed</option></select><label class="check small"><input type="checkbox" name="crm"> Add to customer list as prospect</label><button class="btn btn-sm" type="submit">Save</button></form></div>'; }).join(''));
  }
  var FU = { none: 'No follow-up', due: 'Follow-up due', contacted: 'Contacted', waiting: 'Waiting on customer', won: 'Won', lost: 'Lost' };
  function vWsCustomers() {
    var x = needDist(); if (x) return x; var did = myDistId();
    var rows = S.crm.filter(function (c) { return c.distributor_id === did; }).sort(function (a, b) { return a.business_name.localeCompare(b.business_name); });
    var web = {}; S.portions.filter(function (p) { return p.distributor_id === did; }).forEach(function (p) { var o = by(S.orders, 'id', p.order_id); var r = by(S.retailers, 'id', o.retailer_id); web[r.id] = web[r.id] || { r: r, n: 0, last: '' }; web[r.id].n++; if (o.created_at > web[r.id].last) web[r.id].last = o.created_at; });
    return ws('ws-customers', 'Customers &amp; prospects', '<div class="toolbar"><a class="btn btn-ghost" href="#ws-import">Import CSV / QuickBooks</a></div><div class="table-wrap"><table class="table"><thead><tr><th>Business</th><th>Type</th><th>Contact</th><th>Location</th><th>Follow-up</th><th>Email consent</th></tr></thead><tbody>' +
      rows.map(function (c) { return '<tr><td><strong>' + esc(c.business_name) + '</strong>' + (c.notes ? '<br><span class="small muted">' + esc(c.notes.slice(0, 80)) + '</span>' : '') + '</td><td>' + c.kind + '</td><td class="small">' + esc(c.contact_name || '') + '<br>' + esc(c.email || '') + '<br>' + esc(c.phone || '') + '</td><td>' + esc(c.city || '') + (c.state ? ', ' + esc(c.state) : '') + '</td><td class="small">' + FU[c.follow_up_status] + (c.follow_up_date ? '<br>' + dt(c.follow_up_date + ' 12:00:00') : '') + '</td><td class="small">' + (c.unsubscribed_at ? '<span class="warn">Unsubscribed</span>' : c.email_opt_in ? 'Opted in' : 'Not opted in') + '</td></tr>'; }).join('') +
      '</tbody></table></div><div class="card"><h2>Website customers who ordered from you</h2><table class="table"><thead><tr><th>Retailer</th><th>Location</th><th>Order portions</th><th>Last order</th></tr></thead><tbody>' + Object.keys(web).map(function (k) { var w = web[k]; return '<tr><td>' + esc(w.r.business_name) + '<br><span class="small">' + esc(w.r.email) + '</span></td><td>' + esc(w.r.city) + ', ' + esc(w.r.state) + '</td><td>' + w.n + '</td><td>' + dt(w.last) + '</td></tr>'; }).join('') + '</tbody></table></div>');
  }
  function eligibleRecipients(did, aud) { return S.crm.filter(function (c) { return c.distributor_id === did && c.email && c.email_opt_in && !c.unsubscribed_at && (aud === 'all' || (aud === 'prospects' ? c.kind === 'prospect' : c.kind === 'customer')); }); }
  function vWsCampaigns() {
    var x = needDist(); if (x) return x; var did = myDistId(), d = dist(did), l = loc(d.location_id);
    var rows = S.campaigns.filter(function (c) { return c.distributor_id === did; });
    var month = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
    var fill = function (s, c) { var v = { contact_name: c ? (c.contact_name || 'there') : 'there', business_name: c ? c.business_name : 'Sample Shop', city: l.city, catalog_link: 'https://…/' + l.slug, pdf_link: 'https://…/' + l.slug + '/catalog.pdf', distributor: d.name, phone: d.phone }; return s.replace(/\{\{\s*(\w+)\s*\}\}/g, function (m, k) { return v[k] != null ? v[k] : m; }); };
    return ws('ws-campaigns', 'Catalog campaigns', '<p class="note"><strong>Email sending is not connected.</strong> Campaigns can be drafted, previewed and approved. “Send” is simulated: it counts eligible recipients only — no email leaves the system.</p>' +
      rows.map(function (c) { var rec = eligibleRecipients(did, c.audience); return '<div class="card"><div class="portion-head"><h3>' + esc(c.name) + '</h3><span class="pill">' + (c.status === 'simulated' ? 'Simulated send · ' + c.recipients + ' recipients' : c.status) + '</span></div><p class="small">' + (c.step === 1 ? 'Initial email' : 'Follow-up ' + (c.step - 1)) + ' · audience ' + c.audience + ' · ' + rec.length + ' eligible (opted-in, not unsubscribed)</p>' +
        '<div class="email-preview"><p><strong>Subject:</strong> ' + esc(fill(c.subject, rec[0])) + '</p><pre class="email-body">' + esc(fill(c.body, rec[0])) + '</pre><p class="small muted">Unsubscribe link added automatically.</p></div><div class="toolbar">' +
        (c.status === 'draft' ? '<button class="btn btn-sm" data-act="campapprove" data-v="' + c.id + '">Approve for sending</button>' : '') + (c.status === 'approved' ? '<button class="btn btn-sm" data-act="campsend" data-v="' + c.id + '">Send (simulated — not connected)</button>' : '') + '<button class="btn btn-sm btn-ghost" data-act="campfollow" data-v="' + c.id + '">Create follow-up</button></div></div>'; }).join('') +
      '<form class="form-grid card" data-act="campnew"><h2 class="full">New catalog email draft</h2><label>Name<input name="name" required value="' + esc(l.city) + ' catalog — ' + month + '"></label><label>Audience<select name="audience"><option value="customers">Customers</option><option value="prospects">Prospects</option><option value="all">Customers and prospects</option></select></label>' +
      '<label class="full">Subject<input name="subject" required value="New {{city}} souvenir catalog — ' + month + '"></label><label class="full">Message<textarea name="body" rows="7">Hello {{contact_name}},\n\nOur ' + month + ' {{city}} wholesale catalog is ready: {{catalog_link}}\n\nPrefer a PDF? {{pdf_link}}\n\nAvailability, freight and final terms are confirmed by our team before anything ships.\n\n{{distributor}} · {{phone}}</textarea></label><button class="btn" type="submit">Save draft</button></form>');
  }
  function vWsLiquidation() {
    var x = needDist(); if (x) return x; var did = myDistId();
    var items = S.products.filter(function (p) { return p.distributor_id === did && p.is_liquidation; });
    var cands = S.products.filter(function (p) { return p.distributor_id === did && !p.is_liquidation && p.active && p.unit_price_cents != null; });
    var sales = {}; S.liqsales.filter(function (s) { return s.distributor_id === did; }).forEach(function (s) { var a = sales[s.sku] = sales[s.sku] || { units: 0, rev: 0, cost: 0, missing: 0 }; a.units += s.units; a.rev += s.units * s.sale_price_cents; if (s.unit_cost_cents == null) a.missing += s.units; else a.cost += s.units * s.unit_cost_cents; });
    var tot = { units: 0, rev: 0, cost: 0 }; Object.keys(sales).forEach(function (k) { tot.units += sales[k].units; tot.rev += sales[k].rev; tot.cost += sales[k].cost; });
    var loss = Math.max(0, tot.cost - tot.rev);
    var credits = S.credits.filter(function (c) { return c.distributor_id === did; });
    return ws('ws-liquidation', 'Liquidation', '<form class="card form-grid" data-act="liquidate"><h2 class="full">Move a product into liquidation</h2><label class="full">Product<select name="pid">' + cands.map(function (p) { return '<option value="' + p.id + '">' + esc(p.name) + ' (' + esc(p.sku) + ') — regular ' + money(p.unit_price_cents) + '</option>'; }).join('') + '</select></label>' +
      '<label>Clearance price per unit ($)<input name="clr" required inputmode="decimal" placeholder="e.g. 3.50"></label><label>Quantity available (units)<input name="qty" required inputmode="numeric" placeholder="e.g. 24"></label><label class="full">Original unit cost ($) — private, never shown to retailers<input name="cost" required inputmode="decimal" placeholder="e.g. 4.70"></label><button class="btn" type="submit">Move to liquidation</button></form>' +
      '<div class="card"><h2>Listed in liquidation</h2><table class="table"><thead><tr><th>Product</th><th>Regular</th><th>Clearance</th><th>Unit cost (private)</th><th>Qty</th><th>Listed</th><th></th></tr></thead><tbody>' + items.map(function (p) { return '<tr><td><strong>' + esc(p.name) + '</strong><br><span class="sku">' + esc(p.sku) + '</span></td><td>' + money(p.unit_price_cents) + '</td><td><strong>' + money(p.clearance_price_cents) + '</strong></td><td class="private-cell">' + money(cost(p.id)) + '</td><td>' + (p.qty_available == null ? '—' : p.qty_available) + '</td><td class="small">' + dt(p.liquidation_listed_at) + '</td><td><button class="linklike small" data-act="unliq" data-v="' + p.id + '">Return to regular</button></td></tr>'; }).join('') + '</tbody></table></div>' +
      '<div class="card"><h2>Actual liquidation sales &amp; losses <span class="tag tag-sm">Private</span></h2><p class="small muted">Recorded when an order portion containing liquidation items is marked completed. Order requests alone are not counted.</p><table class="table"><thead><tr><th>SKU</th><th>Units sold</th><th class="num">Sales</th><th class="num">Cost</th><th class="num">Loss</th></tr></thead><tbody>' +
      Object.keys(sales).map(function (k) { var s = sales[k]; return '<tr><td class="sku">' + esc(k) + '</td><td>' + s.units + '</td><td class="num">' + money(s.rev) + '</td><td class="num">' + (s.missing ? '<span class="warn">cost missing</span>' : money(s.cost)) + '</td><td class="num">' + money(Math.max(0, s.cost - s.rev)) + '</td></tr>'; }).join('') + '</tbody><tfoot><tr><td>Total</td><td>' + tot.units + '</td><td class="num">' + money(tot.rev) + '</td><td class="num">' + money(tot.cost) + '</td><td class="num"><strong>' + money(loss) + '</strong></td></tr></tfoot></table></div>' +
      '<div class="card"><h2>Support &amp; credit requests</h2><p class="note">Credits from the China office or partner brands are <strong>not guaranteed and never automatic</strong>. This section records what was requested and the partner’s actual response.</p><table class="table"><thead><tr><th>Partner</th><th>Period</th><th class="num">Documented loss</th><th class="num">Requested</th><th>Status</th><th class="num">Approved</th><th>Record partner response</th></tr></thead><tbody>' +
      credits.map(function (c) { return '<tr><td>' + esc(c.partner) + '</td><td>' + esc(c.period_label) + '</td><td class="num">' + money(c.documented_loss_cents) + '</td><td class="num">' + money(c.requested_cents) + '</td><td>' + CS[c.status] + '</td><td class="num">' + (c.status === 'approved' || c.status === 'partially_approved' ? money(c.approved_cents) : '—') + '</td><td><form class="inline-form" data-act="creditstatus"><input type="hidden" name="id" value="' + c.id + '"><select name="status">' + Object.keys(CS).map(function (k) { return '<option value="' + k + '"' + (c.status === k ? ' selected' : '') + '>' + CS[k] + '</option>'; }).join('') + '</select><input name="appr" placeholder="Approved $" size="7"><button class="btn btn-sm" type="submit">Record</button></form></td></tr>'; }).join('') + '</tbody></table>' +
      '<form class="form-grid" data-act="creditnew"><label>Partner<select name="partner"><option>China office</option><option>Robin Ruth</option><option>Memorie</option><option>Other participating partner</option></select></label><label>Period / reference<input name="period" required placeholder="e.g. Q4 2026 liquidation"></label><label>Documented loss ($)<input name="loss" required value="' + (loss / 100).toFixed(2) + '"></label><label>Amount requested ($)<input name="req"></label><button class="btn" type="submit">Create request (draft)</button></form></div>');
  }

  // ---------- CSV import ----------
  function parseCsv(text) {
    var rows = [], row = [], f = '', q = false;
    text = text.replace(/^﻿/, '');
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (q) { if (ch === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += ch; }
      else if (ch === '"') q = true; else if (ch === ',') { row.push(f); f = ''; } else if (ch === '\n' || ch === '\r') { if (ch === '\r' && text[i + 1] === '\n') i++; row.push(f); rows.push(row); row = []; f = ''; } else f += ch;
    }
    if (f !== '' || row.length) { row.push(f); rows.push(row); }
    rows = rows.filter(function (r) { return r.some(function (c) { return c.trim() !== ''; }); });
    if (!rows.length) return [];
    var h = rows[0].map(function (x) { return x.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); });
    return rows.slice(1, 5001).map(function (r) { var o = {}; h.forEach(function (k, i) { o[k] = (r[i] || '').trim(); }); return o; });
  }
  function pick(r, keys) { for (var i = 0; i < keys.length; i++) { var v = r[keys[i]]; if (v) return v; } return ''; }
  function isEmail(v) { return /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/.test(v); }
  function validateCustomers(recs, did) {
    var seen = {};
    return recs.map(function (r, i) {
      var e = [], w = [], biz = pick(r, ['business name', 'company', 'company name', 'customer', 'customer name', 'display name', 'name']);
      var contact = pick(r, ['contact name', 'contact', 'full name']) || (pick(r, ['first name']) + ' ' + pick(r, ['last name'])).trim();
      if (!biz) biz = contact;
      var email = pick(r, ['email', 'main email', 'e mail', 'email address']).toLowerCase(), phone = pick(r, ['phone', 'main phone', 'phone number', 'mobile']);
      var city = pick(r, ['city', 'billing address city', 'bill to city']), state = pick(r, ['state', 'billing address state', 'bill to state']);
      var opt = pick(r, ['email opt in', 'opt in', 'marketing consent']);
      if (!biz) e.push('Missing business or customer name'); if (email && !isEmail(email)) e.push('Invalid email'); if (email && seen[email]) e.push('Duplicate email in this file'); if (email) seen[email] = 1;
      if (!email && !phone) w.push('No email or phone'); if (!opt && email) w.push('No consent column — imported as NOT opted in');
      var ex = email ? S.crm.filter(function (c) { return c.distributor_id === did && (c.email || '').toLowerCase() === email; })[0] : null;
      return { line: i + 2, errors: e, warnings: w, action: e.length ? 'error' : ex ? 'update' : 'create', data: { business_name: biz, contact_name: contact, email: email, phone: phone, city: city, state: state, email_opt_in: /^(1|y|yes|true)$/i.test(opt) ? 1 : 0 } };
    });
  }
  function validateInventory(recs, did) {
    return recs.map(function (r, i) {
      var e = [], sku = pick(r, ['sku', 'item', 'item code']).toUpperCase(), q = pick(r, ['qty available', 'qty', 'quantity', 'stock', 'quantity on hand']);
      var p = by(S.products, 'sku', sku);
      if (!sku) e.push('Missing SKU'); else if (!p) e.push('SKU not found'); else if (p.distributor_id !== did) e.push('SKU belongs to another location — not changed');
      if (q === '' || !/^\d+$/.test(q)) e.push('Quantity must be a whole number');
      return { line: i + 2, errors: e, warnings: [], action: e.length ? 'error' : 'update', sku: sku, before: p && p.distributor_id === did ? p.qty_available : null, data: { qty: Number(q) } };
    });
  }
  function vWsImport() {
    var x = needDist(); if (x) return x; var did = myDistId();
    var b = S.imports.filter(function (i) { return i.did === did; })[0];
    var preview = '';
    if (b && b.status === 'preview') {
      var s = { create: 0, update: 0, error: 0 }; b.rows.forEach(function (r) { s[r.action]++; });
      preview = '<div class="card"><h2>Preview — ' + esc(b.filename) + ' (' + b.kind + ')</h2><p class="note">Nothing has changed yet. Review the rows, then apply the valid ones.</p><div class="stats"><div class="stat"><span class="stat-n">' + s.create + '</span>New</div><div class="stat"><span class="stat-n">' + s.update + '</span>Updates</div><div class="stat' + (s.error ? ' stat-warn' : '') + '"><span class="stat-n">' + s.error + '</span>Rows with errors (skipped)</div></div>' +
        '<div class="table-wrap"><table class="table"><thead><tr><th>Line</th><th>Action</th>' + (b.kind === 'customers' ? '<th>Business</th><th>Email</th><th>Location</th>' : '<th>SKU</th><th>Quantity</th><th></th>') + '<th>Problems</th></tr></thead><tbody>' +
        b.rows.map(function (r) { return '<tr class="' + (r.action === 'error' ? 'row-error' : '') + '"><td>' + r.line + '</td><td><span class="pill pill-' + r.action + '">' + r.action + '</span></td>' + (b.kind === 'customers' ? '<td>' + esc(r.data.business_name) + '</td><td>' + esc(r.data.email) + '</td><td>' + esc(r.data.city) + (r.data.state ? ', ' + esc(r.data.state) : '') + '</td>' : '<td class="sku">' + esc(r.sku) + '</td><td>' + (r.before == null ? '—' : r.before) + ' → <strong>' + r.data.qty + '</strong></td><td></td>') + '<td class="small">' + r.errors.map(function (e) { return '<span class="err">' + esc(e) + '</span><br>'; }).join('') + r.warnings.map(function (w) { return '<span class="warn">' + esc(w) + '</span><br>'; }).join('') + '</td></tr>'; }).join('') +
        '</tbody></table></div><div class="toolbar"><button class="btn btn-lg" data-act="importapply"' + (s.create + s.update ? '' : ' disabled') + '>Apply ' + (s.create + s.update) + ' valid row(s)</button><button class="btn btn-ghost" data-act="importdiscard">Discard</button></div></div>';
    }
    return ws('ws-import', 'CSV import', preview + '<form class="card form-grid" data-act="import"><h2 class="full">Upload a file</h2><label>File type<select name="kind"><option value="customers">Customers / prospects (incl. QuickBooks export)</option><option value="inventory">Inventory (stock levels)</option></select></label><label>CSV file<input type="file" name="file" accept=".csv,text/csv"></label>' +
      '<div class="full toolbar"><button class="btn" type="submit">Upload &amp; preview</button><button class="btn btn-ghost" type="button" data-act="importsample">Use sample QuickBooks export</button></div><p class="full small muted">QuickBooks: export the Customer Contact List to CSV. Columns such as Customer, Company, Main Email, Main Phone, Billing Address City/State are recognized. Imported contacts are not opted in to marketing unless the file has a consent column. Files are read in your browser only.</p></form>');
  }

  // ---------- admin ----------
  var ADTABS = [['admin', 'Locations & support'], ['admin-orders', 'All orders'], ['admin-ledger', 'Service ledger'], ['admin-audit', 'Audit log']];
  function ad(tab, title, body) { return '<div class="ws"><aside class="ws-nav"><p class="ws-loc"><span class="kicker">Amana Digital USA</span><strong>Administration</strong></p><nav>' + ADTABS.map(function (t) { return '<a href="#' + t[0] + '" class="' + (t[0] === tab ? 'is-current' : '') + '">' + t[1] + '</a>'; }).join('') + '<a href="#fund">Association fund</a></nav></aside><div class="ws-main"><h1 class="ws-title">' + title + '</h1>' + body + '</div></div>'; }
  function vAdmin() {
    if (S.role !== 'admin') return denied('admin');
    return ad('admin', 'Locations &amp; support', S.locations.map(function (l) { var d = distOfLoc(l.id); return '<div class="card"><div class="portion-head"><h2>' + esc(l.city) + ', ' + l.state + ' — ' + esc(d.name) + '</h2><span class="small">Edition ' + l.catalog_version + ' · ' + dt(l.catalog_published_at) + '</span></div><p class="small">' + esc(d.phone) + ' · ' + esc(d.email) + ' · ' + esc(d.service_area) + '</p>' +
      '<form class="toolbar" data-act="support"><input type="hidden" name="did" value="' + d.id + '"><label>Reason for support (logged)<input name="reason" required placeholder="e.g. Requested help with CSV import" size="40"></label><button class="btn btn-ghost" type="submit">Open support session</button></form></div>'; }).join('') +
      '<div class="card"><h2>Adding locations and brands</h2><p class="small">In the full platform the administrator adds new cities (they start inactive until their catalog is ready), creates distributor and association accounts, and adds partner brands.</p></div>');
  }
  function vAdminOrders() {
    if (S.role !== 'admin') return denied('admin');
    return ad('admin-orders', 'All order portions', '<p class="small muted">Read-only. Distributors update their own portions; open a support session to act on their behalf.</p><table class="table"><thead><tr><th>Order</th><th>Date</th><th>Retailer</th><th>Distributor</th><th>Status</th><th class="num">Subtotal</th></tr></thead><tbody>' +
      S.portions.slice().sort(function (a, b) { return b.id - a.id; }).map(function (p) { var o = by(S.orders, 'id', p.order_id); return '<tr><td>' + o.ref + '</td><td>' + dt(o.created_at) + '</td><td>' + esc(by(S.retailers, 'id', o.retailer_id).business_name) + '</td><td>' + esc(loc(dist(p.distributor_id).location_id).city) + '</td><td>' + pill(p.status) + '</td><td class="num">' + money(p.subtotal_cents) + '</td></tr>'; }).join('') + '</tbody></table>');
  }
  function periods() { var s = {}; S.portions.forEach(function (p) { if (p.completed_at) s[p.completed_at.slice(0, 7)] = 1; }); s[now().slice(0, 7)] = 1; return Object.keys(s).sort().reverse(); }
  function eligible(period) { return S.distributors.map(function (d) { var ps = S.portions.filter(function (p) { return p.distributor_id === d.id && p.status === 'completed' && (p.completed_at || '').slice(0, 7) === period; }); return { d: d, n: ps.length, sales: ps.reduce(function (s, p) { return s + p.subtotal_cents; }, 0) }; }); }
  var LP = null;
  function vLedger() {
    if (S.role !== 'admin') return denied('admin');
    var ps = periods(); var period = ps.indexOf(LP) >= 0 ? LP : ps[0];
    return ad('admin-ledger', 'Service ledger — demonstration', '<p class="note"><strong>Commercial terms are not agreed.</strong> Monthly service fee and commission rate stay blank until a detailed proposal is approved by the board. Any value entered is a demonstration value only. Association contributions are tracked separately and never mixed with Amana’s service income.</p>' +
      '<form class="toolbar" data-act="period"><label>Period<select name="p">' + ps.map(function (p) { return '<option' + (p === period ? ' selected' : '') + '>' + p + '</option>'; }).join('') + '</select></label><button class="btn btn-sm" type="submit">Show</button></form>' +
      '<table class="table"><thead><tr><th>Distributor</th><th>Completed portions</th><th class="num">Eligible website sales</th><th class="num">Monthly service fee</th><th class="num">Commission</th><th>Payment status</th></tr></thead><tbody>' +
      eligible(period).map(function (r) { var k = r.d.id + ':' + period, st = S.ledger[k] || 'not_invoiced'; return '<tr><td>' + esc(loc(r.d.location_id).city) + ' — ' + esc(r.d.name) + '</td><td>' + r.n + '</td><td class="num">' + money(r.sales) + '</td><td class="num">' + (S.fee == null ? '<span class="muted">not agreed</span>' : money(S.fee)) + '</td><td class="num">' + (S.commission == null ? '<span class="muted">not agreed</span>' : money(Math.round(r.sales * S.commission / 10000))) + '</td><td><select data-act="ledgerst" data-v="' + k + '">' + ['not_invoiced', 'invoiced', 'paid', 'waived'].map(function (s) { return '<option value="' + s + '"' + (s === st ? ' selected' : '') + '>' + s.replace('_', ' ') + '</option>'; }).join('') + '</select></td></tr>'; }).join('') +
      '</tbody></table><p class="small muted">Eligible sales = merchandise subtotal of order portions marked <em>completed</em> during the period. Submitted, confirmed, preparing, shipped or cancelled requests are not counted.</p>' +
      '<form class="form-grid card" data-act="terms"><h2 class="full">Configurable rules (demonstration)</h2><label>Commission rate (%) — blank = not agreed<input name="c" value="' + (S.commission == null ? '' : S.commission / 100) + '"></label><label>Monthly service fee ($) — blank = not agreed<input name="f" value="' + (S.fee == null ? '' : (S.fee / 100).toFixed(2)) + '"></label><button class="btn" type="submit">Save demonstration values</button></form>');
  }
  function vAudit() {
    if (S.role !== 'admin') return denied('admin');
    return ad('admin-audit', 'Audit log', '<p class="small muted">Actions taken during this demonstration session.</p><table class="table small"><thead><tr><th>When</th><th>Who</th><th>Action</th><th>Detail</th></tr></thead><tbody>' + (S.audit.length ? S.audit.map(function (a) { return '<tr class="' + (/denied/.test(a.action) ? 'row-error' : /support/.test(a.action) ? 'row-support' : '') + '"><td>' + dtt(a.at) + '</td><td>' + esc(a.who) + '</td><td>' + esc(a.action) + '</td><td>' + esc(a.detail) + '</td></tr>'; }).join('') : '<tr><td colspan="4">No actions yet — try the workflows, then come back.</td></tr>') + '</tbody></table>');
  }

  // ---------- association ----------
  var FP = null;
  function vFund() {
    if (S.role !== 'association' && S.role !== 'admin') return denied('association');
    var ps = periods(), period = ps.indexOf(FP) >= 0 ? FP : (ps.indexOf('2026-10') >= 0 ? '2026-10' : ps[0]);
    var el = eligible(period), total = el.reduce(function (s, r) { return s + r.sales; }, 0);
    var bsales = {}; S.lines.forEach(function (l) { var p = by(S.portions, 'id', l.portion_id); if (p.status === 'completed' && (p.completed_at || '').slice(0, 7) === period) { var pr = prod(l.product_id); if (pr) bsales[pr.brand_id] = (bsales[pr.brand_id] || 0) + l.unit_price_cents * l.units; } });
    var prop = el.map(function (r) { return { type: 'distributor', name: r.d.name, base: r.sales }; }).concat(S.brands.filter(function (b) { return b.participates_in_fund; }).map(function (b) { return { type: 'brand', name: b.name, base: bsales[b.id] || 0 }; })).concat([{ type: 'china_office', name: 'China office', base: total }]);
    var sum = function (f) { return S.fundc.filter(f).reduce(function (s, c) { return s + c.amount_cents; }, 0); };
    var rec = sum(function (c) { return c.status === 'received'; }), pled = sum(function (c) { return c.status === 'pledged'; });
    var appr = S.funde.filter(function (e) { return e.status === 'approved'; }).reduce(function (s, e) { return s + e.amount_cents; }, 0);
    return '<section class="wrap pad"><p class="kicker">USA Souvenir distributors association</p><h1>Shared marketing fund</h1><p class="note">The association is a separate organization from Amana Digital USA. This fund is tracked separately from Amana’s service income. The proposal is <strong>1% from distributors, 1% from participating brand partners and 1% from the China office</strong>, on one agreed sales base. Participation and spending rules remain subject to agreement.</p>' +
      '<div class="stats"><div class="stat"><span class="stat-n">' + money(rec) + '</span>Contributions received</div><div class="stat"><span class="stat-n">' + money(pled) + '</span>Pledged, not yet received</div><div class="stat"><span class="stat-n">' + money(appr) + '</span>Approved expenses</div><div class="stat"><span class="stat-n">' + money(rec - appr) + '</span>Remaining funds</div></div>' +
      '<div class="card"><div class="portion-head"><h2>Proposed contributions</h2><form class="toolbar" data-act="fperiod"><label>Period<select name="p">' + ps.map(function (p) { return '<option' + (p === period ? ' selected' : '') + '>' + p + '</option>'; }).join('') + '</select></label><button class="btn btn-sm" type="submit">Show</button></form></div><p class="small muted">Sales base used in this demonstration: completed website order portions in ' + period + ' (' + money(total) + ' total). The agreed base may differ.</p>' +
      '<table class="table"><thead><tr><th>Source</th><th class="num">Sales base</th><th>Rate</th><th class="num">Proposed</th><th>Recorded</th></tr></thead><tbody>' +
      prop.map(function (p) { var r = S.fundc.filter(function (c) { return c.source_type === p.type && c.source_name === p.name && c.period === period; })[0], a = Math.round(p.base / 100); return '<tr><td>' + esc(p.name) + ' <span class="small muted">(' + p.type.replace('_', ' ') + ')</span></td><td class="num">' + money(p.base) + '</td><td>1%</td><td class="num">' + money(a) + '</td><td>' + (r ? (r.status === 'received' ? 'Received ' : 'Pledged ') + money(r.amount_cents) + (r.status === 'pledged' ? ' <button class="linklike small" data-act="freceived" data-v="' + r.id + '">Mark received</button>' : '') : a ? '<button class="btn btn-sm btn-ghost" data-act="fpledge" data-v="' + esc(JSON.stringify([p.type, p.name, period, p.base])) + '">Record pledge</button>' : '—') + '</td></tr>'; }).join('') + '</tbody></table></div>' +
      '<div class="card"><h2>Expenses &amp; campaign results</h2><table class="table"><thead><tr><th>Description</th><th class="num">Amount</th><th>Status</th><th>Result</th><th></th></tr></thead><tbody>' +
      S.funde.map(function (e) { return '<tr><td>' + esc(e.description) + '</td><td class="num">' + money(e.amount_cents) + '</td><td>' + e.status + '</td><td class="small">' + esc(e.result_note || '') + '</td><td>' + (e.status === 'proposed' ? '<button class="btn btn-sm" data-act="fexp" data-v="approve:' + e.id + '">Approve</button> <button class="btn btn-sm btn-ghost" data-act="fexp" data-v="reject:' + e.id + '">Reject</button>' : '') + '</td></tr>'; }).join('') + '</tbody></table>' +
      '<form class="form-grid" data-act="fexpnew"><label class="full">Proposed expense<input name="d" required placeholder="e.g. National Instagram campaign — spring catalog"></label><label>Amount ($)<input name="a" required></label><button class="btn" type="submit">Propose expense</button></form><p class="small muted">Approval rules (who approves, thresholds) remain subject to association agreement.</p></div></section>';
  }

  // ---------- misc views ----------
  function denied(need) {
    audit('access_denied', 'Tried to open #' + location.hash.slice(1) + ' as ' + roleName());
    var tip = { retailer: 'Retailer — Harbor Gifts', distributor: 'a Distributor', admin: 'Amana administrator', association: 'Association representative' }[need];
    return '<section class="wrap narrow pad"><h1>Access denied</h1><p>Your current account (<strong>' + esc(roleName()) + '</strong>) does not have access to this area.</p><p class="note">In this demonstration, use the <strong>“Viewing as”</strong> selector at the top to switch to ' + tip + '.</p><p><a class="btn" href="#home">Return home</a></p></section>';
  }
  function notFound() { return '<section class="wrap narrow pad"><h1>Page not found</h1><p><a class="btn" href="#home">Return home</a></p></section>'; }
  function vHow() {
    return '<section class="page-head"><div class="wrap"><h1>How this demonstration works</h1></div></section><section class="wrap narrow pad prose"><p>Use the <strong>Viewing as</strong> selector at the top to see the platform as each type of user. In the real platform, every person signs in with their own secure account.</p>' +
      '<h2>Suggested tour</h2><ol><li><strong>Retailer — Harbor Gifts:</strong> open Boston, add products, also add a New York product, open the order bag and submit the order request.</li><li><strong>Distributor — Boston:</strong> open Orders, confirm the new order (stock is reserved), then set Preparing → Shipped → Completed.</li><li>In <strong>Products &amp; stock</strong>, change a quantity, then publish the catalog under <strong>Catalog &amp; PDF</strong>.</li><li>In <strong>Liquidation</strong>, move a product into clearance and see it on the public Liquidation page.</li><li>In <strong>CSV import</strong>, use the sample QuickBooks export, review the preview, then apply.</li><li>Switch to <strong>Distributor — New York</strong> and confirm you cannot see Boston’s customers or costs.</li><li>Switch to <strong>Amana administrator</strong> for the ledger, support sessions and audit log; <strong>Association representative</strong> for the marketing fund.</li></ol>' +
      '<h2>Good to know</h2><p>All products, prices, stock and contacts are sample data. Changes are kept only in this browser — use <strong>Reset demo</strong> to start over. No payments are taken and no emails or messages are sent. Website and software by Amana Digital USA; the distributors association is a separate organization.</p></section>';
  }
  function pdfPreview(lid) {
    var l = loc(lid), d = distOfLoc(lid);
    var items = S.products.filter(function (p) { return p.location_id === lid && p.active; }).sort(function (a, b) { return a.is_liquidation - b.is_liquidation || cat(a.category_id).sort - cat(b.category_id).sort || a.name.localeCompare(b.name); });
    var sec = null, out = '';
    items.forEach(function (p) { var s = p.is_liquidation ? 'Liquidation & clearance' : cat(p.category_id).name; if (s !== sec) { out += '<h3 class="pdf-sec' + (p.is_liquidation ? ' red' : '') + '">' + esc(s) + '</h3>'; sec = s; }
      out += '<div class="pdf-item"><img src="' + img(p) + '" alt=""><div><strong>' + esc(p.name) + '</strong><br><span class="sku">' + esc(brand(p.brand_id).name) + ' · SKU ' + esc(p.sku) + '</span><br><b>' + (p.is_liquidation && p.clearance_price_cents != null ? money(p.clearance_price_cents) + ' / unit (was ' + money(p.unit_price_cents) + ')' : p.unit_price_cents == null ? 'Price on request' : money(p.unit_price_cents) + ' / unit') + '</b><br><span class="small">Case of ' + p.case_qty + ' · Minimum ' + p.min_cases + ' · ' + AV[p.availability] + (p.qty_available != null ? ' · ' + p.qty_available + ' units' : '') + '</span></div></div>'; });
    return '<div class="modal" data-act="closemodal"><div class="pdf" role="dialog" aria-label="PDF catalog preview"><button class="pdf-close" data-act="closemodal">Close ✕</button><div class="pdf-head"><strong>USA Souvenir</strong><span>' + esc(l.city) + ', ' + l.state + ' wholesale catalog</span><small>Catalog edition ' + l.catalog_version + ' · Updated ' + dt(l.catalog_published_at) + '</small></div>' +
      '<div class="pdf-body"><p><strong>Your local distributor:</strong> ' + esc(d.name) + ' · ' + esc(d.phone) + ' · ' + esc(d.email) + '<br><span class="small">' + esc(d.hours) + ' · Serving ' + esc(d.service_area) + '</span></p><p class="small">Prices are wholesale per unit in USD. Orders placed from this catalog are order requests: availability, freight, taxes and final terms are confirmed by the distributor above.</p><div class="pdf-grid">' + out + '</div>' +
      '<p class="small muted">Preview of the downloadable PDF. On the hosted platform this is a real PDF file generated from the same product records.</p></div></div></div>';
  }

  // ---------- layout & router ----------
  function header(cur) {
    var n = S.cart.length;
    var acct = S.role === 'retailer' ? '<a href="#bag" class="nav-link">Order bag <span class="badge">' + n + '</span></a><a href="#orders" class="nav-link">My orders</a>'
      : S.role.indexOf('dist-') === 0 ? '<a href="#ws" class="nav-link">Distributor workspace</a>' : S.role === 'admin' ? '<a href="#admin" class="nav-link">Administration</a>' : S.role === 'association' ? '<a href="#fund" class="nav-link">Association fund</a>' : '<button class="btn btn-sm" data-act="role" data-v="retailer">Sign in as retailer</button>';
    return '<div class="demo-bar"><strong>Live demonstration</strong> — sample products, stock, customers and orders. Changes stay in this browser. No payments are taken and no emails or messages are sent.</div>' +
      '<div class="role-bar"><div class="wrap role-row"><label for="role">Viewing as</label><select id="role" data-act="rolesel">' + ROLES.map(function (r) { return '<option value="' + r[0] + '"' + (S.role === r[0] ? ' selected' : '') + '>' + r[1] + '</option>'; }).join('') + '</select><a href="#how" class="small">How this demo works</a><span class="spacer"></span><button class="linklike small" data-act="reset">Reset demo</button></div></div>' +
      (S.role === 'admin' && S.support ? '<div class="support-bar">Support session: acting in <strong>' + esc(dist(S.support).name) + '</strong> workspace. Every action is logged. <button class="linklike" data-act="endsupport">End support session</button></div>' : '') +
      '<header class="site-header"><div class="wrap header-row"><a class="logo" href="#home"><svg viewBox="0 0 40 40" width="34" height="34" aria-hidden="true"><rect width="40" height="40" rx="9" fill="#13294b"/><path d="M20 7l3.5 7.6 8.2.8-6.2 5.5 1.8 8.1L20 24.8 12.7 29l1.8-8.1-6.2-5.5 8.2-.8z" fill="#fff"/><rect x="8" y="32" width="24" height="3" rx="1.5" fill="#c8102e"/></svg><span><strong>USA Souvenir</strong><small>Wholesale · Local distributors</small></span></a>' +
      '<button class="menu-toggle" data-act="menu" aria-expanded="false">Menu</button><nav id="primary-nav" class="primary-nav"><div class="nav-group"><details class="city-menu"><summary class="nav-link">City catalogs</summary><div class="dropdown">' + S.locations.filter(function (l) { return l.active; }).map(function (l) { return '<a href="#' + l.slug + '">' + esc(l.city) + ', ' + l.state + '</a>'; }).join('') + '</div></details>' +
      '<a href="#liquidation" class="nav-link' + (cur === 'liquidation' ? ' is-current' : '') + '">Liquidation</a><a href="#displays" class="nav-link' + (cur === 'displays' ? ' is-current' : '') + '">Displays</a></div><div class="nav-group">' + acct + '</div></nav></div></header>';
  }
  function footer() {
    return '<footer class="site-footer"><div class="wrap footer-grid"><div><p class="footer-brand">USA Souvenir</p><p>Wholesale souvenir catalogs, order requests and clearance — served by the local distributor in each city.</p><p class="small">Website and software owned and operated by <strong>Amana Digital USA</strong>. The USA Souvenir distributors association is a separate organization with its own elected representatives and marketing fund.</p></div>' +
      '<div><p class="footer-h">City catalogs</p><ul>' + S.locations.map(function (l) { return '<li><a href="#' + l.slug + '">' + esc(l.city) + ' souvenir wholesale</a></li>'; }).join('') + '</ul></div><div><p class="footer-h">Trade</p><ul><li><a href="#liquidation">Liquidation &amp; clearance</a></li><li><a href="#displays">Brand-approved displays</a></li><li><a href="#how">How this demo works</a></li></ul></div>' +
      '<div><p class="footer-h">Ordering terms</p><p class="small">Orders placed on this website are <strong>order requests</strong>. Availability, freight, taxes and final terms are confirmed by the responsible local distributor. No online payment is taken.</p></div></div><div class="wrap footer-base small">© ' + new Date().getFullYear() + ' Amana Digital USA · Demonstration</div></footer>';
  }
  var modal = '';
  function render() {
    var h = (location.hash || '#home').slice(1), body, cur = h;
    var l = locSlug(h);
    if (h === 'home' || h === '') body = vHome();
    else if (l) body = vCity(l);
    else if (/^catalog-/.test(h) || /^enquire-/.test(h)) { var l2 = locSlug(h.replace(/^(catalog|enquire)-/, '')); body = l2 ? vCity(l2) : notFound(); }
    else if (/^product-/.test(h)) body = vProduct(h.slice(8));
    else if (h === 'liquidation') body = vLiquidation();
    else if (h === 'displays') body = vDisplays();
    else if (h === 'how') body = vHow();
    else if (h === 'bag') body = vBag();
    else if (h === 'orders') body = vOrders();
    else if (/^order-/.test(h)) body = vOrder(h.slice(6));
    else if (h === 'ws') body = vWs();
    else if (h === 'ws-products') body = vWsProducts();
    else if (h === 'ws-catalog') body = vWsCatalog();
    else if (h === 'ws-orders') body = vWsOrders();
    else if (/^ws-order-\d+$/.test(h)) body = vWsOrder(Number(h.slice(9)));
    else if (h === 'ws-enquiries') body = vWsEnquiries();
    else if (h === 'ws-customers') body = vWsCustomers();
    else if (h === 'ws-campaigns') body = vWsCampaigns();
    else if (h === 'ws-liquidation') body = vWsLiquidation();
    else if (h === 'ws-import') body = vWsImport();
    else if (h === 'admin') body = vAdmin();
    else if (h === 'admin-orders') body = vAdminOrders();
    else if (h === 'admin-ledger') body = vLedger();
    else if (h === 'admin-audit') body = vAudit();
    else if (h === 'fund') body = vFund();
    else body = notFound();
    var isWs = /^(ws|admin)/.test(h);
    var fl = S.flash ? '<div class="toast" role="status">' + esc(S.flash) + '</div>' : '';
    S.flash = null;
    document.getElementById('app').innerHTML = header(cur) + '<main id="main" class="' + (isWs ? 'main-wide' : '') + '">' + fl + body + '</main>' + footer() + modal;
    save();
    var anchor = /^(catalog|enquire)-/.test(h) ? document.getElementById(h) : null;
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth' }); else if (!keepScroll) window.scrollTo(0, 0);
    keepScroll = false;
  }
  var keepScroll = false;
  function stay(msg) { if (msg) flash(msg); var y = window.scrollY; keepScroll = true; render(); window.scrollTo(0, y); }

  // ---------- actions ----------
  var A = {
    role: function (el) { S.role = el.dataset.v; S.support = null; flash('Now viewing as ' + roleName() + '.'); render(); },
    rolesel: function (el) { S.role = el.value; S.support = null; audit('view_as', roleName()); var home = { retailer: 'boston', 'dist-boston': 'ws', 'dist-new-york': 'ws', 'dist-miami': 'ws', admin: 'admin', association: 'fund', visitor: 'home' }[S.role]; flash('Now viewing as ' + roleName() + '.'); go(home); },
    reset: function () { S = fresh(); try { localStorage.removeItem(LS); } catch (e) { } flash('Demo reset to the original sample data.'); go('home'); },
    menu: function (el) { var n = document.getElementById('primary-nav'); var o = n.classList.toggle('open'); el.setAttribute('aria-expanded', o ? 'true' : 'false'); },
    pdf: function (el) { modal = pdfPreview(Number(el.dataset.v)); keepScroll = true; render(); },
    closemodal: function (el, ev) { if (ev.target !== el) return; modal = ''; keepScroll = true; render(); },
    bagrm: function (el) { S.cart = S.cart.filter(function (i) { return i.pid !== Number(el.dataset.v); }); render(); },
    endsupport: function () { audit('support_session_ended', dist(S.support).name); S.support = null; flash('Support session ended.'); go('admin'); },
    campapprove: function (el) { var c = by(S.campaigns, 'id', Number(el.dataset.v)); c.status = 'approved'; audit('campaign_approved', c.name); stay('Campaign approved.'); },
    campsend: function (el) { var c = by(S.campaigns, 'id', Number(el.dataset.v)); c.recipients = eligibleRecipients(c.distributor_id, c.audience).length; c.status = 'simulated'; audit('campaign_simulated_send', c.recipients + ' recipients'); stay('Simulated send: ' + c.recipients + ' recipient(s). No email was sent — email service not connected.'); },
    campfollow: function (el) { var c = by(S.campaigns, 'id', Number(el.dataset.v)); S.campaigns.unshift({ id: nid(), distributor_id: c.distributor_id, name: c.name + ' — follow-up', subject: 'Reminder: ' + c.subject, body: 'Hello {{contact_name}},\n\nA quick reminder that our {{city}} catalog is available: {{catalog_link}}\n\nReply or call {{phone}} if you would like help with an order.\n\n{{distributor}}', audience: c.audience, step: c.step + 1, status: 'draft' }); stay('Follow-up draft created.'); },
    unliq: function (el) { var p = prod(Number(el.dataset.v)); p.is_liquidation = 0; p.clearance_price_cents = null; p.updated_at = now(); audit('liquidation_removed', p.sku); stay(p.name + ' returned to the regular catalog.'); },
    importsample: function () { startImport('customers', 'quickbooks-customer-export.csv', SAMPLE_QB); },
    importdiscard: function () { S.imports = S.imports.filter(function (i) { return i.did !== myDistId(); }); stay('Import discarded. Nothing was changed.'); },
    importapply: function () {
      var did = myDistId(), b = S.imports.filter(function (i) { return i.did === did; })[0]; if (!b) return; var n = 0;
      b.rows.forEach(function (r) {
        if (r.action === 'error') return;
        if (b.kind === 'customers') {
          var x = r.data, ex = x.email ? S.crm.filter(function (c) { return c.distributor_id === did && (c.email || '').toLowerCase() === x.email; })[0] : null;
          if (ex) { ex.business_name = x.business_name; ex.city = x.city || ex.city; ex.state = x.state || ex.state; ex.phone = x.phone || ex.phone; }
          else S.crm.push({ id: nid(), distributor_id: did, kind: 'customer', business_name: x.business_name, contact_name: x.contact_name, email: x.email || null, phone: x.phone, city: x.city, state: x.state, notes: 'Imported from CSV', follow_up_status: 'none', email_opt_in: x.email_opt_in, unsubscribed_at: null });
        } else { var p = by(S.products, 'sku', r.sku); if (!p || p.distributor_id !== did) return; p.qty_available = r.data.qty; p.availability = autoAv(p, r.data.qty); p.stock_updated_at = p.updated_at = now(); }
        n++;
      });
      S.imports = S.imports.filter(function (i) { return i.did !== did; });
      audit('import_applied', b.kind + ': ' + n + ' rows'); flash('Import applied: ' + n + ' row(s).'); go(b.kind === 'customers' ? 'ws-customers' : 'ws-products');
    },
    freceived: function (el) { var c = by(S.fundc, 'id', Number(el.dataset.v)); c.status = 'received'; audit('fund_contribution_received', c.source_name); stay('Marked as received.'); },
    fpledge: function (el) { var v = JSON.parse(el.dataset.v); S.fundc.push({ id: nid(), source_type: v[0], source_name: v[1], period: v[2], base_cents: v[3], rate_bp: 100, amount_cents: Math.round(v[3] / 100), status: 'pledged' }); audit('fund_pledge_recorded', v[1] + ' ' + v[2]); FP = v[2]; stay('Pledge recorded.'); },
    fexp: function (el) { var p = el.dataset.v.split(':'), e = by(S.funde, 'id', Number(p[1])); e.status = p[0] === 'approve' ? 'approved' : 'rejected'; audit('fund_expense_' + e.status, e.description); stay('Expense ' + e.status + '.'); },
  };
  var FORMS = {
    filter: function (f, fd) { var base = f.dataset.base, o = {}; fd.forEach(function (v, k) { if (v) o[k] = v; }); F[base] = o; keepScroll = true; render(); var a = document.getElementById('catalog-' + base); if (a) a.scrollIntoView(); },
    pickcity: function (f, fd) { go(fd.get('city')); },
    add: function (f, fd) {
      var pid = Number(fd.get('pid')), c = Number(fd.get('cases')), p = prod(pid), it = by(S.cart, 'pid', pid);
      if (it) it.cases += c; else S.cart.push({ pid: pid, cases: c });
      stay('Added ' + c + ' case' + (c > 1 ? 's' : '') + ' of ' + p.name + ' to your order bag.');
    },
    enquiry: function (f, fd) {
      var l = loc(Number(fd.get('loc'))), d = distOfLoc(l.id);
      if (!isEmail(fd.get('email'))) return stay('Please enter a valid email.');
      S.enquiries.push({ id: nid(), distributor_id: d.id, product_id: fd.get('pid') ? Number(fd.get('pid')) : null, name: fd.get('name'), business: fd.get('business'), email: fd.get('email'), phone: fd.get('phone'), message: fd.get('message'), status: 'new', created_at: now() });
      audit('enquiry_created', l.city); stay('Thank you — your enquiry was sent to the ' + l.city + ' distributor. (Switch to the ' + l.city + ' distributor to see it arrive.)');
    },
    submitorder: function (f, fd) {
      if (!S.cart.length) return;
      var t = now(), ref = 'USA-' + t.slice(2, 10).replace(/-/g, '') + '-' + Math.random().toString(16).slice(2, 8).toUpperCase();
      var o = { id: nid(), ref: ref, retailer_id: RET_ID, ship_to: fd.get('ship_to'), notes: fd.get('notes'), created_at: t }; S.orders.push(o);
      var groups = {}; S.cart.forEach(function (it) { var p = prod(it.pid); (groups[p.distributor_id] = groups[p.distributor_id] || []).push({ p: p, cases: it.cases }); });
      Object.keys(groups).forEach(function (did) {
        var g = groups[did], por = { id: nid(), order_id: o.id, distributor_id: Number(did), status: 'submitted', subtotal_cents: g.reduce(function (s, i) { return s + price(i.p) * i.p.case_qty * i.cases; }, 0), updated_at: t };
        S.portions.push(por);
        g.forEach(function (i) { S.lines.push({ id: nid(), portion_id: por.id, product_id: i.p.id, sku: i.p.sku, name: i.p.name, unit_price_cents: price(i.p), case_qty: i.p.case_qty, cases: i.cases, units: i.cases * i.p.case_qty, is_liquidation: i.p.is_liquidation }); });
        S.events.push({ id: nid(), portion_id: por.id, status: 'submitted', note: 'Order request submitted by retailer', created_at: t });
      });
      S.cart = []; audit('order_request_created', ref);
      flash('Order request submitted. Each distributor will confirm its portion. Switch to “Distributor — Boston” to see it arrive.'); go('order-' + ref);
    },
    portion: function (f, fd) {
      var did = myDistId(), p = by(S.portions, 'id', Number(fd.get('id'))); if (!p || p.distributor_id !== did) return;
      var s = fd.get('status'), t = now();
      if (s) {
        var ls = S.lines.filter(function (l) { return l.portion_id === p.id; });
        if (s === 'confirmed') ls.forEach(function (l) { var pr = prod(l.product_id); if (pr && pr.qty_available != null) { pr.qty_available = Math.max(0, pr.qty_available - l.units); pr.availability = autoAv(pr, pr.qty_available); pr.stock_updated_at = pr.updated_at = t; } });
        if (s === 'cancelled' && (p.status === 'confirmed' || p.status === 'preparing')) ls.forEach(function (l) { var pr = prod(l.product_id); if (pr && pr.qty_available != null) { pr.qty_available += l.units; pr.availability = autoAv(pr, pr.qty_available); } });
        if (s === 'completed') { p.completed_at = t; ls.filter(function (l) { return l.is_liquidation; }).forEach(function (l) { S.liqsales.push({ id: nid(), distributor_id: did, product_id: l.product_id, sku: l.sku, units: l.units, sale_price_cents: l.unit_price_cents, unit_cost_cents: cost(l.product_id), recorded_at: t }); }); }
        p.status = s; S.events.push({ id: nid(), portion_id: p.id, status: s, note: fd.get('note') || null, created_at: t });
      } else if (fd.get('note')) S.events.push({ id: nid(), portion_id: p.id, status: p.status, note: fd.get('note'), created_at: t });
      p.freight_note = fd.get('freight') || p.freight_note; p.carrier = fd.get('carrier') || p.carrier; p.tracking = fd.get('tracking') || p.tracking; p.updated_at = t;
      audit((S.support ? 'support:' : '') + 'order_updated', by(S.orders, 'id', p.order_id).ref + ' → ' + (s || p.status));
      stay(s ? 'Status changed to ' + ST[s] + (s === 'confirmed' ? ' — stock reserved.' : s === 'completed' ? ' — now counts as an eligible sale.' : '.') : 'Order updated.');
    },
    quick: function (f, fd) {
      var p = prod(Number(fd.get('pid'))); if (!p || p.distributor_id !== myDistId()) return;
      var pr = cents(fd.get('price')), q = fd.get('qty') === '' ? null : Number(fd.get('qty'));
      if ((pr !== null && isNaN(pr)) || (q !== null && !(q >= 0 && Math.floor(q) === q))) return stay('Please enter a valid price and whole-number quantity.');
      var av = fd.get('av') === 'auto' ? autoAv(Object.assign({}, p, { availability: 'in_stock' }), q) : fd.get('av');
      if (q !== p.qty_available || av !== p.availability) p.stock_updated_at = now();
      p.unit_price_cents = pr; p.qty_available = q; p.availability = av; p.updated_at = now();
      audit((S.support ? 'support:' : '') + 'product_quick_edit', p.sku + ' price ' + money(pr) + ', qty ' + q); stay('Saved ' + p.sku + ' — ' + AV[av] + '.');
    },
    publish: function () { var l = loc(dist(myDistId()).location_id); l.catalog_version++; l.catalog_published_at = now(); audit('catalog_published', l.city + ' edition ' + l.catalog_version); stay('Edition ' + l.catalog_version + ' published. The PDF and the public catalog date are updated.'); },
    liquidate: function (f, fd) {
      var p = prod(Number(fd.get('pid'))); if (!p || p.distributor_id !== myDistId()) return;
      var c = cents(fd.get('clr')), q = Number(fd.get('qty')), k = cents(fd.get('cost'));
      if (c == null || isNaN(c) || !(q >= 0) || k == null || isNaN(k)) return stay('Enter a valid clearance price, quantity and cost.');
      p.is_liquidation = 1; p.clearance_price_cents = c; p.qty_available = Math.floor(q); p.availability = autoAv(Object.assign({}, p, { availability: 'in_stock' }), p.qty_available); p.liquidation_listed_at = p.stock_updated_at = p.updated_at = now(); setCost(p.id, k);
      audit('liquidation_listed', p.sku + ' at ' + money(c)); stay(p.name + ' is listed in liquidation. It now appears on the public Liquidation page — your cost stays private.');
    },
    creditnew: function (f, fd) { var l = cents(fd.get('loss')), r = cents(fd.get('req')); if (l == null || isNaN(l)) return stay('Enter the documented loss.'); S.credits.push({ id: nid(), distributor_id: myDistId(), partner: fd.get('partner'), period_label: fd.get('period'), documented_loss_cents: l, requested_cents: isNaN(r) ? null : r, status: 'draft', approved_cents: null }); audit('credit_request_created', fd.get('partner')); stay('Credit request recorded as a draft.'); },
    creditstatus: function (f, fd) { var c = by(S.credits, 'id', Number(fd.get('id'))), s = fd.get('status'), a = cents(fd.get('appr')); if ((s === 'approved' || s === 'partially_approved') && (a == null || isNaN(a))) return stay('Enter the amount the partner actually approved.'); c.status = s; c.approved_cents = (s === 'approved' || s === 'partially_approved') ? a : null; audit('credit_request_status', s); stay('Partner response recorded.'); },
    enqstatus: function (f, fd) {
      var e = by(S.enquiries, 'id', Number(fd.get('id'))); e.status = fd.get('status'); var m = 'Enquiry updated.';
      if (fd.get('crm') && !S.crm.some(function (c) { return c.distributor_id === e.distributor_id && (c.email || '').toLowerCase() === (e.email || '').toLowerCase(); })) { S.crm.push({ id: nid(), distributor_id: e.distributor_id, kind: 'prospect', business_name: e.business || e.name, contact_name: e.name, email: e.email, phone: e.phone, notes: 'From website enquiry', follow_up_status: 'due', email_opt_in: 0 }); m = 'Enquiry updated and added to your customer list (not opted in to marketing).'; }
      stay(m);
    },
    campnew: function (f, fd) { S.campaigns.unshift({ id: nid(), distributor_id: myDistId(), name: fd.get('name'), subject: fd.get('subject'), body: fd.get('body'), audience: fd.get('audience'), step: 1, status: 'draft' }); stay('Draft saved. Preview it below, then approve.'); },
    import: function (f, fd) {
      var file = fd.get('file'), kind = fd.get('kind');
      if (!file || !file.size) return stay('Choose a CSV file, or use the sample QuickBooks export.');
      if (file.size > 3 * 1024 * 1024) return stay('Files are limited to 3 MB.');
      var rd = new FileReader(); rd.onload = function () { startImport(kind, file.name, String(rd.result)); }; rd.readAsText(file);
    },
    support: function (f, fd) { var d = dist(Number(fd.get('did'))); S.support = d.id; audit('support_session_started', d.name + ' — ' + fd.get('reason')); flash('Support session opened for ' + d.name + '. Every action is logged.'); go('ws'); },
    period: function (f, fd) { LP = fd.get('p'); stay(); },
    fperiod: function (f, fd) { FP = fd.get('p'); stay(); },
    terms: function (f, fd) { var c = String(fd.get('c')).trim(), fe = String(fd.get('f')).trim(); S.commission = c === '' ? null : Math.round(Number(c) * 100); S.fee = fe === '' ? null : cents(fe); if (isNaN(S.commission) || isNaN(S.fee)) { S.commission = S.fee = null; return stay('Invalid value.'); } audit('ledger_terms_changed', 'demo values'); stay('Demonstration values saved.'); },
    fexpnew: function (f, fd) { var a = cents(fd.get('a')); if (a == null || isNaN(a)) return stay('Enter an amount.'); S.funde.push({ id: nid(), description: fd.get('d'), amount_cents: a, status: 'proposed' }); audit('fund_expense_proposed', fd.get('d')); stay('Expense proposed.'); },
  };
  function startImport(kind, name, text) {
    var did = myDistId(), recs = parseCsv(text);
    if (!recs.length) return stay('The file has no data rows.');
    var rows = kind === 'customers' ? validateCustomers(recs, did) : validateInventory(recs, did);
    S.imports = S.imports.filter(function (i) { return i.did !== did; });
    S.imports.unshift({ did: did, kind: kind, filename: name, rows: rows, status: 'preview' });
    audit('import_previewed', kind + ' — ' + name); stay('File read. Review the preview before applying.');
  }

  document.addEventListener('click', function (ev) {
    var el = ev.target.closest('[data-act]'); if (!el || el.tagName === 'FORM' || el.tagName === 'SELECT' || el.tagName === 'INPUT') return;
    if (A[el.dataset.act]) { if (el.dataset.act !== 'closemodal') ev.preventDefault(); A[el.dataset.act](el, ev); }
    var dd = document.querySelectorAll('details.city-menu[open]'); dd.forEach(function (d) { if (!d.contains(ev.target)) d.removeAttribute('open'); });
  });
  document.addEventListener('submit', function (ev) { var f = ev.target; if (!f.dataset.act || !FORMS[f.dataset.act]) return; ev.preventDefault(); FORMS[f.dataset.act](f, new FormData(f)); });
  document.addEventListener('change', function (ev) {
    var el = ev.target;
    if (el.dataset.act === 'rolesel') A.rolesel(el);
    if (el.dataset.act === 'bagqty') { var it = by(S.cart, 'pid', Number(el.dataset.v)), p = prod(it.pid); it.cases = Math.max(p.min_cases, Math.min(999, Number(el.value) | 0)); keepScroll = true; var y = window.scrollY; render(); window.scrollTo(0, y); }
    if (el.dataset.act === 'ledgerst') { S.ledger[el.dataset.v] = el.value; audit('ledger_status', el.dataset.v + ' ' + el.value); save(); }
  });
  window.addEventListener('hashchange', function () { modal = ''; render(); });
  load(); render();
})();
