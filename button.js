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
      //openDropdown.classList.remove('show');
      //openDropdown.classList.remove('rotate');
      openDropdown.classList.toggle('show', false);
      openDropdown.classList.toggle('rotate',false);

    }

    // Open the clicked dropdown
    dropdown.classList.toggle('show');
    arrow.classList.toggle('rotate');
    openDropdown = dropdown;
  });
});

// Close the dropdowns when the user clicks anywhere outside of them
/*document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-link.features') && !event.target.closest('.nav-link.company')) {
    const featuresDropdown = document.querySelector('.nav-link.features .dropdown');
    const companyDropdown = document.querySelector('.nav-link.company .dropdown');
    featuresDropdown.classList.remove('show');
    companyDropdown.classList.remove('show');
  }
});*/

// close dropdowns when the user clicks outside of them
document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-link.features') && !event.target.closest('.nav-link.company')) {
    const featuresDropdown = document.querySelector('.nav-link.features .dropdown');
    const companyDropdown = document.querySelector('.nav-link.company .dropdown');
    const arrows = document.querySelectorAll('.arrow'); // select all arrow icons
    featuresDropdown.classList.remove('show');
    companyDropdown.classList.remove('show');
   // arrows.forEach(arrow => arrow.classList.remove('rotate')); // remove "rotate" class from all arrow icons
    arrows.forEach(arrow => arrow.classList.toggle('rotate', false));

  }
});

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

