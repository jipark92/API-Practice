const catImage = document.querySelector('.cat-gif');
const dogImage = document.querySelector('.dog-gif');
const randomCatBtns = document.querySelector('.cat-btn');
const randomDogBtns = document.querySelector('.dog-btn');

const getCatImage = () =>{
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=fcqGsOjbhhbSKvdPlFNTyTyvSzYcNfRe&s=cats', {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then((response)=>{
        catImage.src = response.data.images.original.url
    })
    console.log('cat clicked')
}

const getDogImage = () =>{
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=fcqGsOjbhhbSKvdPlFNTyTyvSzYcNfRe&s=dogs', {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then((response)=>{
        dogImage.src = response.data.images.original.url
    })
    console.log('dog clicked')
}

const randomCatFunction = (cats) =>{
    randomCatBtns.addEventListener('click', cats)
}
randomCatFunction(getCatImage);

const randomDogFunction = (dogs) =>{
    randomDogBtns.addEventListener('click', dogs)
}
randomDogFunction(getDogImage);


