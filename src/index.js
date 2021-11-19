console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//function dogImageUrls {
    fetch(imgUrl)
    .then(response => response.json())
    .then(json => console.log(json.message))
//}

// document.createElement("img");

// create 4 new image elements, set their src to the json array values, find id="dog-image-container" and append them
// const imgContainer = document.getElementByID("dog-image-container")

// for (let i = 0; i < message.length; i++) {
//     let image = document.createElement("img");
//     image.src = 
//     imgContainer.appendChild(image)
// }