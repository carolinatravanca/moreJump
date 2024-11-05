//adicionar await
let album1 = document.getElementById('album1');
let album2 = document.getElementById('album2');

let album3 = document.getElementById('album3');
let album4 = document.getElementById('album4');

fetch('https://carolinatravanca.github.io/moreJump/DISCOGRAPHY.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (obj) {
        console.log(obj);

        album1.innerHTML = `
            <h1>${obj.albums[0].album_name}</h1>
            <img src="${obj.albums[0].image_url}" alt="${obj.albums[0].album_name}">
            <h6>${obj.albums[0].release_year}</h6>
        `;

        album2.innerHTML = `
        <h1>${obj.albums[1].album_name}</h1>
        <img src="${obj.albums[1].image_url}" alt="${obj.albums[1].album_name}">
        <h6>${obj.albums[1].release_year}</h6>
    `;

    album3.innerHTML = `
    <h1>${obj.albums[2].album_name}</h1>
    <img src="${obj.albums[2].image_url}" alt="${obj.albums[2].album_name}">
    <h6>${obj.albums[2].release_year}</h6>
`;

album4.innerHTML = `
<h1>${obj.albums[3].album_name}</h1>
<img src="${obj.albums[3].image_url}" alt="${obj.albums[3].album_name}">
<h6>${obj.albums[3].release_year}</h6>
`;
    })
    .catch(function (error) {
        console.error("Error fetching or processing JSON:", error);
    });


   

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector("ul");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("li").forEach(n => 
    n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}))