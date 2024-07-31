const tbody = document.querySelector('tbody');
axios.get('https://reqres.in/api/users?page=2')
  .then(response => {
    // Handling the response data
    console.log('Data from Axios (GET):', response.data);
    displayuser(response.data.data)
  })
  .catch(error => {
    // Handling errors
    console.error('Error from Axios (GET):', error.message);
  });
function displayuser(users){
  let tbody = document.querySelector('tbody');
  users.forEach(user => {
    let tr = document.createElement('tr');
    let pro = document.createElement('img');
    let Firstname = document.createElement('td');
    let Lastname = document.createElement('td');
    let email = document.createElement('td');

    
    pro.src = user.avatar;
    pro.classList.add("rounded-circle");
    Firstname.textContent = user.first_name;
    Lastname.textContent = user.last_name;
    email.textContent = user.email;
 
  
    tr.appendChild(pro);
    tr.appendChild(Firstname);
    tr.appendChild(Lastname);
    tr.appendChild(email);
   
    tbody.appendChild(tr);
  });
}