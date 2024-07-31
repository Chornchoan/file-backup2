// GET URL : https://reqres.in/api/unknown/2 
axios.get('https://reqres.in/api/unknown/2')
  .then(response => {
    // Handling the response data
    console.log('Data from Axios (GET):', response.data);
    displayuser(response.data.data)
  })
  .catch(error => {
    // Handling errors
    console.error('Error from Axios (GET):', error.message);
  });
  function displayuser(data){
    console.log(data);
    const p = document.querySelector("p");
    p.textContent=data.name;
    p.style.background=data.color;
}