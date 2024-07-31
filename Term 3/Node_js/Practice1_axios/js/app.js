const container = document.querySelector(".container");

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Handling the response data
    // console.log('Data from Axios (GET):', response.data);
    displayData(response.data)
  })
  .catch(error => {
    // Handling errors
    console.error('Error from Axios (GET):', error.message);
  });

function displayData(data) {
    console.log(data);
    data.forEach(item => {
        container.innerHTML += `
            <div class="card">
                <div class="card-header" style="background-image: url(https://images.pexels.com/photos/7993052/pexels-photo-7993052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2); 
                                                        background-size: cover; background-position: center;">
                    <h1 class="text-white">${item.userId}</h1>
                </div>
                <div class="card-body bg-gr">
                    <p>${item.id}</p>
                    <p>${item.title}</p>
                </div>
            </div>
        `;
    });
}