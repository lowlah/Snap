/*const toggleButton= document.getElementsByClassName('toggle-button')[0]
const navbarLinks= document.getElementsByClassName('links')[0]
const header=document.getElementsByClassName('sale')

toggleButton.addEventListener('click',() =>{ navbarLinks.classList.toggle('active');
header.classList.toggle('sale')


})*/

const hamburger = document.getElementsByClassName('hamburger')[0];
const navMenu = document.getElementsByClassName('navbar')[0];



hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle('active');
    document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.5)";

    

});


/*function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};*/

const navLink = document.querySelectorAll(".navbar");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.querySelector('body').style.backgroundColor = '';
}

/*
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.navbar');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});


*/