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
                <div class="card-header bg-info" 
                    <h1 class="text-white">${item.userId}</h1>
                </div>
                <div class="card-body">
                    <p>${item.id}</p>
                    <p>${item.body}</p>
                </div>
            </div>
        `;
    });
}