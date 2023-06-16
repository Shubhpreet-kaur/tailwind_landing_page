// hamburger is btn 
const btn=document.getElementById('menu-btn');
// menu hmra links ka aa jo bhi ->
const nav=document.getElementById('menu');
btn.addEventListener('click',()=>{
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})
