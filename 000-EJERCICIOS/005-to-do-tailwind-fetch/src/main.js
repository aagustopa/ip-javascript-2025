import './styles/style.css';

import { nanoid } from 'nanoid';

const baseUrl = 'https://682eebfd746f8ca4a47ef2df.mockapi.io/v1';

let allToDos = [];

// Cargar todas las tareas desde el backend haciendo un GET

async function getAllToDos() {
  const URL = baseUrl + '/to-dos';

  try {
    const resp = await fetch(URL);
    if (!resp.ok) {
      throw new Error('Hubo un error al pedir los datos');
    }

    const toDos = await resp.json();
    allToDos = toDos;
    printToDos(toDos);
    countItemsLeft();
  } catch (error) {
    console.error('❌ Error: ', error.message);
  }
}

getAllToDos();

const $clearCompletedButton = document.querySelector('.clear-completed');
const $toDoList = document.querySelector('.toDo-list');
const $darkModeButton = document.querySelector(
  '[aria-label="dark mode button"]'
);
const $filterCompleted = document.querySelector('.filter-completed');
const $filterNotCompleted = document.querySelector('.filter-not-completed');
const $filterAll = document.querySelector('.filter-all');

// Cazamos el formulario
const $addToDoForm = document.querySelector('.add-todo-form');

// Escuchamos el evento submit
$addToDoForm.addEventListener('submit', handleAddToDoFormSubmit);

// Escuchamos el click del botón de borrar todos los completados
$clearCompletedButton.addEventListener('click', clearCompletedToDos);

// Escuchamos el click del botón de modo oscuro
$darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

function printToDos(arrayToDos = allToDos) {
  // Borrar toda la lista de tareas
  $toDoList.innerHTML = '';

  // Recorro cada tarea de la lista de tareas
  // for (const toDo of allToDos) {
  arrayToDos.forEach((toDo) => {
    const article = createToDoHTML(toDo);
    // Lo meto en el DOM dentro de la sección
    $toDoList.append(article);
  });
}

function createToDoHTML(toDo) {
  // Creo un nuevo "article" por cada uno
  const article = document.createElement('article');

  // Le pongo las clases que necesita el article
  article.className =
    'bg-white py-2 px-4 first:rounded-t flex items-center gap-3  border-b border-b-gray-300 dark:bg-gray-700 dark:border-b-gray-00 dark:text-white';

  // Crear una variable para saber si el input estará checked o no
  const isChecked = toDo.isCompleted ? 'checked' : '';

  // Crear una variable para saber si el check icon estará visible o no
  const isCheckIconVisible = toDo.isCompleted ? '' : 'hidden';

  // Le pongo lo de dentro
  article.innerHTML = `
    <input aria-label="Complete to-do checkbox" id="${toDo.id}" class="complete-checkbox hidden peer" type="checkbox" ${isChecked}>
    <label data-complete="${toDo.id}" for="${toDo.id}" class="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-check-gradient">
      <svg class="${isCheckIconVisible} check-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
    </label>
    <span class="peer-checked:line-through peer-checked:opacity-30">${toDo.task}</span>
    <button data-delete="${toDo.id}"  aria-label="Delete button" type="button" class="ml-auto text-gray-600 dark:text-white cursor-pointer hover:scale-110 hover:rotate-90 transition-transform">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path fill="currentColor" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
      </svg>
    </button>
    `;

  //! OPCION 1 PARA ESCUCHAR LOS EVENTOS DE LOS BOTONES DE LOS TO-DOS
  //* Justo aquí debajo, el article YA TIENE DENTRO el input y el Button que completan y borran el toDo.
  // const completedInput = article.querySelector('.complete-checkbox');
  // completedInput.addEventListener('change',  () => toggleCompleteToDo(toDo.id));

  //* Ahora caza el boton de borrar
  //* Le escuchas el click
  // const deleteButton = article.querySelector('[data-delete-button]');
  // deleteButton.addEventListener('click', () => deleteToDo(toDo.id));

  //! ***************************************************/

  return article;
}

function countItemsLeft() {
  const itemsLeftOutput = document.querySelector('.items-left-output');

  let itemsLeftCount = 0;
  for (const toDo of allToDos) {
    if (toDo.isCompleted === false) {
      itemsLeftCount++;
    }
  }

  itemsLeftOutput.innerText = itemsLeftCount;
}

