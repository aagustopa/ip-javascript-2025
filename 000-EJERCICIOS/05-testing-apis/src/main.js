import './style.css'

const usersTable = document.querySelector('.users');

fetch('https://randomuser.me/api/')
    .then((resp) => resp.json())
    .then((users) => {
        const userData = users.results[0].name;
        creatingUser(userData);
    })
    .catch((error) => {
        console.log(error);
    })

const creatingUser = (userData) => {
    // const usersArray = [...users]
    console.log(userData);
    usersTable.innerHTML = `<h1 class="font-bold">${userData.title} ${userData.first} ${userData.last}</h1>`;
}