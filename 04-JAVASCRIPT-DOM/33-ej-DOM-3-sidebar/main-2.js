const $openButton = document.querySelector('.toggle');

$openButton.addEventListener('click', openSidebar);

function openSidebar () {  
  const $sidebar2 = document.createElement('nav');
  $sidebar2.className = 'sidebar-2 open-sidebar-2-with-animation';

  $sidebar2.innerHTML = `
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>
    <button type="button" aria-label="Botón de cerrado" class="close-button">
      <i class="bi bi-x"></i>
    </button>
  `; 



  //* Podríamos cazar el botón directamente del sidebar usando el querySelector en el objeto del sidebar en lugar de en document.
  const $closeButton = $sidebar2.querySelector('.close-button');
  
  document.body.append($sidebar2);

  
  $closeButton.addEventListener('click', closeSidebar);
  
}

function closeSidebar () {
  const $sidebar2 = document.querySelector('.sidebar-2');

  $sidebar2.addEventListener('animationend', () => $sidebar2.remove());
  
  $sidebar2.classList.replace('open-sidebar-2-with-animation', 'close-sidebar-2-with-animation');
}


