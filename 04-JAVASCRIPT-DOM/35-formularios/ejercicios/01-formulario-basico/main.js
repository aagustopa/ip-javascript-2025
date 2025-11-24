 $form = document.querySelector('.main-form');

$form.addEventListener('submit', (e) => {
  e.preventDefault();

  // const $inputEmail = $form.email;
  // const emailValue = $inputEmail.value;


  const emailValue = $form.email.value;
  const passwordValue = $form.password.value;

  const isEmailEmpty = emailValue.trim() === '';
  const isPasswordEmpty = passwordValue.trim() === '';


  if (isEmailEmpty) {
    $form.email.classList.add('input-error');
  } else {
    $form.email.classList.remove('input-error');
  }

  if (isPasswordEmpty) {
    $form.password.classList.add('input-error');

  } else {
    $form.password.classList.remove('input-error');
  }

  if (passwordValue.length < 8) {
    $form.password.classList.add('input-error');
    
  } else {
    $form.password.classList.remove('input-error');
  }


  if (isEmailEmpty || isPasswordEmpty) {
    return;
  }



  //* Enviar datos a backend
  console.log(emailValue);
  console.log(passwordValue);

});


function createErrorSpan (errorMessage = 'Error') {
  const $errorSpan = document.createElement('span');
  $errorSpan.className = 'error-message';
  $errorSpan.innerText = errorMessage;
  return $errorSpan;
}