
const  clearInput = () => {
   //TODO: Clear data from input field
   firstName.value='';
    lastName.value='';
    skills.value='';
    comment.value='';
    province.value='';
}

const createRow = (event) => {
   // TODO: Create new row with data from input field
   let sex = genders.checked ? genders.value : 'Female';

   let tableRow=document.createElement('tr')
    console.log(tableRow);
    let tdFirstName = document.createElement('td')
    tdFirstName.textContent=firstName.value;
    let tdlastName = document.createElement('td')
    tdlastName.textContent=lastName.value;
    let tdprovince = document.createElement('td')
    tdprovince.textContent=province.value;
    let tdgenders = document.createElement('td')
    tdgenders.textContent=sex;
    let tdskills = document.createElement('td')
    tdskills.textContent=skills.value;
    let tdcomment = document.createElement('td')
    tdcomment.textContent=comment.value;

    tableRow.appendChild(tdFirstName)
    tableRow.appendChild(tdlastName)
    tableRow.appendChild(tdprovince)
    tableRow.appendChild(tdgenders)
    tableRow.appendChild(tdskills)
    tableRow.appendChild(tdcomment)
    tbody.appendChild(tableRow).value;
   
}

// Main
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const province = document.querySelector('#province');
const genders = document.querySelectorAll('input[type="radio"]');
const skills = document.querySelectorAll('.skill');
const comment = document.querySelector('#comment');
const tbody = document.querySelector('tbody');
const btnSubmit = document.querySelector('button');

// TODO: add event listeners to submit button
btnSubmit.addEventListener('click', (e) => {
   e.preventDefault();
   createRow(),clearInput();
   
});
