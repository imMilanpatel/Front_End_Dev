const navbar = document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  if(window.scrollY>60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){
      setTimeout(()=>e.target.classList.add('visible'), i*80);
    }
  });
},{threshold:0.1});
reveals.forEach(r=>obs.observe(r));