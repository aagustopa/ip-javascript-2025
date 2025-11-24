// Cazo todo lo que voy a necesitar

const $darkModeBtn = document.querySelector('.dark-mode-button');


$darkModeBtn.addEventListener('click', toggleDarkMode);


let isDarkMode = false;


function toggleDarkMode () {
  document.body.classList.toggle('dark');

  const $title = document.querySelector('.title');
  const $photo = document.querySelector('.photo');

  if(!isDarkMode) {
    $title.innerText = '¡Te voy a chupar la fuerza!';
    $photo.src = './assets/darth-vader.jpeg';
    $darkModeBtn.innerText = '🌞';   
  } else {
    $title.innerText = '¡Que la fuerza te acompañe!';
    $photo.src = './assets/yoda.jpg';
    $darkModeBtn.innerText = '🌙';
  }

  // Darle al interruptor del booleano
  isDarkMode = !isDarkMode;
}