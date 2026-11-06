/* USA Souvenir demo — sample data (generated in the browser). */
(function () {
  var brands = [
    { id: 1, slug: 'robin-ruth', name: 'Robin Ruth', description: 'City-inspired souvenir drinkware, bags, caps and accessories designed for destination retail.', participates_in_fund: 1 },
    { id: 2, slug: 'memorie', name: 'Memorie', description: 'Keepsakes and gift souvenirs — snow globes, ornaments, postcards and glassware.', participates_in_fund: 1 }];
  var categories = [['drinkware', 'Drinkware', 0], ['bags', 'Bags', 0], ['caps-apparel', 'Caps & apparel', 0], ['keyrings-magnets', 'Keyrings & magnets', 0], ['gifts-keepsakes', 'Gifts & keepsakes', 0], ['approved-displays', 'Approved displays', 1]]
    .map(function (c, i) { return { id: i + 1, slug: c[0], name: c[1], is_display: c[2], sort: i + 1 }; });
  var PUB = '2026-10-01 14:00:00';
  var C = [
    ['boston', 'Boston', 'MA', 'BOS', 'New England, well remembered.', 'Wholesale souvenirs for Boston-area gift shops, museums, hotels and visitor attractions, supplied and confirmed by the Boston distribution center.', 'boston@usasouvenir.example', '(617) 555-0142', 'Mon–Fri, 8:00 am – 4:30 pm ET', 'Greater Boston, Cape Cod and New England'],
    ['new-york', 'New York', 'NY', 'NYC', 'A little city. A lot of character.', 'Wholesale souvenirs for New York City retailers, newsstands, hotels and attractions, supplied and confirmed by the New York distribution center.', 'newyork@usasouvenir.example', '(212) 555-0187', 'Mon–Fri, 8:00 am – 5:00 pm ET', 'New York City, Long Island and northern New Jersey'],
    ['miami', 'Miami', 'FL', 'MIA', 'Bring a little sunshine to your shelves.', 'Wholesale souvenirs for Miami and South Florida gift shops, resorts, cruise retail and attractions, supplied and confirmed by the Miami distribution center.', 'miami@usasouvenir.example', '(305) 555-0163', 'Mon–Sat, 8:00 am – 4:00 pm ET', 'Miami-Dade, Broward, Palm Beach and the Keys']];
  // brand, code, category, name, description, price, case, minCases, qty, availability, clearance
  var R = [
    [1, '001', 1, 'City Letter Mug', '11 oz ceramic mug with bold city lettering and skyline wrap. Dishwasher safe.', 475, 12, 1, 144],
    [1, '002', 1, 'Everyday Travel Tumbler', '16 oz double-wall travel tumbler with sliding lid and city skyline print.', 550, 12, 1, 96],
    [1, '003', 2, 'City Mini Crossbody', 'Compact zip crossbody with adjustable strap and embroidered skyline.', 750, 6, 1, 72],
    [1, '004', 3, 'Classic City Cap', 'Six-panel cotton twill cap with embroidered city name and adjustable strap.', 625, 12, 1, 120],
    [1, '005', 4, 'City Souvenir Keyring', 'Enamel keyring with city name and skyline, packed on a hanging card.', 225, 24, 1, 240],
    [1, '006', 2, 'City Canvas Tote', 'Heavy natural canvas tote with two-color city print and long handles.', 850, 6, 1, 48],
    [1, '007', 4, 'Skyline Fridge Magnet', 'Full-color resin magnet with city skyline, individually bagged.', 160, 48, 1, 480],
    [1, '008', 3, 'City Skyline Tee', 'Ring-spun cotton T-shirt with front city print. Assorted S–XL per case.', 795, 12, 1, 60],
    [2, '101', 5, 'City Snow Globe', '65 mm glass snow globe with skyline scene on a printed base.', 680, 12, 1, 84],
    [2, '102', 5, 'City Keepsake Ornament', 'Shatter-resistant ornament with city lettering, gift boxed.', 340, 24, 1, 144],
    [2, '103', 5, 'City Postcard Set', 'Set of 8 postcards with landmark illustrations, cello-wrapped.', 195, 24, 2, 288],
    [2, '104', 1, 'City Shot Glass', '1.5 oz glass with fired-on city print.', 210, 36, 1, 216],
    [1, '901', 6, 'Robin Ruth Floor Spinner Display', 'Brand-approved four-sided floor spinner for bags, caps and accessories. Configuration and price confirmed by your distributor.', null, 1, 1, null, 'on_request'],
    [2, '902', 6, 'Memorie Countertop Display', 'Brand-approved countertop riser for snow globes and ornaments.', 4500, 1, 1, 10],
    [1, '501', 2, 'Archive City Shoulder Bag', 'Previous-season shoulder bag with city print. Limited quantity.', 900, 6, 1, 54, null, 400],
    [2, '502', 1, 'Archive Color Mug', 'Previous-season color mug with city lettering. Limited quantity.', 450, 12, 1, 96, null, 200]];
  var locations = [], distributors = [], products = [], costs = [], id = 0;
  C.forEach(function (c, i) {
    locations.push({ id: i + 1, slug: c[0], city: c[1], state: c[2], tagline: c[4], intro: c[5], active: 1, catalog_version: 1, catalog_published_at: PUB });
    distributors.push({ id: i + 1, location_id: i + 1, name: c[1] + ' Distribution Center (sample)', contact_name: 'Sample Contact', email: c[6], phone: c[7], hours: c[8], service_area: c[9], active: 1 });
    R.forEach(function (r) {
      id++;
      var q = r[8], av = r[9] || (q == null ? 'on_request' : q < r[6] * r[7] * 3 ? 'low_stock' : 'in_stock');
      products.push({ id: id, sku: (r[0] === 1 ? 'RR-' : 'MM-') + c[3] + '-' + r[1], brand_id: r[0], location_id: i + 1, distributor_id: i + 1, category_id: r[2],
        name: c[1] + ' ' + r[3], description: r[4], image: 'x', unit_price_cents: r[5], case_qty: r[6], min_cases: r[7], qty_available: q, availability: av,
        stock_updated_at: PUB, updated_at: PUB, active: 1, is_liquidation: r[10] ? 1 : 0, clearance_price_cents: r[10] || null, liquidation_listed_at: r[10] ? '2026-09-15 12:00:00' : null });
      if (r[5] != null) costs.push({ product_id: id, unit_cost_cents: Math.round(r[5] * (r[10] ? 0.58 : 0.55)) });
    });
  });
  var bySku = function (s) { for (var i = 0; i < products.length; i++) if (products[i].sku === s) return products[i]; };
  var retailers = [
    { id: 1, business_name: 'Harbor Gifts (sample retailer)', contact_name: 'Sample Buyer', email: 'retailer@usasouvenir.example', phone: '(617) 555-0199', city: 'Boston', state: 'MA' },
    { id: 2, business_name: 'Ocean Drive Souvenirs (sample retailer)', contact_name: 'Sample Buyer', email: 'retailer2@usasouvenir.example', phone: '(305) 555-0120', city: 'Miami', state: 'FL' }];
  var orders = [], portions = [], lines = [], events = [], liqsales = [], seq = 0;
  var FLOW = ['submitted', 'confirmed', 'preparing', 'shipped', 'completed'];
  function order(ref, ret, at, items, statusByDist, doneAt) {
    var o = { id: orders.length + 1, ref: ref, retailer_id: ret, ship_to: 'Sample ship-to address', notes: null, created_at: at };
    orders.push(o);
    var groups = {};
    items.forEach(function (it) { var p = bySku(it[0]); (groups[p.distributor_id] = groups[p.distributor_id] || []).push({ p: p, cases: it[1] }); });
    Object.keys(groups).forEach(function (d) {
      var st = statusByDist[d] || 'submitted', g = groups[d];
      var por = { id: ++seq, order_id: o.id, distributor_id: Number(d), status: st, subtotal_cents: 0, freight_note: null, carrier: null, tracking: null, completed_at: st === 'completed' ? doneAt : null, updated_at: doneAt || at };
      g.forEach(function (i) {
        var price = i.p.is_liquidation ? i.p.clearance_price_cents : i.p.unit_price_cents, units = i.cases * i.p.case_qty;
        por.subtotal_cents += price * units;
        lines.push({ id: ++seq, portion_id: por.id, product_id: i.p.id, sku: i.p.sku, name: i.p.name, unit_price_cents: price, case_qty: i.p.case_qty, cases: i.cases, units: units, is_liquidation: i.p.is_liquidation });
        if (st !== 'submitted' && i.p.qty_available != null) { i.p.qty_available -= units; i.p.availability = i.p.qty_available <= 0 ? 'out_of_stock' : i.p.qty_available < i.p.case_qty * i.p.min_cases * 3 ? 'low_stock' : 'in_stock'; i.p.stock_updated_at = doneAt; }
        if (st === 'completed' && i.p.is_liquidation) { var c = costs.filter(function (x) { return x.product_id === i.p.id; })[0]; liqsales.push({ id: ++seq, distributor_id: Number(d), product_id: i.p.id, sku: i.p.sku, units: units, sale_price_cents: price, unit_cost_cents: c ? c.unit_cost_cents : null, recorded_at: doneAt }); }
      });
      if (FLOW.indexOf(st) >= 3) { por.carrier = 'Sample Freight Co.'; por.tracking = 'SAMPLE-' + (100000 + por.id * 7919) % 999999; }
      FLOW.slice(0, FLOW.indexOf(st) + 1).forEach(function (s, k) { events.push({ id: ++seq, portion_id: por.id, status: s, note: k === 0 ? 'Order request submitted by retailer' : null, created_at: k === 0 ? at : doneAt }); });
      portions.push(por);
    });
  }
  order('USA-260908-F09D31', 1, '2026-09-08 15:00:00', [['RR-BOS-001', 4], ['RR-BOS-004', 2], ['RR-BOS-501', 3]], { 1: 'completed' }, '2026-09-12 16:00:00');
  order('USA-260920-2E4816', 2, '2026-09-20 15:00:00', [['RR-MIA-002', 6], ['MM-MIA-101', 3], ['MM-MIA-502', 4]], { 3: 'completed' }, '2026-09-26 16:00:00');
  order('USA-261006-0FD8AD', 1, '2026-10-06 15:00:00', [['RR-BOS-006', 4], ['MM-NYC-101', 2], ['RR-NYC-005', 3]], { 1: 'completed', 2: 'shipped' }, '2026-10-10 16:00:00');
  order('USA-261022-CB605A', 2, '2026-10-22 15:00:00', [['RR-MIA-007', 5], ['RR-MIA-003', 2]], { 3: 'preparing' }, '2026-10-23 16:00:00');
  order('USA-261102-5C0370', 1, '2026-11-02 15:00:00', [['RR-BOS-002', 2], ['MM-BOS-103', 3]], {}, null);
  var enquiries = [
    { id: 1, distributor_id: 1, product_id: bySku('RR-BOS-901').id, name: 'Sample Buyer', business: 'Faneuil Corner Gifts (sample)', email: 'buyer@sample-shop.example', phone: '(617) 555-0111', message: 'Could we get a floor spinner for our new location? We have room for one unit near the entrance.', status: 'new', created_at: '2026-11-03 13:00:00' },
    { id: 2, distributor_id: 2, product_id: null, name: 'Sample Buyer', business: 'Midtown News (sample)', email: 'news@sample-shop.example', phone: null, message: 'Please send your current catalog and case pricing for keyrings and magnets.', status: 'new', created_at: '2026-11-04 10:00:00' }];
  var crm = [
    [1, 'customer', 'Harbor Gifts (sample retailer)', 'retailer@usasouvenir.example', '(617) 555-0199', 'Boston', 'MA', 'Reorders mugs monthly.', 'contacted', '2026-11-15', 1],
    [1, 'customer', 'Faneuil Corner Gifts (sample)', 'buyer@sample-shop.example', '(617) 555-0111', 'Boston', 'MA', 'Interested in spinner display.', 'due', '2026-11-08', 1],
    [1, 'prospect', 'Cape Lighthouse Shop (sample)', 'cape@sample-shop.example', null, 'Hyannis', 'MA', 'Met at trade show.', 'waiting', '2026-11-20', 0],
    [2, 'customer', 'Midtown News (sample)', 'news@sample-shop.example', null, 'New York', 'NY', '', 'due', '2026-11-07', 1],
    [3, 'customer', 'Ocean Drive Souvenirs (sample retailer)', 'retailer2@usasouvenir.example', '(305) 555-0120', 'Miami Beach', 'FL', 'High season starts December.', 'contacted', '2026-11-25', 1]
  ].map(function (c, i) { return { id: i + 1, distributor_id: c[0], kind: c[1], business_name: c[2], contact_name: 'Sample Buyer', email: c[3], phone: c[4], city: c[5], state: c[6], notes: c[7], follow_up_status: c[8], follow_up_date: c[9], email_opt_in: c[10], unsubscribed_at: null }; });
  var fundc = [];
  distributors.forEach(function (d) { fundc.push({ id: fundc.length + 1, source_type: 'distributor', source_name: d.name, period: '2026-08', base_cents: 2500000, rate_bp: 100, amount_cents: 25000, status: 'received' }); });
  fundc.push({ id: 4, source_type: 'brand', source_name: 'Robin Ruth', period: '2026-08', base_cents: 2500000, rate_bp: 100, amount_cents: 25000, status: 'received' });
  fundc.push({ id: 5, source_type: 'china_office', source_name: 'China office', period: '2026-08', base_cents: 2500000, rate_bp: 100, amount_cents: 25000, status: 'received' });
  window.SEED = {
    brands: brands, categories: categories, locations: locations, distributors: distributors, products: products, costs: costs, retailers: retailers,
    orders: orders, portions: portions, lines: lines, events: events, enquiries: enquiries, crm: crm, liqsales: liqsales, fundc: fundc,
    credits: [{ id: 1, distributor_id: 1, partner: 'China office', period_label: 'Q3 2026 liquidation', documented_loss_cents: 0, requested_cents: null, approved_cents: null, status: 'draft', notes: 'Sample draft prepared from the liquidation loss report.' }],
    funde: [{ id: 1, description: 'Sample: Instagram catalog campaign — Boston & Miami', amount_cents: 15000, status: 'approved', result_note: 'Sample result: 42 catalog downloads, 6 trade-account sign-ups' },
      { id: 2, description: 'Sample: printed catalog mailers for New York', amount_cents: 22000, status: 'proposed', result_note: null }],
  };
})();
