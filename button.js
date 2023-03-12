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
}