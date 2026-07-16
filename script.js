const stops = [
  {
    id:1,
    place:"St. Petersburg, Missouri",
    sub:"On the bank of the Mississippi",
    stage:"Exposition",
    x:160, y:40,
    narration:"Huck lives with the Widow Douglas, who is set on \u201Csivilizing\u201D him with school, manners, and church. Just as he's getting used to a soft bed and clean shirts, his drunken, abusive father Pap reappears, furious about Huck's money, and drags him off to an isolated cabin in the woods.",
    bullets:[
      "The fictional town of St. Petersburg is modeled on Twain's own boyhood home, Hannibal, Missouri, a busy steamboat port in the 1840s.",
      "Missouri was a slave state on the border of free and slave territory, a tension that runs under the whole novel.",
      "The push to \u201Csivilize\u201D Huck reflects real 19th-century reform movements around schooling, temperance, and religion.",
      "Pap Finn's poverty and violence draw on real anxieties about poor white \u201Ctrash\u201D families in the antebellum South."
    ],
    image: "images/1-st-petersburg.jpg",
    credit: "Mark Twain Boyhood Home & Museum, Hannibal, MO — Wikimedia Commons"
  },
  
  {
    id:2,
    place:"Jackson's Island",
    sub:"A wooded island in the river",
    stage:"Inciting Incident",
    x:100, y:300,
    narration:"To escape Pap for good, Huck fakes his own murder and hides out on Jackson's Island. There he stumbles on Miss Watson's slave Jim, who has run off after overhearing he's about to be sold away from his family. The two agree to travel down the river together.",
    bullets:[
      "A real Jackson's Island sits in the Mississippi near Hannibal and was one of Twain's own childhood hideouts.",
      "Jim's flight reflects a real and constant fear among enslaved people: being sold and separated from family.",
      "Helping Jim escape was a federal crime under the Fugitive Slave Act of 1850, which the novel is set just before.",
      "This is Huck's first real act of moral independence, setting up his running conflict between law and conscience."
    ],
    image: "images/2-jacksons-island.jpg",
    credit: "The Mississippi River at Hannibal, Missouri — Wikimedia Commons"
  },
  {
    id:3,
    place:"The Wrecked Steamboat \u2018Walter Scott\u2019",
    sub:"Mid-river, half-sunk on a rock",
    stage:"Rising Action",
    x:210, y:490,
    narration:"Huck talks Jim into exploring a grounded, broken steamboat for a look around. Inside, they overhear armed robbers dividing their loot and plotting murder, and barely slip away with a stolen skiff before the wreck breaks apart.",
    bullets:[
      "Steamboat wrecks were common; shifting sandbars and submerged snags destroyed hundreds of Mississippi vessels a year.",
      "The boat's name mocks novelist Sir Walter Scott, whom Twain blamed for romanticizing Southern chivalry and slavery.",
      "The scene reflects the lawless reputation of isolated stretches of the river, far from any sheriff."
    ],
    image: "images/3-wrecked-steamboat.jpg",
    credit: "The steamboat War Eagle, 1852 — Wikimedia Commons"
  },
  {
    id:4,
    place:"The Grangerford House",
    sub:"A grand house on the Kentucky bank",
    stage:"Rising Action",
    x:90, y:680,
    narration:"A storm separates Huck from Jim, and Huck is taken in by the wealthy, courtly Grangerford family. Their genteel manners mask a bloody, generations-old feud with the neighboring Shepherdsons, which erupts into a massacre Huck barely survives.",
    bullets:[
      "The feud satirizes real Southern \u201Chonor culture\u201D and echoes actual family feuds like the Hatfields and McCoys.",
      "Twain contrasts refined manners with casual violence, one of his sharpest jabs at the idea of Southern \u201Ccivilization.\u201D",
      "The Grangerfords' enslaved household staff appear almost invisibly in the story, showing how normalized slavery was to elite families."
    ],
    image: "images/4-grangerford-house.jpg",
    credit: "Windy Hill Manor, Natchez vicinity, Mississippi — Wikimedia Commons"
  },
  {
    id:5,
    place:"Bricksville",
    sub:"A shabby river town",
    stage:"Rising Action",
    x:220, y:870,
    narration:"Back on the raft, Huck and Jim take on two con men, self-styled royalty calling themselves the Duke and the King. In the run-down town of Bricksville, the pair fleece the locals with a fake stage show before things turn ugly and violent.",
    bullets:[
      "Bricksville reflects real down-at-heel river towns that rose and fell with the steamboat trade.",
      "The Duke and King satirize 19th-century traveling swindlers, patent-medicine peddlers, and sensational theater troupes.",
      "A mob's casual cruelty in this chapter mirrors real vigilante \u201Cjustice\u201D common on the American frontier."
    ],
    image: "images/5-bricksville.jpg",
    credit: "A historic Arkansas courthouse square — Wikimedia Commons"
  },
  {
    id:6,
    place:"The Wilks Family Farm",
    sub:"A riverside town further south",
    stage:"Rising Action",
    x:110, y:1060,
    narration:"The Duke and King impersonate the long-lost English relatives of a recently deceased man, scheming to steal his daughters' inheritance. Huck, growing fond of the Wilks sisters, secretly works to expose the fraud before the family loses everything.",
    bullets:[
      "Inheritance fraud was a real hazard in an era with no photo ID, telegraphed verification, or centralized records.",
      "Huck's decision to protect the sisters over profit marks a real turning point in his moral growth.",
      "The scheme includes selling an enslaved family away \u201Cdown the river,\u201D a genuine and feared practice that tore families apart."
    ],
    image: "images/6-wilks-estate.jpg",
    credit: "A Southern plantation house — Wikimedia Commons"
  },
  {
    id:7,
    place:"The Phelps Farm, Arkansas",
    sub:"A cotton farm downriver",
    stage:"Climax",
    x:200, y:1250,
    narration:"Jim is captured and held at the Phelps farm. Believing that helping a slave escape is a sin, Huck wrestles with his conscience and finally decides, \u201Call right, then, I'll go to Hell,\u201D choosing loyalty to Jim over what he's been taught. Tom Sawyer then turns the rescue into an elaborate, drawn-out game.",
    bullets:[
      "Huck's choice here is the moral climax of the novel: rejecting the racist teachings of his upbringing.",
      "Tom's playacting rescue satirizes romantic adventure fiction, and readers still debate whether it trivializes Jim's real danger.",
      "Arkansas cotton farms like the Phelps place ran on enslaved, and later sharecropped, labor well past the Civil War."
    ],
    image: "images/7-phelps-farm.jpg",
    credit: "A farm cabin, Lake Providence, Louisiana — Wikimedia Commons"
  },
  {
    id:8,
    place:"Downriver, Toward the Territory",
    sub:"The journey's end",
    stage:"Resolution",
    x:150, y:1470,
    narration:"It turns out Jim was freed weeks earlier in his late owner's will. Huck, worn out by everyone's attempts to \u201Csivilize\u201D him, decides he'll \u201Clight out for the Territory\u201D ahead of the rest, rather than settle down for good.",
    bullets:[
      "The ending has long been controversial; some critics feel Jim's freedom is undercut by being granted rather than won by Huck's choice.",
      "\u201CThe Territory\u201D means Indian Territory, roughly present-day Oklahoma, then still outside U.S. state jurisdiction.",
      "Published in 1884\u201385, the novel was written as Reconstruction collapsed and Jim Crow laws were spreading across the South."
    ],
    image: "images/8-the-territory.jpg",
    credit: "Sunset on the Mississippi River — Wikimedia Commons"
  }
];

