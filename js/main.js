import { business } from '../data/business.js';
const root=document.body.dataset.root||'';
const q=(s)=>document.querySelector(s);
q('#year')?.append(new Date().getFullYear());
for(const el of document.querySelectorAll('.booking-link')){el.href=`https://wa.me/${business.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(business.bookingMessage)}`;el.target='_blank';el.rel='noopener';}
for(const [id,val] of [['footer-phone',business.phone],['footer-email',business.email],['contact-phone',business.phone],['contact-email',business.email],['footer-address',business.address],['contact-address',business.address]]){const el=q('#'+id);if(el){el.textContent=val;if(id.includes('phone'))el.href='tel:'+business.phone.replace(/\s/g,'');if(id.includes('email'))el.href='mailto:'+business.email;}}
const toggle=q('.nav-toggle'),nav=q('.primary-nav');
const setNavState=(open)=>{if(!toggle||!nav)return;nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');};
toggle?.addEventListener('click',()=>setNavState(!nav.classList.contains('open')));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){setNavState(false);toggle?.focus();}});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setNavState(false)));
window.addEventListener('resize',()=>{if(window.innerWidth>800)setNavState(false);},{passive:true});
q('#booking-form')?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const text=`Hi ${business.name},\nI'd like to book an appointment.\n\nService: ${d.get('service')||''}\nPreferred date: ${d.get('date')||''}\nPreferred time: ${d.get('time')||''}\nNotes: ${d.get('note')||''}`;window.location.href=`https://wa.me/${business.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(text)}`;});
const filters=document.querySelectorAll('.filter');filters.forEach(b=>b.addEventListener('click',()=>{filters.forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false');});b.classList.add('active');b.setAttribute('aria-pressed','true');document.querySelectorAll('[data-category]').forEach(x=>x.hidden=b.dataset.filter!=='all'&&x.dataset.category!==b.dataset.filter)}));