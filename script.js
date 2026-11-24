const WA='8801791091016',FB='https://www.facebook.com/share/19kCM7vGnj/',BK='01404320469';
const bn2en=s=>s.replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d)),dg=s=>bn2en(s).replace(/\D/g,'');
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const T={en:{tag:'Crafted for Beautiful Living',h1:'Handmade pieces for a prettier home',hp:'Gypsum décor, scented candles and tiny wooden miniatures, all made by hand.',shop:'Shop now',all:'All',g:'Gypsum Products',c:'Candles',m:'Miniatures',f:'Fashion',cart:'Your cart',tot:'Total',deliv:'Delivery charge is confirmed in chat.',name:'Your name',phone:'Phone number',addr:'Full delivery address',note:'Note (optional)',cod:'Cash on Delivery',swa:'Order on WhatsApp',sfb:'Order on Messenger',empty:'Your cart is empty. Pick something lovely!',add:'Add to cart',view:'View',from:'From',ask:'Price depends on size',ask2:'Price to confirm',col:'Colour',frag:'Fragrance',wf:'With fragrance',nf:'Without fragrance',soon:'Fashion items are coming soon',foot:'Order by WhatsApp or Facebook Messenger. Pay by bKash or cash on delivery.',added:'Added to cart',fill:'Please fill in your name, a phone number (like 01XXXXXXXXX) and your address.',copied:'Order copied. Paste it in the chat that just opened.',bk:'Send the total to bKash '+BK+', then share the transaction ID in the chat.',em:'Cart is empty.'},
bn:{tag:'সুন্দর জীবনের জন্য হাতে তৈরি',h1:'আপনার ঘর সাজাতে হাতে তৈরি সব পণ্য',hp:'জিপসামের ডেকর, সুগন্ধি মোমবাতি আর ছোট্ট কাঠের মিনিয়েচার, সবকিছু হাতে তৈরি।',shop:'কেনাকাটা করুন',all:'সব',g:'জিপসাম পণ্য',c:'মোমবাতি',m:'মিনিয়েচার',f:'ফ্যাশন',cart:'আপনার কার্ট',tot:'মোট',deliv:'ডেলিভারি চার্জ চ্যাটে জানানো হবে।',name:'আপনার নাম',phone:'ফোন নম্বর',addr:'ডেলিভারির পূর্ণ ঠিকানা',note:'মন্তব্য (ঐচ্ছিক)',cod:'ক্যাশ অন ডেলিভারি',swa:'হোয়াটসঅ্যাপে অর্ডার করুন',sfb:'মেসেঞ্জারে অর্ডার করুন',empty:'কার্ট খালি। পছন্দের কিছু বেছে নিন!',add:'কার্টে যোগ করুন',view:'দেখুন',from:'শুরু',ask:'সাইজ অনুযায়ী দাম',ask2:'দাম জানানো হবে',col:'রঙ',frag:'সুগন্ধি',wf:'সুগন্ধি সহ',nf:'সুগন্ধি ছাড়া',soon:'ফ্যাশন পণ্য শীঘ্রই আসছে',foot:'হোয়াটসঅ্যাপ বা ফেসবুক মেসেঞ্জারে অর্ডার করুন। বিকাশ বা ক্যাশ অন ডেলিভারিতে পেমেন্ট করুন।',added:'কার্টে যোগ হয়েছে',fill:'নাম, ফোন নম্বর (যেমন 01XXXXXXXXX) ও ঠিকানা দিন।',copied:'অর্ডার কপি হয়েছে। খুলে যাওয়া চ্যাটে পেস্ট করুন।',bk:'মোট টাকা বিকাশ '+BK+' নম্বরে পাঠিয়ে ট্রানজেকশন আইডি চ্যাটে জানান।',em:'কার্ট খালি।'}};
const DC=['White|সাদা','Pink|গোলাপি','Blue|নীল','Yellow|হলুদ','Lavender|ল্যাভেন্ডার','Mint|মিন্ট'];
const P=[
{id:'shell',c:'g',n:['Sea Shell','ঝিনুক'],p:70,k:'shell',i:3},
{id:'container',c:'g',n:['Container','কন্টেইনার'],p:200,k:'container',i:4},
{id:'girl',c:'g',n:['Girl Sculpture','মেয়ের ভাস্কর্য'],p:180,k:'girl',i:3},
{id:'vase1',c:'g',n:['Flower Vase 1','ফুলদানি ১'],p:180,k:'vase1',i:3},
{id:'vase2',c:'g',n:['Flower Vase 2','ফুলদানি ২'],p:250,k:'vase2',i:4},
{id:'poddo',c:'g',n:['Poddo','পদ্ম'],p:80,k:'poddo',i:3},
{id:'sun',c:'g',n:['Sunflower','সূর্যমুখী'],p:250,k:'sunflower',i:4},
{id:'girl2',c:'g',n:['Girl Sculpture 2','মেয়ের ভাস্কর্য ২'],p:250,k:'girl2',i:3},
{id:'dessy',c:'c',n:['Dessy Candle','ডেইজি মোমবাতি'],p:[35,45],k:'dessy',i:4},
{id:'poddoc',c:'c',n:['Poddo Candle','পদ্ম মোমবাতি'],p:[220,250],k:'poddoc',i:3},
{id:'shellc',c:'c',n:['Sea Shell Candle','ঝিনুক মোমবাতি'],p:[160,180],k:'shellc',i:2},
{id:'mini',c:'m',n:['Miniature','মিনিয়েচার'],p:0,k:'mini',i:4}];
let L=localStorage.getItem('nn-l')||'en',cat='all',cart=[],sel={};
try{cart=JSON.parse(localStorage.getItem('nn-c')||'[]')}catch(e){}
const t=k=>T[L][k],nm=p=>p.n[L=='en'?0:1],tr=s=>s.split('|')[L=='en'?0:1];
const price=(p,f)=>Array.isArray(p.p)?p.p[f?1:0]:p.p;
const show=(p,f)=>{const v=price(p,f);return v?'৳'+v:t('ask')};
const toast=m=>{const e=$('#toast');e.textContent=m;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),2800)};
function txt(){document.body.classList.toggle('bn',L=='bn');document.documentElement.lang=L=='bn'?'bn':'en';
$$('[data-i]').forEach(e=>e.textContent=t(e.dataset.i));$$('[data-p]').forEach(e=>e.placeholder=t(e.dataset.p));
$('#bk').textContent=t('bk');tabs();grid();cartUI()}
function tabs(){$('#tabs').innerHTML=['all','g','c','m','f'].map(c=>`<button data-c="${c}" class="${c==cat?'on':''}">${t(c)}</button>`).join('');
$$('#tabs button').forEach(b=>b.onclick=()=>{cat=b.dataset.c;tabs();grid()})}
function grid(){const g=$('#grid');
if(cat=='f'){g.innerHTML=`<p class="soon">🌿 ${t('soon')}</p>`;return}
g.innerHTML=P.filter(p=>cat=='all'||p.c==cat).map(p=>`<article class="card" data-id="${p.id}" tabindex="0"><div class="im"><img src="img/${p.k}1.jpg" alt="${nm(p)}" loading="lazy"><img src="img/${p.k}2.jpg" alt="" loading="lazy"></div><h3>${nm(p)}</h3><p class="pr">${Array.isArray(p.p)?t('from')+' ':''}${show(p,0)}</p><span class="btn">${t('view')}</span></article>`).join('');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
$$('.card').forEach((c,i)=>{c.style.transitionDelay=(i%4)*90+'ms';io.observe(c);c.onclick=()=>openQ(c.dataset.id);c.onkeydown=e=>{if(e.key=='Enter')openQ(c.dataset.id)};
c.onpointermove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transitionDelay='0ms';c.style.transform=`perspective(700px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-6px)`};
c.onpointerleave=()=>c.style.transform=''})}
function openQ(id){const p=P.find(x=>x.id==id);sel={id,col:DC[0],f:0,sh:0};
const imgs=[...Array(p.i)].map((_,i)=>`img/${p.k}${i+1}.jpg`);
$('#qn').textContent=nm(p);$('#qm').src=imgs[0];
$('#th').innerHTML=imgs.map((s,i)=>`<img src="${s}" class="${i?'':'on'}" alt="">`).join('');
$$('#th img').forEach(im=>im.onclick=()=>{$('#qm').style.opacity=0;setTimeout(()=>{$('#qm').src=im.src;$('#qm').style.opacity=1},150);$$('#th img').forEach(x=>x.classList.toggle('on',x==im))});
let o='';if(p.c!='m')o+=`<div class="opt"><small>${t('col')}</small><div class="chips" id="cc">${DC.map((c,i)=>`<button data-v="${c}" class="${i?'':'on'}">${tr(c)}</button>`).join('')}</div></div>`;
if(Array.isArray(p.p))o+=`<div class="opt"><small>${t('frag')}</small><div class="chips" id="fc"><button data-v="0" class="on">${t('nf')}</button><button data-v="1">${t('wf')}</button></div></div>`;
$('#qo').innerHTML=o;const up=()=>$('#qp').textContent=show(p,sel.f);up();
$$('#cc button').forEach(b=>b.onclick=()=>{sel.col=b.dataset.v;$$('#cc button').forEach(x=>x.classList.toggle('on',x==b))});
$$('#fc button').forEach(b=>b.onclick=()=>{sel.f=+b.dataset.v;$$('#fc button').forEach(x=>x.classList.toggle('on',x==b));up()});
$('#qa').textContent=t('add');$('#qa').onclick=()=>{const k=p.id+sel.col+sel.f,f=cart.find(x=>x.k==k);f?f.q++:cart.push({k,id:p.id,col:p.c=='m'?'':sel.col,f:sel.f,q:1});save();$('#qv').classList.remove('on');toast('✓ '+t('added'));const b=$('#cnt');b.classList.remove('bump');void b.offsetWidth;b.classList.add('bump')};
$('#qv').classList.add('on')}
$('.main').onpointermove=e=>{const r=e.currentTarget.getBoundingClientRect();$('#qm').style.transformOrigin=`${(e.clientX-r.left)/r.width*100}% ${(e.clientY-r.top)/r.height*100}%`};
const sum=()=>cart.reduce((a,c)=>a+price(P.find(p=>p.id==c.id),c.f)*c.q,0),hasAsk=()=>cart.some(c=>!price(P.find(p=>p.id==c.id),c.f));
function save(){try{localStorage.setItem('nn-c',JSON.stringify(cart))}catch(e){}cartUI()}
function cartUI(){$('#cnt').textContent=cart.reduce((a,c)=>a+c.q,0);
$('#items').innerHTML=cart.length?cart.map((c,i)=>{const p=P.find(x=>x.id==c.id),v=price(p,c.f);return `<div class="li"><img src="img/${p.k}1.jpg" alt=""><div><b>${nm(p)}</b><br><small>${c.col?tr(c.col):''}${Array.isArray(p.p)?' · '+t(c.f?'wf':'nf'):''}</small><br>${v?'৳'+v*c.q:t('ask2')}</div><div class="q"><button data-a="${i}" data-d="-1">−</button><span>${c.q}</span><button data-a="${i}" data-d="1">+</button></div></div>`}).join(''):`<p>${t('empty')}</p>`;
$$('.q button').forEach(b=>b.onclick=()=>{const c=cart[b.dataset.a];c.q+=+b.dataset.d;if(c.q<1)cart.splice(b.dataset.a,1);save()});
$('#tot').textContent='৳'+sum()+(hasAsk()?' + ?':'')}
function msg(){const f=id=>$(id).value.trim();let m='🌿 New order – Nest & Nature\n\n';
cart.forEach((c,i)=>{const p=P.find(x=>x.id==c.id),v=price(p,c.f);m+=`${i+1}) ${p.n[0]}${c.col?' – '+c.col.split('|')[0]:''}${Array.isArray(p.p)?' – '+(c.f?'With':'Without')+' fragrance':''} – ${v?'৳'+v+' × '+c.q+' = ৳'+v*c.q:'price to confirm × '+c.q}\n`});
return m+`\nTotal: ৳${sum()}${hasAsk()?' (+ miniature price to confirm)':''}\nPayment: ${document.querySelector('[name=pm]:checked').value}\n\nName: ${f('#fn')}\nPhone: ${bn2en(f('#fp'))}\nAddress: ${f('#fa')}${f('#fnote')?'\nNote: '+f('#fnote'):''}`}
function ok(){let g=true;['#fn','#fp','#fa'].forEach(s=>{const e=$(s),b=!e.value.trim()||(s=='#fp'&&(dg(e.value).length<10||dg(e.value).length>15));e.classList.remove('bad');if(b){void e.offsetWidth;e.classList.add('bad');g=false}});
if(!cart.length){toast(t('em'));return false}if(!g)toast(t('fill'));return g}
$('#fp').oninput=e=>{e.target.value=bn2en(e.target.value).replace(/[^\d+\s-]/g,'')};
$('#wa').onclick=()=>{if(ok())window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg())}`,'_blank')};
$('#fbm').onclick=()=>{if(!ok())return;const m=msg();try{navigator.clipboard.writeText(m)}catch(e){}window.open(FB,'_blank');toast(t('copied'))};
$$('[name=pm]').forEach(r=>r.onchange=()=>{$('#bk').hidden=document.querySelector('[name=pm]:checked').value!='bKash'});
const cl=()=>{$('#cart').classList.remove('on');$('#shade').classList.remove('on');$('#qv').classList.remove('on')};
$('#cbtn').onclick=()=>{$('#cart').classList.add('on');$('#shade').classList.add('on')};
$$('[data-x]').forEach(b=>b.onclick=cl);$('#shade').onclick=cl;$('#qv').onclick=e=>{if(e.target.id=='qv')cl()};document.addEventListener('keydown',e=>{if(e.key=='Escape')cl()});
$('#lang').onclick=()=>{L=L=='en'?'bn':'en';localStorage.setItem('nn-l',L);txt()};
$('#fwa').href='https://wa.me/'+WA;$('#ffb').href=FB;
const hero=$('.hero');for(let i=0;i<16;i++){const s=document.createElement('i');s.className='sp';s.style.cssText=`--s:${10+Math.random()*20}px;--x:${Math.random()*96}%;--y:${Math.random()*92}%;--d:${2+Math.random()*3}s;animation-delay:${Math.random()*3}s`;hero.append(s)}
hero.onpointermove=e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;$('#hlogo').style.transform=`translate(${x*24}px,${y*18}px) rotate(${x*5}deg)`};
txt();const sp=$('#splash'),hide=()=>sp.classList.add('off');setTimeout(hide,2200);sp.onclick=hide;