const stageOrder = ["Exposition","Inciting Incident","Rising Action","Climax","Resolution"];
const badgeColors = {
  "Exposition":"var(--river-mid)",
  "Inciting Incident":"var(--lantern)",
  "Rising Action":"var(--bank)",
  "Climax":"var(--rust)",
  "Resolution":"var(--river-deep)"
};

let currentIndex = -1;
let utterance = null;

function renderMarkers(){
  const g = document.getElementById('markers');
  stops.forEach((s, i)=>{
    const ns = "http://www.w3.org/2000/svg";
    const marker = document.createElementNS(ns,"g");
    marker.setAttribute("class","marker");
    marker.setAttribute("data-index", i);
    marker.setAttribute("tabindex","0");
    marker.setAttribute("role","button");
    marker.setAttribute("aria-label","Open scene: "+s.place);

    const halo = document.createElementNS(ns,"circle");
    halo.setAttribute("class","halo");
    halo.setAttribute("cx", s.x); halo.setAttribute("cy", s.y); halo.setAttribute("r", 24);
    marker.appendChild(halo);

    const dot = document.createElementNS(ns,"circle");
    dot.setAttribute("class","dot");
    dot.setAttribute("cx", s.x); dot.setAttribute("cy", s.y); dot.setAttribute("r", 13);
    marker.appendChild(dot);

    const num = document.createElementNS(ns,"text");
    num.setAttribute("class","num");
    num.setAttribute("x", s.x); num.setAttribute("y", s.y+0.5);
    num.textContent = s.id;
    marker.appendChild(num);

    const label = document.createElementNS(ns,"text");
    label.setAttribute("x", s.x + (s.x>160? -16:16));
    label.setAttribute("y", s.y + 4);
    label.setAttribute("text-anchor", s.x>160? "end":"start");
    label.textContent = s.place.length>22? s.place.slice(0,20)+"\u2026" : s.place;
    marker.appendChild(label);

    marker.addEventListener("click", ()=>openStop(i));
    marker.addEventListener("keypress", (e)=>{ if(e.key==="Enter") openStop(i); });

    g.appendChild(marker);
  });
}

