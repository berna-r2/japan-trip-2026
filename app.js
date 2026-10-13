const cities=[
{id:"tokyo",name:"Tokyo",jp:"東京",date:"24–27 ottobre",emoji:"🏙️",intro:"Quartieri moderni, templi, negozi specializzati e cucina giapponese.",map:"Tokyo, Japan",days:[
{title:"Giorno 1 · Asakusa e Ueno",area:"Tradizione · passeggiata",items:[
{type:"place",name:"Sensō-ji e Nakamise-dōri",desc:"Tempio storico e strada di bancarelle tradizionali. Meglio arrivare al mattino.",map:"Senso-ji, Tokyo"},
{type:"place",name:"Parco di Ueno",desc:"Grande parco cittadino, musei e passeggiate; scegli le tappe in base agli interessi.",map:"Ueno Park, Tokyo"},
{type:"shop",name:"Kappabashi Kitchen Street",desc:"Negozi di coltelli da cucina, ceramiche e utensili: interessante per oggetti artigianali.",map:"Kappabashi Dougu Street, Tokyo"},
{type:"food",name:"Ameyoko",desc:"Zona vivace con piccoli locali, street food e negozi vicino a Ueno.",map:"Ameyoko, Tokyo"}]},
{title:"Giorno 2 · Harajuku e Shibuya",area:"Moda · cultura pop",items:[
{type:"place",name:"Meiji Jingū",desc:"Santuario immerso nel verde; visita tranquilla al mattino.",map:"Meiji Jingu, Tokyo"},
{type:"shop",name:"Takeshita Street",desc:"Via commerciale di Harajuku con negozi giovani e snack.",map:"Takeshita Street, Tokyo"},
{type:"place",name:"Shibuya Crossing e Hachikō",desc:"I classici punti di riferimento di Shibuya.",map:"Shibuya Scramble Crossing, Tokyo"},
{type:"food",name:"Nonbei Yokocho",desc:"Vicolo con piccoli bar e locali; controlla orari e regole d'accesso.",map:"Nonbei Yokocho, Tokyo"}]},
{title:"Giorno 3 · Akihabara e Tokyo Station",area:"Elettronica · shopping",items:[
{type:"shop",name:"Akihabara Electric Town",desc:"Elettronica, manga, anime e negozi specializzati: scegli i negozi in base a ciò che cerchi.",map:"Akihabara Electric Town, Tokyo"},
{type:"shop",name:"Kanda Myojin",desc:"Santuario vicino ad Akihabara, spesso abbinabile alla visita della zona.",map:"Kanda Myojin, Tokyo"},
{type:"place",name:"Tokyo Station e Marunouchi",desc:"Architettura della stazione, gallerie commerciali e passeggiata serale.",map:"Tokyo Station, Tokyo"},
{type:"food",name:"Tokyo Ramen Street",desc:"Area di ristoranti ramen all'interno del complesso della stazione; verifica orari e code.",map:"Tokyo Ramen Street, Tokyo"}]},
{title:"Giorno 4 · Da definire",area:"Giornata flessibile",items:[
{type:"place",name:"Tokyo Skytree oppure un museo",desc:"Scegli in base al meteo e alle prenotazioni disponibili.",map:"Tokyo Skytree, Tokyo"},
{type:"shop",name:"Ginza",desc:"Grandi magazzini, design e negozi di fascia alta.",map:"Ginza, Tokyo"},
{type:"food",name:"Depachika",desc:"Piani alimentari dei grandi magazzini: ottimi per assaggiare specialità e acquistare snack.",map:"Nihombashi Mitsukoshi, Tokyo"}]}]},
{id:"nikko",name:"Nikko",jp:"日光",date:"28–29 ottobre",emoji:"🌲",intro:"Santuari, foreste e paesaggi montani.",days:[{title:"Visite da organizzare",area:"Natura · patrimonio",items:[{type:"place",name:"Santuario Tōshō-gū",desc:"Complesso famoso per le decorazioni elaborate.",map:"Nikko Toshogu Shrine, Japan"},{type:"place",name:"Ponte Shinkyō",desc:"Ponte storico vicino all'area dei santuari.",map:"Shinkyo Bridge, Nikko"},{type:"food",name:"Yuba",desc:"Specialità locale a base di pellicola di soia; cerca un ristorante in zona.",map:"Yuba restaurant Nikko"}]}]},
{id:"kanazawa",name:"Kanazawa",jp:"金沢",date:"30 ottobre – 1 novembre",emoji:"🏯",intro:"Giardini storici, quartieri tradizionali e artigianato.",days:[{title:"Centro storico",area:"Giardini · tradizione",items:[{type:"place",name:"Giardino Kenrokuen",desc:"Uno dei giardini paesaggistici più celebri del Giappone.",map:"Kenrokuen Garden, Kanazawa"},{type:"place",name:"Castello di Kanazawa",desc:"Area del castello adiacente al giardino.",map:"Kanazawa Castle Park"},{type:"place",name:"Higashi Chaya",desc:"Quartiere storico con case da tè e strade tradizionali.",map:"Higashi Chaya District, Kanazawa"},{type:"shop",name:"Negozi di foglia d'oro e artigianato",desc:"Cerca botteghe locali nel centro storico.",map:"Gold leaf shops Kanazawa"}]}]},
{id:"kyoto",name:"Kyoto",jp:"京都",date:"1–4 novembre",emoji:"⛩️",intro:"Templi, giardini, torii rossi e quartieri storici.",days:[{title:"Est di Kyoto",area:"Templi · vie storiche",items:[{type:"place",name:"Kiyomizu-dera",desc:"Tempio panoramico; considera di arrivare presto.",map:"Kiyomizu-dera, Kyoto"},{type:"place",name:"Ninenzaka e Sannenzaka",desc:"Strade tradizionali con botteghe e sale da tè.",map:"Ninenzaka, Kyoto"},{type:"food",name:"Nishiki Market",desc:"Mercato gastronomico: verifica orari dei singoli banchi.",map:"Nishiki Market, Kyoto"}]},{title:"Fushimi e sud",area:"Torii · santuari",items:[{type:"place",name:"Fushimi Inari Taisha",desc:"Percorso tra i torii; puoi fare una passeggiata breve o salire più a lungo.",map:"Fushimi Inari Taisha, Kyoto"},{type:"food",name:"Punti ristoro della zona",desc:"Prova specialità locali e controlla gli orari dei locali.",map:"Fushimi Inari restaurants Kyoto"}]},{title:"Arashiyama",area:"Bambù · fiume",items:[{type:"place",name:"Bosco di bambù",desc:"Visita presto per ridurre l'affollamento.",map:"Arashiyama Bamboo Forest, Kyoto"},{type:"place",name:"Ponte Togetsukyō",desc:"Passeggiata sul fiume e dintorni.",map:"Togetsukyo Bridge, Kyoto"}]}]},
{id:"hiroshima",name:"Hiroshima",jp:"広島",date:"4–5 novembre",emoji:"🕊️",intro:"Memoria storica e cucina locale.",days:[{title:"5 novembre · mattina",area:"Memoriale della Pace",items:[{type:"place",name:"Atomic Bomb Dome",desc:"Edificio memoriale vicino al parco.",map:"Atomic Bomb Dome, Hiroshima"},{type:"place",name:"Parco del Memoriale della Pace",desc:"Dedica tempo alla visita con calma.",map:"Hiroshima Peace Memorial Park"},{type:"place",name:"Museo del Memoriale della Pace",desc:"Controlla orari e modalità d'ingresso aggiornati.",map:"Hiroshima Peace Memorial Museum"},{type:"food",name:"Okonomiyaki alla maniera di Hiroshima",desc:"Specialità locale; scegli un locale in base alla zona e alle code.",map:"Hiroshima style okonomiyaki"}]}]},
{id:"miyajima",name:"Miyajima",jp:"宮島",date:"5 novembre",emoji:"🌊",intro:"Isola, santuario di Itsukushima e torii sul mare.",days:[{title:"Giornata sull'isola",area:"Santuario · paesaggio",items:[{type:"place",name:"Santuario di Itsukushima",desc:"Verifica orari e condizioni della marea per il panorama del torii.",map:"Itsukushima Shrine, Miyajima"},{type:"place",name:"Omotesandō Shopping Street",desc:"Strada commerciale con souvenir e specialità locali.",map:"Omotesando Shopping Street Miyajima"},{type:"food",name:"Momiji manju e ostriche",desc:"Due specialità dell'isola da cercare nei negozi e ristoranti locali.",map:"Miyajima oyster restaurants"}]}]},
{id:"osaka",name:"Osaka",jp:"大阪",date:"6–8 novembre",emoji:"🍜",intro:"Street food, quartieri vivaci e shopping.",days:[{title:"Namba e Dotonbori",area:"Cibo · luci",items:[{type:"place",name:"Dotonbori",desc:"Canale, insegne luminose e atmosfera serale.",map:"Dotonbori, Osaka"},{type:"food",name:"Takoyaki e okonomiyaki",desc:"Assaggia le specialità di Osaka nei locali della zona.",map:"Takoyaki Dotonbori Osaka"},{type:"shop",name:"Shinsaibashi-suji",desc:"Lunga galleria commerciale coperta.",map:"Shinsaibashi-suji Shopping Street, Osaka"}]},{title:"Cultura e mercati",area:"Mercati · castello",items:[{type:"place",name:"Castello di Osaka",desc:"Parco e castello; verifica gli orari se vuoi entrare.",map:"Osaka Castle"},{type:"food",name:"Mercato Kuromon",desc:"Mercato noto per pesce, prodotti e snack.",map:"Kuromon Ichiba Market, Osaka"},{type:"shop",name:"Den Den Town",desc:"Zona per elettronica, manga e cultura pop.",map:"Den Den Town, Osaka"}]}]}
];
const labels={all:"Tutto",place:"Luoghi",shop:"Negozi",food:"Ristoranti"};
const icons={place:"📍",shop:"🛍️",food:"🍜"};
const LOCAL_KEY="japan2026-local-data-v1";
function readLocalData(){try{return JSON.parse(localStorage.getItem(LOCAL_KEY)||'{"visited":{},"notes":{}}')}catch(e){return {visited:{},notes:{}}}}
function writeLocalData(data){try{localStorage.setItem(LOCAL_KEY,JSON.stringify(data))}catch(e){}}
function activityKey(city,day,item){return [city,day,item].join("::")}
const list=document.getElementById("city-list"),detail=document.getElementById("city-detail");let selected="tokyo",selectedDay=0,filter="all",cityMenuOpen=true;
const cityMenuToggle=document.getElementById("toggle-city-menu");
if(cityMenuToggle)cityMenuToggle.onclick=()=>{cityMenuOpen=!cityMenuOpen;list.hidden=!cityMenuOpen;cityMenuToggle.setAttribute("aria-expanded",String(cityMenuOpen));cityMenuToggle.setAttribute("aria-label",cityMenuOpen?"Chiudi menu delle città":"Apri menu delle città");cityMenuToggle.innerHTML=cityMenuOpen?"⌃ <span>Nascondi</span>":"⌄ <span>Mostra città</span>"};
function renderCities(){list.innerHTML=cities.map(c=>`<button class="city ${c.id===selected?"selected":""}" data-city="${c.id}"><span class="emoji">${c.emoji}</span><b>${c.name}</b><small>${c.date}</small></button>`).join("");list.querySelectorAll("[data-city]").forEach(b=>b.onclick=()=>{selected=b.dataset.city;selectedDay=0;filter="all";renderCities()});list.hidden=!cityMenuOpen;renderDetail()}
function renderDetail(){const c=cities.find(x=>x.id===selected);if(!c)return;const days=c.days||[];if(selectedDay>=days.length)selectedDay=0;const day=days[selectedDay]||{title:"Da completare",area:"",items:[]};
const cityQuery=encodeURIComponent(c.map||c.name+', Japan');
const dayLocations=day.items.map(x=>x.map).filter(Boolean);
const routeUrl=dayLocations.length>1?`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(dayLocations[0])}&destination=${encodeURIComponent(dayLocations[dayLocations.length-1])}${dayLocations.length>2?'&waypoints='+encodeURIComponent(dayLocations.slice(1,-1).join('|')):''}&travelmode=walking`: `https://www.google.com/maps/search/?api=1&query=${cityQuery}`;
detail.innerHTML=`<div class="detail-top"><span class="eyebrow">${c.jp} · ${c.date}</span><h3>${c.emoji} ${c.name}</h3><p>${c.intro}</p><a class="action" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${cityQuery}">Apri mappa della città ↗</a></div>
<div class="map-panel"><div class="map-heading"><div><span class="eyebrow">MAPPA INTERATTIVA</span><h4>${c.name} e dintorni</h4></div><a class="action" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${cityQuery}">Apri Google Maps ↗</a></div><iframe title="Mappa Google Maps di ${c.name}" src="https://maps.google.com/maps?q=${cityQuery}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><p class="small">La mappa incorporata mostra la zona della località. Usa i link dei singoli luoghi per vedere i punti esatti.</p></div>
<div class="day-heading"><span class="eyebrow">ITINERARIO SUGGERITO</span><h4>Organizza la giornata</h4></div>
<div class="day-tabs">${days.map((d,i)=>`<button class="day-tab ${i===selectedDay?"selected":""}" data-day="${i}">${d.title}</button>`).join("")}</div>
<div class="activity-section-head"><strong>Luoghi della giornata</strong><button class="collapse-toggle arrow-only" id="toggle-places" type="button" aria-expanded="true" aria-label="Comprimi elenco luoghi">⌃</button></div><div id="places-content"><div class="filters">${Object.entries(labels).map(([k,v])=>`<button class="filter ${filter===k?"selected":""}" data-filter="${k}">${v}</button>`).join("")}</div>
<div class="activity-list compact-activity-list">${day.items.filter(x=>filter==="all"||x.type===filter).map((x,i)=>`<button type="button" class="activity activity-row" data-open-place="${i}" data-place-name="${x.name.replace(/"/g,'&quot;')}"><span class="activity-icon">${icons[x.type]}</span><span class="activity-row-name">${x.name}</span><span class="row-chevron">›</span></button>`).join("")||'<p class="muted">Nessuna voce in questa categoria per la giornata selezionata.</p>'}</div></div>
<div class="route-launch"><div><b>Segui le tappe della giornata</b><p class="small">Apri il percorso su Google Maps con le tappe in ordine.</p></div><a class="action" target="_blank" rel="noopener" href="${routeUrl}">Apri itinerario ↗</a></div>
<div class="note">L'itinerario è una bozza organizzata per zone. Controlla aperture, prenotazioni e tempi di spostamento prima della visita.</div>`;
detail.querySelectorAll("[data-day]").forEach(b=>b.onclick=()=>{selectedDay=Number(b.dataset.day);renderDetail()});detail.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{filter=b.dataset.filter;renderDetail()});
const placesToggle=detail.querySelector("#toggle-places"),placesContent=detail.querySelector("#places-content");if(placesToggle&&placesContent){placesToggle.onclick=()=>{const open=placesToggle.getAttribute("aria-expanded")!=="true";placesToggle.setAttribute("aria-expanded",String(open));placesContent.hidden=!open;placesToggle.innerHTML=open?"⌃":"⌄";placesToggle.setAttribute("aria-label",open?"Comprimi elenco luoghi":"Espandi elenco luoghi")};}
detail.querySelectorAll("[data-open-place]").forEach((row)=>{row.onclick=()=>{const index=Number(row.dataset.openPlace);const items=day.items.filter(x=>filter==="all"||x.type===filter);const place=items[index];if(place)renderPlaceDetail(c,place)}});

}
function renderPlaceDetail(city,place){
 const query=encodeURIComponent(place.map||`${place.name}, ${city.name}, Japan`);
 const mapsUrl=`https://www.google.com/maps/search/?api=1&query=${query}`;
 const directionsUrl=`https://www.google.com/maps/dir/?api=1&destination=${query}`;
 detail.innerHTML=`<div class="place-detail-page"><button type="button" class="back-to-city" id="back-to-city">‹ Indietro</button><span class="eyebrow">${labels[place.type].toUpperCase()} · ${city.name}</span><h3>${icons[place.type]} ${place.name}</h3><p class="place-description">${place.desc||""}</p><div class="map-panel place-map-panel"><div class="map-heading"><div><span class="eyebrow">MAPPA DEL LUOGO</span><h4>${place.name}</h4></div></div><iframe title="Mappa di ${place.name}" src="https://maps.google.com/maps?q=${query}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div><div class="place-info-card"><span class="eyebrow">INDIRIZZO</span><p>Consulta l'indirizzo completo e aggiornato nella scheda Google Maps del luogo.</p><a class="action" target="_blank" rel="noopener" href="${mapsUrl}">📍 Indirizzo su Google Maps ↗</a></div><div class="place-info-card"><span class="eyebrow">RECENSIONI GOOGLE</span><p>Apri la scheda Google Maps per leggere le recensioni e vedere la valutazione più recente.</p><a class="action" target="_blank" rel="noopener" href="${mapsUrl}#reviews">⭐ Leggi le recensioni ↗</a></div><a class="directions-button" target="_blank" rel="noopener" href="${directionsUrl}">Ottieni indicazioni su Google Maps ↗</a></div>`;
 detail.querySelector("#back-to-city").onclick=()=>renderDetail();
}
function renderProgram(){
 const host=document.getElementById("program-list");if(!host)return;
 const schedule=[
  {date:"24 ottobre",city:"Tokyo",id:"tokyo",title:"Arrivo e primo orientamento",day:0,extra:"Arrivo a Tokyo e sistemazione in hotel."},
  {date:"25 ottobre",city:"Tokyo",id:"tokyo",title:"Asakusa e Ueno",day:0},
  {date:"26 ottobre",city:"Tokyo",id:"tokyo",title:"Harajuku e Shibuya",day:1},
  {date:"27 ottobre",city:"Tokyo",id:"tokyo",title:"Akihabara e Tokyo Station",day:2},
  {date:"28 ottobre",city:"Nikkō",id:"nikko",title:"Trasferimento e visita di Nikkō",day:0,extra:"Treno Shinjuku → Kinugawa Onsen: 10:31–12:36 (orario comunicato)."},
  {date:"29 ottobre",city:"Nikkō → Tokyo",id:"nikko",title:"Visite e rientro a Tokyo",day:0,extra:"Rientro da Tobu-Nikkō da prenotare; scegliere Asakusa oppure Shinjuku."},
  {date:"30 ottobre",city:"Tokyo → Kanazawa",id:"kanazawa",title:"Trasferimento a Kanazawa",day:0,extra:"Hokuriku Shinkansen: prenotazione e orario da confermare."},
  {date:"31 ottobre",city:"Kanazawa",id:"kanazawa",title:"Centro storico e giardini",day:0},
  {date:"1 novembre",city:"Kanazawa → Kyoto",id:"kyoto",title:"Trasferimento a Kyoto",day:0,extra:"Tsuruga → Kyoto indicato 08:37–09:34; cambio di 8 minuti."},
  {date:"2 novembre",city:"Kyoto",id:"kyoto",title:"Kyoto e cooking class",day:0,extra:"Cooking class Manryo alle 10:00: prenotazione effettuata da Silvia."},
  {date:"3 novembre",city:"Kyoto",id:"kyoto",title:"Fushimi Inari e sud di Kyoto",day:1},
  {date:"4 novembre",city:"Kyoto → Hiroshima",id:"hiroshima",title:"Trasferimento a Hiroshima",day:0,extra:"Shinkansen da prenotare; partenza indicativa 09:00–10:00."},
  {date:"5 novembre",city:"Hiroshima → Miyajima",id:"hiroshima",title:"Memoriale della Pace e Miyajima",day:0,extra:"Tour guidato al museo alle 11:15 prenotato da Silvia; poi traghetto per Miyajima, da verificare."},
  {date:"6 novembre",city:"Miyajima → Osaka",id:"osaka",title:"Trasferimento a Osaka",day:0,extra:"Treno per Osaka da prenotare in base all'orario di partenza."},
  {date:"7 novembre",city:"Osaka",id:"osaka",title:"Namba, Dotonbori e street food",day:0},
  {date:"8 novembre",city:"Osaka",id:"osaka",title:"Ultime visite e partenza",day:1}
 ];
 host.innerHTML=schedule.map(s=>{const c=cities.find(x=>x.id===s.id);const d=c?.days?.[s.day];const items=(d?.items||[]).map(x=>x.name);return `<article class="program-day"><div class="program-day-head"><h3>${s.city}</h3><span class="program-date">${s.date}</span></div><p><strong>${s.title}</strong></p>${s.extra?`<p>${s.extra}</p>`:""}${items.length?`<ul>${items.map(n=>`<li>${n}</li>`).join("")}</ul>`:""}<a href="#" class="program-city-link" data-open-city="${s.id}">Apri dettagli e mappa della città ↗</a></article>`}).join("");
 host.querySelectorAll("[data-open-city]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();selected=a.dataset.openCity;selectedDay=0;filter="all";renderCities();document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x.dataset.view==="itinerary"));document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active",x.id==="itinerary"));window.scrollTo({top:0,behavior:"smooth"})}));
}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===b));document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active",x.id===b.dataset.view));window.scrollTo({top:0,behavior:"smooth"})});
renderCities();renderProgram();
function downloadLocalBackup(){
 const payload={app:"Japan 2026",version:1,exportedAt:new Date().toISOString(),data:readLocalData()};
 const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
 const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="japan-2026-backup.json";a.click();URL.revokeObjectURL(url);
 const status=document.getElementById("backup-status");if(status)status.textContent="Backup esportato. Puoi inviare il file a un altro telefono.";
}
document.getElementById("export-data")?.addEventListener("click",downloadLocalBackup);
document.getElementById("import-data")?.addEventListener("change",async e=>{
 const file=e.target.files&&e.target.files[0];if(!file)return;
 const status=document.getElementById("backup-status");
 try{const payload=JSON.parse(await file.text());const d=payload.data||payload;if(!d||typeof d!=="object"||!d.visited||!d.notes)throw new Error("Formato non valido");
 const current=readLocalData();const merged={visited:{...current.visited,...d.visited},notes:{...current.notes,...d.notes}};writeLocalData(merged);if(status)status.textContent="Backup importato. Le note e le visite sono state unite ai dati presenti.";renderDetail();
 }catch(err){if(status)status.textContent="Impossibile importare: seleziona un backup Japan 2026 valido."}
 e.target.value="";
});
