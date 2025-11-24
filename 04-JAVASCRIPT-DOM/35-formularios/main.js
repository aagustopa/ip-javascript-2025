const $form = document.querySelector('.main-form');
// const $inputName = document.querySelector('#name');

$form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameValue = $form.name.value;
  const emailValue = $form.email.value;
  // const userAge = $form.age.value;
  //* También existe usar valueAsNumber pero...
  //! Ojo con lo quete devuelve si te lo dejan vacío o te pasan texto, porque será NaN
  const ageValue = $form.age.valueAsNumber;

  // if (nameValue.trim() === '' || emailValue.trim() === '' || ageValue.trim() === '') {
  //   console.error('No puedes dejar el campo vacío');
  //   // ponle una clase al input para que se vea roja
  //   return;
  // }

  //* Otros inputs distintos

  const colorValue = $form.color.value;
  const cityValue = $form.city.value; // select
  const acceptValue = $form.accept.checked; // checkbox
  const genderValue = $form.gender.value; // radio
  const noteValue = $form.note.value; // range
  const messageValue = $form.message.value; // textarea

  const photoData = $form.photo.files[0]; // file input

  console.log('nameValue ->', nameValue);
  console.log('emailValue ->', emailValue);
  console.log('ageValue ->', ageValue);
  console.log('colorValue ->', colorValue);
  console.log('cityValue ->', cityValue);
  console.log('acceptValue ->', acceptValue);
  console.log('genderValue ->', genderValue);
  console.log('noteValue ->', noteValue);
  console.log('messageValue ->', messageValue);
  console.log('photoData ->', photoData);

  //* Si quiero saber qué botón ha hecho submit, puedo utilizar event.submitter

  console.log('submitter ->', event.submitter);

  if (event.submitter.name === 'btn-1') {
    console.log('Has pulsado el botón 1');
  } else if (event.submitter.name === 'btn-2') {
    console.log('Has pulsado el botón 2');
  } else if (event.submitter.name === 'btn-3') {
    console.log('Has pulsado el botón 3');
  }
});