function setActiveMarker(i){
  document.querySelectorAll('.marker').forEach(m=>m.classList.remove('active'));
  const el = document.querySelector('.marker[data-index="'+i+'"]');
  if(el) el.classList.add('active');
}

function setStageline(stage){
  document.querySelectorAll('.stage-tick').forEach(t=>{
    t.classList.toggle('active', t.dataset.stage===stage);
  });
}

function openStop(i){
  currentIndex = i;
  const s = stops[i];
  setActiveMarker(i);
  setStageline(s.stage);
  speechSynthesis.cancel();

  document.getElementById('emptyState').style.display = 'none';
  const content = document.getElementById('journalContent');
  content.style.display = 'block';

  content.innerHTML = `
    <div class="badge-row">
      <span class="stage-badge" style="background:${badgeColors[s.stage]}">${s.stage}</span>
      <span class="stop-index">Stop ${s.id} of ${stops.length}</span>
    </div>
    <h3>${s.place}</h3>
    <p class="place-sub">${s.sub}</p>
    <div class="illustration-frame"><img src="${s.image}" alt="${s.place}" loading="lazy" onerror="this.closest('.illustration-frame').style.display='none'; this.closest('.illustration-frame').nextElementSibling.style.display='none';"></div>
    <p class="img-credit">${s.credit}</p>
    <div class="narration-block">
      <button class="play-btn" id="playBtn" aria-label="Play narration">${iconPlay()}</button>
      <div class="narration-text">
        <p class="narration-label">Narration</p>
        <p>${s.narration}</p>
      </div>
    </div>
    <div class="significance">
      <h4>Historical Significance</h4>
      <ul>${s.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
    </div>
    <div class="panel-nav">
      <button id="prevBtn" ${i===0? "disabled":""}>&larr; Previous stop</button>
      <button id="nextBtn" ${i===stops.length-1? "disabled":""}>Next stop &rarr;</button>
    </div>
  `;

  document.getElementById('playBtn').addEventListener('click', ()=>toggleNarration(s.narration));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if(prevBtn) prevBtn.addEventListener('click', ()=>openStop(i-1));
  if(nextBtn) nextBtn.addEventListener('click', ()=>openStop(i+1));

  document.querySelector('.panel-wrap').scrollIntoView({behavior:"smooth", block:"start"});
}

function toggleNarration(text){
  const btn = document.getElementById('playBtn');
  if(speechSynthesis.speaking){
    speechSynthesis.cancel();
    btn.innerHTML = iconPlay();
    return;
  }
  utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 0.95;
  utterance.onend = ()=>{ btn.innerHTML = iconPlay(); };
  utterance.onerror = ()=>{ btn.innerHTML = iconPlay(); };
  speechSynthesis.speak(utterance);
  btn.innerHTML = iconPause();
}

function iconPlay(){
  return `<svg viewBox="0 0 24 24" fill="none"><path d="M6 4L20 12L6 20V4Z" fill="#23201B"/></svg>`;
}
function iconPause(){
  return `<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="4" width="5" height="16" fill="#23201B"/><rect x="14" y="4" width="5" height="16" fill="#23201B"/></svg>`;
}

renderMarkers();