function handleAddToDoFormSubmit(event) {
  // Paramos el comportamiento por defecto del formulario
  event.preventDefault();

  // Cogemos el valor del usuario
  const newTaskValue = $addToDoForm.addToDoInput.value;

  //! Oye, mejor frena si te lo dejan vacío
  if (isInputEmpty(newTaskValue)) {
    return;
  }

  // Creamos un nuevo TODO que meteremos en el array
  createNewToDo(newTaskValue);

  //! Por aquí deberíamos añadir el toDo a la API

  // Reimprimimos todos los todos
  printToDos();

  // Recalculamos el número de items que faltan por completar
  countItemsLeft();

  // vaciar el input
  // opcion modificar el value a un string vacío
  // $addToDoForm.addToDoInput.value = '';

  // opción resetear el formulario
  $addToDoForm.reset();

  setTodosInLocalStorage();
}

function createNewToDo(newTaskValue) {
  const newToDo = {
    id: nanoid(5),
    task: newTaskValue,
    isCompleted: false,
  };

  allToDos.push(newToDo);
}

function isInputEmpty(value) {
  if (value === '') {
    $addToDoForm.addToDoInput.classList.replace(
      'focus-visible:ring-2',
      'ring-4'
    );
    $addToDoForm.addToDoInput.classList.replace(
      'focus-visible:ring-pink-500',
      'ring-red-500'
    );
    return true;
  } else {
    $addToDoForm.addToDoInput.classList.replace(
      'ring-4',
      'focus-visible:ring-2'
    );
    $addToDoForm.addToDoInput.classList.replace(
      'ring-red-500',
      'focus-visible:ring-pink-500'
    );
    return false;
  }
}

function toggleCompleteToDo(idToComplete) {
  // for (const i in allToDos) {
  //   const toDo = allToDos[i];

  //   if (toDo.id === idToComplete) {
  //     toDo.isCompleted = !toDo.isCompleted;
  //     break;
  //   }
  // }

  const toDoToToggle = allToDos.find((toDo) => toDo.id === idToComplete);
  toDoToToggle.isCompleted = !toDoToToggle.isCompleted;

  printToDos();
  countItemsLeft();

  setTodosInLocalStorage();
}

function deleteToDo(idToDelete) {
  //* Opción 1: Bucle for y splice
  // for (const i in allToDos) {
  //   const toDo = allToDos[i];

  //   if (toDo.id === idToDelete) {
  //     allToDos.splice(i, 1);
  //     break;
  //   }
  // }

  //* Opción 2: FindIndex y splice
  // const indexToDoToDelete = allToDos.findIndex(toDo => toDo.id === idToDelete);
  // allToDos.splice(indexToDoToDelete, 1);

  //* Opción 3: filter 👉 Crea un nuevo array en memoria, es decir el original deja de existir
  allToDos = allToDos.filter((toDo) => {
    return toDo.id !== idToDelete;
  });

  printToDos();
  countItemsLeft();

  setTodosInLocalStorage();
}

function setTodosInLocalStorage() {
  localStorage.setItem('toDos', JSON.stringify(allToDos));
}

function clearCompletedToDos() {
  // for (let i = 0; i < allToDos.length; i++) {
  //   const toDo = allToDos[i];

  //   if (toDo.isCompleted === true) {
  //     allToDos.splice(i, 1);
  //     i--; // Decrementar el índice para evitar saltar un elemento
  //   }
  // }

  //* Opción 2: filter
  allToDos = allToDos.filter((toDo) => toDo.isCompleted === false);

  printToDos();
  countItemsLeft();
  setTodosInLocalStorage();
}

//! OPCION 2 PARA ESCUCHAR LOS EVENTOS DE LOS BOTONES DE LOS TO-DOS
//? Event Delegation

$toDoList.addEventListener('click', (event) => {
  const deleteButton = event.target.closest('button[data-delete]');
  const completeLabel = event.target.closest('label[data-complete]');

  if (deleteButton !== null) {
    const toDoId = deleteButton.dataset.delete;
    deleteToDo(toDoId);
  } else if (completeLabel !== null) {
    const toDoId = completeLabel.dataset.complete;
    toggleCompleteToDo(toDoId);
  }
});

//* Filtros

$filterCompleted.addEventListener('click', () => {
  const filteredCompleted = allToDos.filter((toDo) => {
    return toDo.isCompleted === true;
  });
  printToDos(filteredCompleted);
});

$filterAll.addEventListener('click', () => printToDos());

$filterNotCompleted.addEventListener('click', () => {
  const filteredNotCompleted = allToDos.filter((toDo) => {
    return toDo.isCompleted === false;
  });
  printToDos(filteredNotCompleted);
});
