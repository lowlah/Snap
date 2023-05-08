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

/*
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
    /*document.querySelector("body").removeAttribute("style");

 /* });
});*/


// targetting only a particular
/*const featuresDropdown = document.querySelector('.nav-link.features .dropdown');
  const companyDropdown = document.querySelector('.nav-link.company .dropdown');

  // Add a click event listener to the "Features" dropdown
  document.querySelector('.nav-link.features').addEventListener('click', () => {
    featuresDropdown.classList.toggle('show');
  });

  // Add a click event listener to the "Company" dropdown
  document.querySelector('.nav-link.company').addEventListener('click', () => {
    companyDropdown.classList.toggle('show');
  });*/

  //targets all for click open dropdown
/*const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    const dropdown = navLink.querySelector('.dropdown');
    const arrow = navLink.querySelector('.arrow');
    dropdown.classList.toggle('show');
    arrow.classList.toggle('rotate');
  });
});*/


// method 1 for 2 dropdowns not open
const navLinks = document.querySelectorAll('.nav-link');
let openDropdown = null;
navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    const dropdown = navLink.querySelector('.dropdown');
    const arrow = navLink.querySelector('.arrow');

    // Close any open dropdowns
    if (openDropdown && openDropdown !== dropdown) {
      openDropdown.classList.remove('show');
      openDropdown.classList.remove('rotate');
    }

    // Open the clicked dropdown
    dropdown.classList.toggle('show');
    arrow.classList.toggle('rotate');
    openDropdown = dropdown;
  });
});

  // Close the dropdowns when the user clicks anywhere outside of them
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-link.features') && !event.target.closest('.nav-link.company')) {
      const featuresDropdown = document.querySelector('.nav-link.features .dropdown');
      const companyDropdown = document.querySelector('.nav-link.company .dropdown');
      featuresDropdown.classList.remove('show');
      companyDropdown.classList.remove('show');
    }
  });
  
  

// code 4 that works

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar');

// Open menu when hamburger is clicked
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
});


// Close menu when X is clicked
const closeButton = navMenu.querySelector('.close');
closeButton.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.querySelector('body').removeAttribute('style');
});

// Close menu when clicking outside the menu
document.addEventListener('click', (event) => {
  const target = event.target;
  if (!navMenu.contains(target) && !hamburger.contains(target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.querySelector('body').removeAttribute('style');
  }
});

