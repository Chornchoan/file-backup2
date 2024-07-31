
const viewImage = (event) => {

}


// Main 
const posters = document.querySelectorAll('.poster');
const right = document.querySelector('.right');
const viEw = document.querySelector('.view')

const iMage = document.createElement('img')
const tiTile = document.createElement('h1')
const P = document.createElement('p')

for (const poster of posters){
    poster.onclick = () =>{
        iMage.src = poster.firstElementChild.firstElementChild.src;
        tiTile.textContent = poster.firstElementChild.firstElementChild.textContent;
        P.textContent =poster.lastElementChild.lastElementChild.textContent;
        viEw.appendChild(iMage);
        viEw.appendChild(tiTile);
        viEw.appendChild(P);


    }
}
