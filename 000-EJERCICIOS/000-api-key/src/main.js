import './style.css';

const randomGifUrl = "https://api.giphy.com/v1/gifs/random?api_key=UUPIJioPAPpUTgziyBOs35b6IsiW3Jfd&tag=&rating=g"

// const gifApi = "https://api.giphy.com/v1/gifs/search?api_key=UUPIJioPAPpUTgziyBOs35b6IsiW3Jfd&q=javascript&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
const bodyContent = document.querySelector('.body-container');
// const imageContainer = document.querySelector('img-container')

fetch(randomGifUrl)
    .then((resp) => resp.json())
    .then((gifs) => {
        bodyContent.innerHTML = '';
        const urlGif = gifs.data.images.original.url;
        rendering(urlGif);
    })
    .catch((error) => {
        console.log(error);
    })

function rendering(urlGif) {
    const img = document.createElement('img');
    img.src = urlGif;
    bodyContent.append(img);
    img.classList = 'border';
}

const form = document.querySelector("form");
// const limitText = limitNumbers.options[value.selectedIndex].text;
// console.log(value);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchValue = form.searchUser.value;
    const limitValue = form.limit.value;
    console.log(searchValue);
    console.log(limitValue);
    newSearch(searchValue, limitValue);
})

function newSearch(param, limit) {
    const newParam = `https://api.giphy.com/v1/gifs/search?api_key=UUPIJioPAPpUTgziyBOs35b6IsiW3Jfd&q=${param}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    // const newParam = `https://api.giphy.com/v1/gifs/search?api_key=UUPIJioPAPpUTgziyBOs35b6IsiW3Jfd&q=${param}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    fetch(newParam)
        .then((resp) => resp.json())
        .then((newGifs) => {
            bodyContent.innerHTML = '';

            for (let i = 0; i < newGifs.data.length; i++) {
                const newGifJson = newGifs.data[i].images.original.url;
                console.log(newGifJson);
                rendering(newGifJson)
            }
        }).catch((error) => {
            console.log(error);
        })
}