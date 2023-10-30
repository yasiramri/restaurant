const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.preventDefault();
});
 
mainElement.addEventListener('click', event => {
  if (drawerElement.classList.contains('open')) {
    drawerElement.classList.remove('open');
    event.preventDefault();
  }
});