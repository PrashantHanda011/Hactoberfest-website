var icon = document.getElementById('icon-open');
var icon1= document.getElementById('icon-close');
var nav = document.getElementById('hero-nav')


icon.addEventListener('click',handle);
function handle(){
    nav.style.marginRight='0%'
   }

icon1.addEventListener('click',handle1);
   function handle1(){
       nav.style.marginRight='-60%'
   
  }