const tbody = document.querySelector('tbody');


axios.get('https://reqres.in/api/users?page=2')
  .then(response => {
    // Handling the response data
    console.log('Data from Axios (GET):', response.data);
    displayUser(response.data.data);
  })
  .catch(error => {
    // Handling errors
    console.error('Error from Axios (GET):', error.message);
  });

function displayUser(users) {
  tbody.innerHTML = ''; // Clear existing table rows

  users.forEach(user => {
    let tr = document.createElement('tr');
    let pro = document.createElement('img');
    let firstName = document.createElement('td');
    let lastName = document.createElement('td');
    let email = document.createElement('td');

    pro.src = user.avatar;
    pro.classList.add("rounded-circle");
    firstName.textContent = user.first_name;
    lastName.textContent = user.last_name;
    email.textContent = user.email;

    tr.appendChild(pro);
    tr.appendChild(firstName);
    tr.appendChild(lastName);
    tr.appendChild(email);

    tbody.appendChild(tr);
  });
}
const researcherInput = document.getElementById('researcher-input');
// researcherInput.addEventListener('keyup',searchbar);


researcherInput.addEventListener('input', function() {
  const searchTerm = researcherInput.value.toLowerCase();

  axios.get('https://reqres.in/api/users?page=2')
    .then(response => {
      const userss = response.data.data.filter(user => user.first_name.toLowerCase().includes(searchTerm));
      displayUser(userss);
    })
    .catch(error => {
      console.error('Error from Axios (GET):', error.message);
    });
});

// function searchbar(){
//   let datas = tbody.children;
//   for(let i = 0; i < datas.length; i++){
//     let users = datas[i].children;
//     for(let j = 0; j < users.length; j++){
//       if(j == 1){
//         let user = users[j];
//         let text = researcherInput.value.toLocaleLowerCase();
//         let name = user.textContent.toLocaleLowerCase();
//         if(name.includes(text) == false){
//           datas[i].className = 'd-none';
//         }else{
//           datas[i].className = '';
//         }
//       }
//     }
//   }
  

// }