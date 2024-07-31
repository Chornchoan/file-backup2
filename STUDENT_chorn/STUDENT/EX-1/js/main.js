const createPoster = () => {
   // TODO: Create poster here\
   let posters = document.createElement('div')
   posters.className ="poster";

   let posterImg = document.createElement('div')
   posterImg.className="poster-img";
  

   let img = document.createElement('img')
   img.src= "images/poster.jpg";
   posterImg.appendChild(img)

   let postertext =document.createElement('div')
   
   let H1 = document.createElement('h1')
   H1.textContent="កង្រីជាតិថ្មី"
   postertext.appendChild(H1)

   let P = document.createElement('p')
   P.textContent='រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម និងសៀវភៅរូបភាពសំរាប់កុមារជាដើម។'
   postertext.appendChild(P)
    
   posters.appendChild(posterImg)
   posters.appendChild(postertext)

   return posters

}

// Main code 
const container = document.querySelector('.container');
// TODO:  Call function to create 10 poster here
for(let i=0;i<100;i++){
   const poster=createPoster();
   container.appendChild(poster)
}
