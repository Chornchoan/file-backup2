const removePoster = (event) => {
   let parenPoster = event.target.closest('.poster');
   let isConfirm = confirm('Are you sure?')
   if (isConfirm){
    parenPoster.remove()
   }
}


// Main 
let posters = document.querySelectorAll('button')
for (let poster of posters){
    poster.addEventListener('click',removePoster)
}