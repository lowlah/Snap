/*const hamburger = document.getElementsByClassName('hamburger')[0];
const navMenu = document.getElementsByClassName('navbar')[0];

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle('active');
    document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.5)";
});

const navLink = document.querySelectorAll(".navbar");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.querySelector('body').style.backgroundColor = '';
}*/

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
});

const navLinks = document.querySelectorAll('.navbar');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    /*document.body.style.backgroundColor = '';*/
    document.querySelector("body").removeAttribute("style");

  });
});
