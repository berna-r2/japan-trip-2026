const cities = [
 {id:"tokyo",name:"Tokyo",jp:"東京",date:"24–27 ottobre",emoji:"🏙️",intro:"La metropoli tra quartieri moderni, templi e piccole strade tradizionali.",items:["Organizza le visite per quartiere per ridurre gli spostamenti.","Prepara il trasferimento verso Nikko del 28 ottobre.","Verifica indirizzo e date del soggiorno al MyCUBE."],map:"Tokyo, Japan"},
 {id:"nikko",name:"Nikko",jp:"日光",date:"28–29 ottobre",emoji:"🌲",intro:"Santuari, foreste e paesaggi montani a nord di Tokyo.",items:["Valuta il santuario Toshogu e le attrazioni vicine.","Controlla il collegamento ferroviario di ritorno a Tokyo il 29 ottobre.","Verifica la stazione di partenza e l'eventuale prenotazione."],map:"Nikko Toshogu Shrine, Japan"},
 {id:"kanazawa",name:"Kanazawa",jp:"金沢",date:"30 ottobre – 1 novembre",emoji:"🏯",intro:"Giardini storici, case da tè e quartieri tradizionali.",items:["30 ottobre: Tokyo → Kanazawa con Hokuriku Shinkansen.","Valuta Kenrokuen e il quartiere Higashi Chaya.","1 novembre: prepara il trasferimento verso Kyoto via Tsuruga."],map:"Kanazawa, Japan"},
 {id:"kyoto",name:"Kyoto",jp:"京都",date:"1–4 novembre",emoji:"⛩️",intro:"Templi, giardini, torii rossi e quartieri storici.",items:["Raggruppa le visite per zona e controlla gli orari di apertura.","Valuta Fushimi Inari, Higashiyama e Arashiyama secondo le giornate disponibili.","4 novembre: trasferimento a Hiroshima; partenza indicativa 09:00–10:00 da verificare."],map:"Kyoto, Japan"},
 {id:"hiroshima",name:"Hiroshima",jp:"広島",date:"4–5 novembre",emoji:"🕊️",intro:"Una visita importante al Parco e al Museo del Memoriale della Pace.",items:["4 novembre: arrivo da Kyoto e sistemazione.","5 novembre mattina: Atomic Bomb Dome, Parco e Museo del Memoriale della Pace.","Controlla biglietti, orari e percorso per il giorno successivo."],map:"Hiroshima Peace Memorial Park, Japan"},
 {id:"miyajima",name:"Miyajima",jp:"宮島",date:"5 novembre",emoji:"⛩️",intro:"L'isola del grande torii sul mare e del santuario di Itsukushima.",items:["Raggiungi Miyamaguchi in treno e prosegui in traghetto.","Controlla orari del traghetto e marea per il torii.","Conferma dove dormirai la sera del 5 novembre e il trasferimento del 6."],map:"Itsukushima Shrine, Miyajima, Japan"},
 {id:"osaka",name:"Osaka",jp:"大阪",date:"6–8 novembre",emoji:"🍜",intro:"Cibo di strada, canali illuminati e quartieri vivaci.",items:["6 novembre: trasferimento dalla zona di Hiroshima/Miyajima.","Esplora Namba e Dotonbori in base al tempo disponibile.","Verifica indirizzo e check-in del R Hotel Honmachi."],map:"Honmachi, Osaka, Japan"}
];
const tasks = [
 "Verificare prenotazioni Shinkansen e treni espressi",
 "Confermare indirizzi e date degli hotel",
 "Controllare pass ferroviario e biglietti singoli",
 "Salvare le conferme delle prenotazioni sul telefono",
 "Preparare i percorsi delle stazioni su Google Maps",
 "Controllare orari di musei, templi e attrazioni",
 "Preparare una soluzione per pagamenti e contanti",
 "Verificare documenti di viaggio e assicurazione"
];
const cityList = document.getElementById("city-list");
const cityDetail = document.getElementById("city-detail");
let selected = "tokyo";
function renderCities(){
 cityList.innerHTML = cities.map(c=>`<button class="city ${c.id===selected?"selected":""}" data-city="${c.id}"><span class="emoji">${c.emoji}</span><b>${c.name}</b><small>${c.date}</small></button>`).join("");
 cityList.querySelectorAll("[data-city]").forEach(btn=>btn.addEventListener("click",()=>{selected=btn.dataset.city;renderCities();}));
 const c=cities.find(x=>x.id===selected);
 cityDetail.innerHTML=`<span class="eyebrow">${c.jp} · ${c.date}</span><h3>${c.emoji} ${c.name}</h3><p>${c.intro}</p><ul>${c.items.map(x=>`<li>${x}</li>`).join("")}</ul><a class="action" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.map)}" target="_blank" rel="noopener">Apri ${c.name} su Google Maps ↗</a>`;
}
function renderChecklist(){
 const saved=JSON.parse(localStorage.getItem("japanTripChecklist")||"{}");
 const container=document.getElementById("checklist-items");
 container.innerHTML=tasks.map((t,i)=>`<label class="checkrow ${saved[i]?"done":""}"><input type="checkbox" data-task="${i}" ${saved[i]?"checked":""}><span>${t}</span></label>`).join("");
 container.querySelectorAll("input").forEach(input=>input.addEventListener("change",()=>{
  const state=JSON.parse(localStorage.getItem("japanTripChecklist")||"{}");
  state[input.dataset.task]=input.checked;localStorage.setItem("japanTripChecklist",JSON.stringify(state));
  input.closest(".checkrow").classList.toggle("done",input.checked);updateProgress();
 }));
 updateProgress();
}
function updateProgress(){
 const saved=JSON.parse(localStorage.getItem("japanTripChecklist")||"{}");
 const count=tasks.filter((_,i)=>saved[i]).length;
 document.getElementById("progress-text").textContent=`${count}/${tasks.length}`;
 document.getElementById("progress-bar").style.width=`${count/tasks.length*100}%`;
}
document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b===btn));
 document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===btn.dataset.view));
 window.scrollTo({top:0,behavior:"smooth"});
}));
renderCities();renderChecklist();
