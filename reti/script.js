const properties = [
  // LUCKNOW
  { id:0, name:"Sunrise Heights Apartment", loc:"Gomti Nagar, Lucknow", city:"Lucknow", state:"Uttar Pradesh", type:"rent", category:"Apartment", price:"₹22,000/mo", rating:"4.5", imgClass:"img1", modalImg:"m1", photos:["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=85","https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80","https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80","https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80"], beds:2, baths:2, area:850, floor:4, badge:"badge-rent", badgeText:"For Rent", tag:"furnished", amenities:["WiFi","Parking","Gym","Security","Power Backup","Lift"], desc:"A beautifully furnished 2BHK apartment in the heart of Gomti Nagar. Modern kitchen, spacious balcony with city view." },
  { id:1, name:"Green Villa Estates", loc:"Aliganj, Lucknow", city:"Lucknow", state:"Uttar Pradesh", type:"rent", category:"Villa", price:"₹45,000/mo", rating:"4.8", imgClass:"img2", modalImg:"m2", photos:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85","https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=800&q=80","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80","https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80"], beds:4, baths:3, area:2200, floor:2, badge:"badge-rent", badgeText:"For Rent", tag:"rent", amenities:["Garden","Swimming Pool","Parking x2","Security","Solar Power"], desc:"Luxurious 4BHK villa with private garden and rooftop access." },
  { id:2, name:"Urban Studio Compact", loc:"Hazratganj, Lucknow", city:"Lucknow", state:"Uttar Pradesh", type:"rent", category:"Studio", price:"₹11,500/mo", rating:"4.2", imgClass:"img3", modalImg:"m3", photos:["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=85","https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80","https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80","https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80"], beds:1, baths:1, area:380, floor:6, badge:"badge-new", badgeText:"New", tag:"new", amenities:["WiFi","AC","24/7 Security","Housekeeping"], desc:"A chic and compact studio perfect for young professionals." },
  { id:3, name:"Blue Horizon Residency", loc:"Indira Nagar, Lucknow", city:"Lucknow", state:"Uttar Pradesh", type:"sale", category:"Apartment", price:"₹65 Lakh", rating:"4.6", imgClass:"img4", modalImg:"m4", photos:["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=85","https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80","https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"], beds:3, baths:2, area:1450, floor:8, badge:"badge-sale", badgeText:"For Sale", tag:"sale", amenities:["Gym","Swimming Pool","Club House","CCTV","Modular Kitchen"], desc:"Spacious 3BHK with premium finishes and stunning panoramic view." },
  { id:4, name:"Royal Residency Tower", loc:"Mahanagar, Lucknow", city:"Lucknow", state:"Uttar Pradesh", type:"rent", category:"Penthouse", price:"₹80,000/mo", rating:"4.9", imgClass:"img5", modalImg:"m5", photos:["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85","https://images.unsplash.com/photo-1615529162924-f8605388461d?w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6d349a58?w=800&q=80","https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80"], beds:5, baths:4, area:4000, floor:18, badge:"badge-rent", badgeText:"For Rent", tag:"furnished", amenities:["Private Terrace","Jacuzzi","Home Theatre","Smart Home","2 Lifts"], desc:"Ultra-premium penthouse with 360° city views and smart home automation." },
  { id:5, name:"Shree Sai Residency", loc:"Vikas Nagar, Lucknow", city:"Lucknow", state:"Uttar Pradesh", type:"rent", category:"Apartment", price:"₹15,000/mo", rating:"4.3", imgClass:"img6", modalImg:"m6", photos:["https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=85","https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80","https://images.unsplash.com/photo-1600047508788-786f3865b4a2?w=800&q=80","https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80"], beds:2, baths:1, area:700, floor:2, badge:"badge-rent", badgeText:"For Rent", tag:"rent", amenities:["Parking","Security","Water 24/7","Temple Nearby"], desc:"Affordable and well-maintained 2BHK in a peaceful colony." },

  // DELHI
  { id:6, name:"Delhi Dreams Apartment", loc:"Sector 10, East Delhi", city:"Delhi", state:"Delhi", type:"rent", category:"Apartment", price:"₹28,000/mo", rating:"4.4", imgClass:"img1", modalImg:"m1", photos:["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=85","https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80","https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80","https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80"], beds:2, baths:2, area:900, floor:5, badge:"badge-rent", badgeText:"For Rent", tag:"furnished", amenities:["WiFi","Parking","Gym","Security","Power Backup"], desc:"Modern 2BHK in prime East Delhi location. Near Metro Station." },
  { id:7, name:"South Delhi Premium", loc:"Sector 12, South Delhi", city:"Delhi", state:"Delhi", type:"rent", category:"Apartment", price:"₹35,000/mo", rating:"4.7", imgClass:"img2", modalImg:"m2", photos:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85","https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=800&q=80","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80","https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80"], beds:3, baths:2, area:1200, floor:6, badge:"badge-rent", badgeText:"For Rent", tag:"furnished", amenities:["Gym","Pool","Security","Garden","Parking"], desc:"Luxury 3BHK in premium South Delhi. Top schools nearby." },

  // BANGALORE
  { id:8, name:"Bangalore Tech Hub", loc:"Koramangala, Bangalore", city:"Bangalore", state:"Karnataka", type:"rent", category:"Apartment", price:"₹32,000/mo", rating:"4.5", imgClass:"img3", modalImg:"m3", photos:["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=85","https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80","https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80","https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80"], beds:2, baths:2, area:850, floor:7, badge:"badge-rent", badgeText:"For Rent", tag:"furnished", amenities:["WiFi","Parking","Gym","Security","AC"], desc:"Modern 2BHK in tech hub Koramangala. Walking distance to cafes." },
  { id:9, name:"Indiranagar Elite", loc:"Indiranagar, Bangalore", city:"Bangalore", state:"Karnataka", type:"sale", category:"Apartment", price:"₹75 Lakh", rating:"4.6", imgClass:"img4", modalImg:"m4", photos:["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=85","https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80","https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"], beds:3, baths:2, area:1350, floor:9, badge:"badge-sale", badgeText:"For Sale", tag:"sale", amenities:["Gym","Pool","Security","Garden","CCTV"], desc:"Premium 3BHK in vibrant Indiranagar with excellent schools." },

  // MUMBAI
  { id:10, name:"Mumbai High Rise", loc:"Bandra, Mumbai", city:"Mumbai", state:"Maharashtra", type:"rent", category:"Apartment", price:"₹45,000/mo", rating:"4.7", imgClass:"img5", modalImg:"m5", photos:["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85","https://images.unsplash.com/photo-1615529162924-f8605388461d?w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6d349a58?w=800&q=80","https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80"], beds:2, baths:2, area:750, floor:12, badge:"badge-rent", badgeText:"For Rent", tag:"furnished", amenities:["WiFi","Parking","Gym","Security","Pool"], desc:"Contemporary 2BHK in popular Bandra. Close to beaches and nightlife." },
  { id:11, name:"Dadar Luxury", loc:"Dadar East, Mumbai", city:"Mumbai", state:"Maharashtra", type:"rent", category:"Apartment", price:"₹38,000/mo", rating:"4.5", imgClass:"img6", modalImg:"m6", photos:["https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=85","https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80","https://images.unsplash.com/photo-1600047508788-786f3865b4a2?w=800&q=80","https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80"], beds:3, baths:2, area:1100, floor:8, badge:"badge-rent", badgeText:"For Rent", tag:"furnished", amenities:["Parking","Security","Pool","Gym","WiFi"], desc:"Spacious 3BHK in central Mumbai near railway station." },

  // HYDERABAD
  { id:12, name:"Hyderabad Hub", loc:"Jubilee Hills, Hyderabad", city:"Hyderabad", state:"Telangana", type:"rent", category:"Apartment", price:"₹25,000/mo", rating:"4.4", imgClass:"img1", modalImg:"m1", photos:["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=85","https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80","https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80","https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80"], beds:2, baths:2, area:800, floor:4, badge:"badge-rent", badgeText:"For Rent", tag:"furnished", amenities:["WiFi","Parking","Gym","Security"], desc:"Beautiful 2BHK in upscale Jubilee Hills. Close to IT companies." },
  { id:13, name:"Madhapur Modern", loc:"Madhapur, Hyderabad", city:"Hyderabad", state:"Telangana", type:"sale", category:"Apartment", price:"₹55 Lakh", rating:"4.6", imgClass:"img2", modalImg:"m2", photos:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85","https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=800&q=80","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80","https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80"], beds:3, baths:2, area:1250, floor:7, badge:"badge-sale", badgeText:"For Sale", tag:"sale", amenities:["Gym","Pool","Security","WiFi","Parking"], desc:"Contemporary 3BHK in IT corridor with modern amenities." },

  // PUNE
  { id:14, name:"Pune Downtown", loc:"Viman Nagar, Pune", city:"Pune", state:"Maharashtra", type:"rent", category:"Apartment", price:"₹20,000/mo", rating:"4.3", imgClass:"img3", modalImg:"m3", photos:["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=85","https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80","https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80","https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80"], beds:2, baths:1, area:700, floor:3, badge:"badge-rent", badgeText:"For Rent", tag:"furnished", amenities:["WiFi","Parking","Security","Water Supply","AC"], desc:"Cozy 2BHK in Viman Nagar. Close to airport and IT parks." },
  { id:15, name:"Pune Luxury Villa", loc:"Baner, Pune", city:"Pune", state:"Maharashtra", type:"rent", category:"Villa", price:"₹40,000/mo", rating:"4.8", imgClass:"img4", modalImg:"m4", photos:["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=85","https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80","https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"], beds:3, baths:2, area:1500, floor:2, badge:"badge-rent", badgeText:"For Rent", tag:"rent", amenities:["Garden","Parking","Security","Pool","WiFi"], desc:"Spacious villa in premium Baner locality. Perfect for families." },

  // KOLKATA
  { id:16, name:"Kolkata Heritage", loc:"Alipore, Kolkata", city:"Kolkata", state:"West Bengal", type:"rent", category:"Apartment", price:"₹18,000/mo", rating:"4.2", imgClass:"img5", modalImg:"m5", photos:["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85","https://images.unsplash.com/photo-1615529162924-f8605388461d?w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6d349a58?w=800&q=80","https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80"], beds:2, baths:1, area:650, floor:4, badge:"badge-rent", badgeText:"For Rent", tag:"rent", amenities:["Parking","Security","WiFi","Water Supply","AC"], desc:"Classic 2BHK in established Alipore area with heritage charm." },
  { id:17, name:"Kolkata Modern", loc:"Salt Lake City, Kolkata", city:"Kolkata", state:"West Bengal", type:"rent", category:"Apartment", price:"₹22,000/mo", rating:"4.5", imgClass:"img6", modalImg:"m6", photos:["https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=85","https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80","https://images.unsplash.com/photo-1600047508788-786f3865b4a2?w=800&q=80","https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80"], beds:3, baths:2, area:950, floor:6, badge:"badge-rent", badgeText:"For Rent", tag:"furnished", amenities:["Gym","Pool","WiFi","Parking","Security"], desc:"Modern 3BHK in planned community with excellent infrastructure." },

  // CHENNAI
  { id:18, name:"Chennai Marina", loc:"Marina Beach, Chennai", city:"Chennai", state:"Tamil Nadu", type:"rent", category:"Apartment", price:"₹26,000/mo", rating:"4.4", imgClass:"img1", modalImg:"m1", photos:["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=85","https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80","https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80","https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80"], beds:2, baths:2, area:800, floor:5, badge:"badge-rent", badgeText:"For Rent", tag:"furnished", amenities:["WiFi","AC","Parking","Security"], desc:"Modern 2BHK with sea breeze. Walking distance to Marina Beach." },
  { id:19, name:"Chennai Tech Park", loc:"OMR, Chennai", city:"Chennai", state:"Tamil Nadu", type:"rent", category:"Apartment", price:"₹23,000/mo", rating:"4.3", imgClass:"img2", modalImg:"m2", photos:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85","https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=800&q=80","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80","https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80"], beds:2, baths:2, area:900, floor:4, badge:"badge-rent", badgeText:"For Rent", tag:"furnished", amenities:["WiFi","Parking","Gym","Security"], desc:"Contemporary 2BHK on IT corridor close to tech companies." },

  // JAIPUR
  { id:20, name:"Jaipur Royal", loc:"Bani Park, Jaipur", city:"Jaipur", state:"Rajasthan", type:"rent", category:"Apartment", price:"₹16,000/mo", rating:"4.1", imgClass:"img3", modalImg:"m3", photos:["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=85","https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80","https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80","https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80"], beds:2, baths:1, area:750, floor:3, badge:"badge-rent", badgeText:"For Rent", tag:"rent", amenities:["WiFi","Parking","Security","Water 24/7"], desc:"Comfortable 2BHK in upscale Bani Park near restaurants and malls." },
  { id:21, name:"Jaipur Smart", loc:"C-Scheme, Jaipur", city:"Jaipur", state:"Rajasthan", type:"sale", category:"Apartment", price:"₹48 Lakh", rating:"4.4", imgClass:"img4", modalImg:"m4", photos:["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=85","https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80","https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"], beds:3, baths:2, area:1200, floor:5, badge:"badge-sale", badgeText:"For Sale", tag:"sale", amenities:["Gym","Security","WiFi","Parking"], desc:"Spacious 3BHK in premium C-Scheme area. Prime investment location." }
];

let currentFilter = 'all';

function renderCards(filter) {
  const grid = document.getElementById('propertyGrid');
  const filtered = filter === 'all' ? properties : properties.filter(p => {
    if(filter==='rent') return p.type==='rent';
    if(filter==='sale') return p.type==='sale';
    if(filter==='new') return p.tag==='new';
    if(filter==='furnished') return p.tag==='furnished';
    return true;
  });
  grid.innerHTML = filtered.map(p => `
    <div class="property-card fade-in" data-id="${p.id}">
      <div class="property-img ${p.imgClass}" style="background-image:url('${p.photos[0]}');background-size:cover;background-position:center;">
        <div class="prop-badge ${p.badge}">${p.badgeText}</div>
        <div class="prop-fav" onclick="toggleFav(this,event)" data-fav="0">♡</div>
        <div style="position:absolute;bottom:10px;right:10px;background:rgba(0,0,0,0.55);color:#fff;font-size:0.7rem;padding:3px 8px;border-radius:5px;">📷 ${p.photos.length} Photos</div>
      </div>
      <div class="prop-body">
        <div class="prop-price">${p.price}</div>
        <div class="prop-name">${p.name}</div>
        <div class="prop-loc">${p.loc}</div>
        <div class="prop-meta">
          <div class="prop-meta-item"><div class="val">${p.beds}</div><div class="lbl">Beds</div></div>
          <div class="prop-meta-item"><div class="val">${p.baths}</div><div class="lbl">Baths</div></div>
          <div class="prop-meta-item"><div class="val">${p.area}</div><div class="lbl">sq.ft</div></div>
          <div class="prop-meta-item"><div class="val">★${p.rating}</div><div class="lbl">Rating</div></div>
        </div>
        <div class="prop-actions">
          <button class="btn-detail" onclick="openModal(${p.id})">View Details</button>
          <button class="btn-enquire" onclick="openEnquiry(${p.id})">Enquire</button>
        </div>
      </div>
    </div>
  `).join('');
  observeFadeIn();
}

function filterProp(el, filter) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderCards(filter);
}

function openModal(id) {
  const p = properties[id];
  document.getElementById('modalTitle').textContent = p.name;
  const thumbsHtml = p.photos.map((url,i) => `
    <div onclick="switchPhoto(${i},'gallery-main-${id}')" id="gthumb-${id}-${i}"
      style="width:70px;height:52px;border-radius:7px;cursor:pointer;flex-shrink:0;
      background:url('${url}') center/cover no-repeat;
      border:2.5px solid ${i===0?'#C9A84C':'transparent'};
      transition:border-color 0.2s;opacity:${i===0?'1':'0.7'};"
      onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity=this.style.borderColor==='rgb(201, 168, 76)'?'1':'0.7'">
    </div>
  `).join('');
  document.getElementById('modalBody').innerHTML = `
    <div style="position:relative;margin-bottom:0.5rem;">
      <img id="gallery-main-${id}" src="${p.photos[0]}" alt="${p.name}"
        style="width:100%;height:240px;object-fit:cover;border-radius:12px;display:block;transition:opacity 0.3s;">
      <div style="position:absolute;top:10px;left:10px;background:rgba(0,0,0,0.55);color:#fff;font-size:0.72rem;padding:4px 10px;border-radius:5px;">📷 ${p.photos.length} Photos</div>
    </div>
    <div style="display:flex;gap:8px;overflow-x:auto;padding:4px 0 10px;scrollbar-width:none;" id="gthumb-row-${id}">
      ${thumbsHtml}
    </div>
    <div class="modal-price">${p.price}</div>
    <div class="modal-addr">📍 ${p.loc} &nbsp;·&nbsp; Floor ${p.floor} &nbsp;·&nbsp; ★${p.rating} (${p.reviews} reviews)</div>
    <div class="modal-specs">
      <div class="modal-spec"><div class="sv">${p.beds}</div><div class="sl">Bedrooms</div></div>
      <div class="modal-spec"><div class="sv">${p.baths}</div><div class="sl">Bathrooms</div></div>
      <div class="modal-spec"><div class="sv">${p.area}</div><div class="sl">Sq.ft</div></div>
      <div class="modal-spec"><div class="sv">${p.category}</div><div class="sl">Type</div></div>
    </div>
    <div class="modal-amenities">
      <h4>Amenities</h4>
      <div class="amenity-tags">${p.amenities.map(a => `<span class="amenity-tag">${a}</span>`).join('')}</div>
    </div>
    <div class="modal-desc">
      <h4>About this Property</h4>
      <p>${p.desc}</p>
    </div>
    <div class="enquiry-form">
      <h4>📨 Book an Enquiry</h4>
      <div class="form-grid">
        <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" id="fn${id}"></div>
        <div class="form-group"><label>Phone</label><input type="tel" placeholder="10-digit number" id="ph${id}"></div>
        <div class="form-group"><label>Email</label><input type="email" placeholder="you@email.com" id="em${id}"></div>
        <div class="form-group"><label>Visit Date</label><input type="date" id="dt${id}"></div>
        <div class="form-group"><label>Budget Range</label><select id="bgt${id}"><option>As Listed</option><option>Slightly Flexible</option><option>Open to Negotiate</option></select></div>
        <div class="form-group"><label>Preferred Time</label><select id="tm${id}"><option>Morning 9–12</option><option>Afternoon 12–4</option><option>Evening 4–7</option></select></div>
        <div class="form-group full"><label>Message</label><textarea placeholder="Any questions or special requirements..." id="msg${id}"></textarea></div>
      </div>
      <button class="form-submit" onclick="submitEnquiry(${id})">Submit Enquiry →</button>
      <div class="success-msg" id="succ${id}">🎉 Enquiry submitted! Our agent will contact you within 2 hours.</div>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function switchPhoto(idx, mainId) {
  const mainImg = document.getElementById(mainId);
  if(!mainImg) return;
  const propId = mainId.replace('gallery-main-','');
  const prop = properties[parseInt(propId)];
  mainImg.style.opacity = '0';
  setTimeout(() => {
    mainImg.src = prop.photos[idx];
    mainImg.style.opacity = '1';
  }, 200);
  document.querySelectorAll(`[id^="gthumb-${propId}-"]`).forEach((el,i) => {
    el.style.borderColor = i===idx ? '#C9A84C' : 'transparent';
    el.style.opacity = i===idx ? '1' : '0.7';
  });
}

function openEnquiry(id) {
  openModal(id);
  setTimeout(() => {
    const form = document.querySelector('.enquiry-form');
    if(form) form.scrollIntoView({behavior:'smooth'});
  }, 200);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if(e.target === document.getElementById('modalOverlay')) closeModal();
}

function submitEnquiry(id) {
  const fn = document.getElementById('fn'+id)?.value;
  const ph = document.getElementById('ph'+id)?.value;
  if(!fn || !ph) { alert('Please fill in your name and phone number.'); return; }
  const s = document.getElementById('succ'+id);
  if(s) { s.style.display='block'; }
  showToast('✓ Enquiry submitted! Agent will contact you soon.');
}

function toggleFav(el, e) {
  e.stopPropagation();
  el.dataset.fav = el.dataset.fav === '0' ? '1' : '0';
  el.textContent = el.dataset.fav === '1' ? '❤' : '♡';
  el.classList.toggle('active', el.dataset.fav === '1');
  showToast(el.dataset.fav === '1' ? '❤ Added to favourites' : 'Removed from favourites');
}

function showPinInfo(n) {
  const pins = {
    1:{name:'Sunrise Heights',price:'₹22k/mo',loc:'Gomti Nagar'},
    2:{name:'Green Villa',price:'₹45k/mo',loc:'Aliganj'},
    3:{name:'Urban Studio',price:'₹11.5k/mo',loc:'Hazratganj'},
    4:{name:'Royal Residency',price:'₹80k/mo',loc:'Mahanagar'},
    5:{name:'Shree Sai',price:'₹15k/mo',loc:'Vikas Nagar'}
  };
  const p = pins[n];
  showToast(`📍 ${p.name} — ${p.price} · ${p.loc}`);
}

function doSearch() {
  const searchInput = document.getElementById('locInput')?.value.trim().toLowerCase();
  const typeFilter = document.getElementById('typeFilter')?.value;
  const budgetFilter = document.getElementById('budgetFilter')?.value;

  if (!searchInput) {
    showToast('⚠️ Please enter a location to search');
    return;
  }

  // Filter properties based on search criteria
  let filtered = properties.filter(p => {
    const matchesLocation = p.city.toLowerCase().includes(searchInput) || 
                           p.loc.toLowerCase().includes(searchInput) ||
                           p.state.toLowerCase().includes(searchInput);
    
    const matchesType = typeFilter === 'All Types' || p.category === typeFilter;
    
    let matchesBudget = true;
    if (budgetFilter !== 'Any Budget') {
      const price = parseInt(p.price.toString().replace(/[^0-9]/g, ''));
      if (budgetFilter === 'Under ₹15,000/mo') matchesBudget = price < 15000;
      if (budgetFilter === '₹15k – ₹30k/mo') matchesBudget = price >= 15000 && price <= 30000;
      if (budgetFilter === '₹30k – ₹60k/mo') matchesBudget = price >= 30000 && price <= 60000;
      if (budgetFilter === 'Above ₹60,000/mo') matchesBudget = price > 60000;
    }
    
    return matchesLocation && matchesType && matchesBudget;
  });

  if (filtered.length === 0) {
    showToast('⚠️ No properties found in ' + searchInput.toUpperCase() + '. Try another location.');
    return;
  }

  // Show results
  const grid = document.getElementById('propertyGrid');
  grid.innerHTML = filtered.map(p => `
    <div class="property-card fade-in" data-id="${p.id}">
      <div class="property-img ${p.imgClass}" style="background-image:url('${p.photos[0]}');background-size:cover;background-position:center;">
        <div class="prop-badge ${p.badge}">${p.badgeText}</div>
        <div class="prop-fav" onclick="toggleFav(this,event)" data-fav="0">♡</div>
        <div style="position:absolute;bottom:10px;right:10px;background:rgba(0,0,0,0.55);color:#fff;font-size:0.7rem;padding:3px 8px;border-radius:5px;">📷 ${p.photos.length} Photos</div>
      </div>
      <div class="prop-body">
        <div class="prop-price">${p.price}</div>
        <div class="prop-name">${p.name}</div>
        <div class="prop-loc">${p.loc}</div>
        <div class="prop-meta">
          <div class="prop-meta-item"><div class="val">${p.beds}</div><div class="lbl">Beds</div></div>
          <div class="prop-meta-item"><div class="val">${p.baths}</div><div class="lbl">Baths</div></div>
          <div class="prop-meta-item"><div class="val">${p.area}</div><div class="lbl">sq.ft</div></div>
          <div class="prop-meta-item"><div class="val">★${p.rating}</div><div class="lbl">Rating</div></div>
        </div>
        <div class="prop-actions">
          <button class="btn-detail" onclick="openModal(${p.id})">View Details</button>
          <button class="btn-enquire" onclick="openEnquiry(${p.id})">Enquire</button>
        </div>
      </div>
    </div>
  `).join('');
  
  observeFadeIn();
  showToast(`✓ Found ${filtered.length} properties in ${searchInput.toUpperCase()}`);
  setTimeout(() => { document.getElementById('listings').scrollIntoView({behavior:'smooth'}); }, 600);
}

function subscribeNewsletter() {
  const e = document.getElementById('nlEmail');
  if(!e.value || !e.value.includes('@')) { showToast('⚠️ Please enter a valid email'); return; }
  showToast('✓ Subscribed! We\'ll send you the best listings.');
  e.value = '';
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function observeFadeIn() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); } });
  }, {threshold:0.1});
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

renderCards('all');
observeFadeIn();
