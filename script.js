
let album1 = document.getElementById('album1');
let album2 = document.getElementById('album2');
let album3 = document.getElementById('album3');
let album4 = document.getElementById('album4');


async function loadDiscography() {
    try {
  
        const response = await fetch('https://carolinatravanca.github.io/moreJump/DISCOGRAPHY.json');
     
        const obj = await response.json();
        
        console.log(obj);

     
        function populateAlbumData(albumElement, albumData) {
           
            const title = document.createElement('h1');
            title.textContent = albumData.album_name;
            
          
            const image = document.createElement('img');
            image.src = albumData.image_url;
            image.alt = albumData.album_name;
            image.width = 220; 
            image.height = 250; 
          
            const releaseYear = document.createElement('h6');
            releaseYear.textContent = albumData.release_year;
            
           
            albumElement.appendChild(title);
            albumElement.appendChild(image);
            albumElement.appendChild(releaseYear);
        }

    
        populateAlbumData(album1, obj.albums[0]);
        populateAlbumData(album2, obj.albums[1]);
        populateAlbumData(album3, obj.albums[2]);
        populateAlbumData(album4, obj.albums[3]);
    } catch (error) {
        console.error("Error fetching or processing JSON:", error);
    }
}


loadDiscography();


const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector("ul");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll("li").forEach(n => 
    n.addEventListener("click", () => {
        hamburguer.classList.remove("active");
        navMenu.classList.remove("active");
    })
);
