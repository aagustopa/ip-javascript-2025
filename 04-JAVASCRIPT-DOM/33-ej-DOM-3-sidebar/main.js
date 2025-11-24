const $toggleButton = document.querySelector('.toggle');
const $sidebar = document.querySelector('.sidebar');


$toggleButton.addEventListener('click', toggleSidebar);

let isSidebarOpen = false;


// Opción con el div del sidebar YA EN EL DOM
// function toggleSidebar () {
//   const $toggleIcon = document.querySelector('.toggle .icon');
  
//   $sidebar.classList.toggle('open');
 
 
//   if (isSidebarOpen) {
//     $toggleIcon.classList.replace('bi-x', 'bi-list');
//   } else {
//     $toggleIcon.classList.replace('bi-list', 'bi-x');
//   }

//   isSidebarOpen = !isSidebarOpen;
// }


// Opción creando el sidebar desde JavaScript

function toggleSidebar () {


  if (!isSidebarOpen) {
    // crear el div desde aquí
    const $sidebar = document.createElement('div');
    $sidebar.className = 'sidebar open-with-animation';
  
    $sidebar.innerHTML = `
          <nav class="sidebar-menu">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>`;
  
    // Cazo el header para meterlo al final del headaer
  
    const $header = document.querySelector('.main-header');
  
    $header.append($sidebar);
  } else {
    const $sidebar = document.querySelector('.sidebar');

    // Voy a escuchar otro evento que se llama 'animationend'
    $sidebar.addEventListener('animationend', () => $sidebar.remove());
    $sidebar.classList.replace('open-with-animation', 'close-with-animation');
  }

  isSidebarOpen = !isSidebarOpen;
}