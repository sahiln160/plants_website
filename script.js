let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let header=document.querySelector('.header-3');
let scrollTop=document.querySelector('.scroll-top');
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})
window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if(window.scrollY>250){
        header.classList.add('active');
        }
        else{
            header.classList.remove('active');
        }
        if(window.scrollY>350){
           scrollTop.style.display='initial';
            }
            else{
                scrollTop.style.display='none';
            }
}

// slider 
var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay:{
        delay:1000,
        disableOnInteraction:false,
    },
    loop:true,
  });

  
  window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealtop < windowheight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
 window.addEventListener('scroll', reveal1);
function reveal1() {
    var reveals1 = document.querySelectorAll('.reveal1');
    for (var i = 0; i < reveals1.length; i++) {
        var windowheight = window.innerHeight;
        var reveal1top = reveals1[i].getBoundingClientRect().top;
        var reveal1Point = 150;

        if (reveal1top < windowheight - reveal1Point) {
            reveals1[i].classList.add('active1');
        } else {
            reveals1[i].classList.remove('active1');
        }
    }
}

  