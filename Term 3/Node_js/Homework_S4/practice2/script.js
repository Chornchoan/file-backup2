const btn = document.querySelector('button');
function containData(data) {
  axios.get('https://reqres.in/api/users?page=2')
    .then(response => {
      console.log('Data from Axios (GET):', response.data);
      displayuser(response.data)
    })
    .catch(error => {
      console.error('Error from Axios (GET):', error.message);
    });
}
function displayuser(data) {
  const body = document.querySelector('body');
  for (let i = 0; i < data.data.length; i++) {
    let ul = document.createElement('ul');
    ul.style.border = '1px solid black';
    let lastName = document.createElement('li');
    lastName.textContent = data.data[i].last_name;
    let listEmail = document.createElement('li');
    listEmail.textContent = data.data[i].email;

    ul.appendChild(listEmail);
    ul.appendChild(lastName);
    body.appendChild(ul);
  }
}
btn.addEventListener("click", containData);

