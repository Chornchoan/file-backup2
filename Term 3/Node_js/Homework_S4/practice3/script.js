// TODO
// GET URL : https://reqres.in/api/unknown/2
let btn=document.querySelector('button');

function dispayData(datas) {

    axios.get('https://reqres.in/api/unknown/23')
    .then(response => {
        console.log('Data from Axios (GET):', response.data);

    })
    .catch(error => {
        console.error('Error from Axios (GET):', error.message);
        if (error.message=="Request failed with status code 404"){
            let message = document.querySelector('#theText');
            message.textContent="SORRY WE ARE SLEEPING !!";
            message.style.color= 'red';
        }

    });
   
}

btn.addEventListener('click',dispayData) 
