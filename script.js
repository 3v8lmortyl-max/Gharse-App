/* ─────────── SIMPLE CLIENT-SIDE ROUTER ─────────── */
const routes={
  home:()=>"Welcome to <strong>GharSe</strong><br>Find nearby services, rentals, and more.",
  services:loadServices,
  rentals:()=>"Upload or browse rental listings (coming soon).",
  profile:()=>"Manage your info, contact details, and uploads.",
  admin:()=>window.location.href="auth.html"
};

function navigateTo(section){
  location.hash="#/"+section;
  renderRoute();
}
window.addEventListener("hashchange",renderRoute);
window.addEventListener("load",renderRoute);

async function renderRoute(){
  const section=(location.hash.split("/")[1]||"home");
  const outlet=document.getElementById("app");
  const content=routes[section];
  if(!content){outlet.innerHTML="<p>Section not found.</p>";return;}
  outlet.innerHTML=typeof content==="function"
    ? await content()
    : `<p>${content}</p>`;
}

/* ─────────── LOAD SERVICES (JSON MOCK) ─────────── */
async function loadServices(){
  try{
    const res=await fetch("data/services.json");
    const list=await res.json();
    return list.map(cardTemplate).join("");
  }catch(e){
    return "<p>Could not load services.</p>";
  }
}

/* CARD UI */
function cardTemplate(svc){
  return `
    <div class="card">
      <img src="${svc.photos?.[0]||'https://via.placeholder.com/400x250'}" alt="">
      <h3>${svc.title}</h3>
      <div class="meta">${svc.category} • ${svc.location}</div>
      <div class="price">₹${svc.rate??'—'} / visit</div>
      <div class="meta">
        <a href="tel:${svc.contact.phone}">Call</a> |
        <a href="https://wa.me/${svc.contact.whatsapp}">WhatsApp</a>
      </div>
    </div>`;
}

/* ─────────── FUZZY SEARCH (Fuse.js CDN) ─────────── */
let fuse,listCache;
document.getElementById("search").addEventListener("input",async e=>{
  const q=e.target.value.trim();
  if(!listCache){
    const res=await fetch("data/services.json");
    listCache=await res.json();
    fuse=new Fuse(listCache,{keys:["title","category","description"]});
  }
  const results=q?fuse.search(q).map(r=>r.item):listCache;
  document.getElementById("app").innerHTML=results.map(cardTemplate).join("");
});

/* Fuse.js import */
const script=document.createElement("script");
script.src="https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.min.js";
document.head.appendChild(script);
