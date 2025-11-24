const $form1 = document.querySelector('.form-1');

window.addEventListener('keyup', (event) => {
  if (event.key === 'm' && event.ctrlKey) {
    $form1.reset();
  }
});


//* Videos o audios

const $playBtn = document.querySelector('.play-btn');
const $pauseBtn = document.querySelector('.pause-btn');
const $video = document.querySelector('.sea-video');


$playBtn.addEventListener('click', () => $video.play());
$pauseBtn.addEventListener('click', () => $video.pause());

//* Ventana modal

const $modal1 = document.querySelector('.modal-1');


const $openModalBtn = document.querySelector('.open-modal-button');


$openModalBtn.addEventListener('click', () => {
  $modal1.showModal();

  const $closeModalBtn = document.querySelector('.close-modal-button');

  $closeModalBtn.addEventListener('click', () => $modal1.close());


})
