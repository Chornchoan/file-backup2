const axios  = require('axios');
const container = document.querySelector('#container');
function getUsers(res) {
   // TODO
   axios.get('/api/users')
       .then((response)=>{
         const user = response.data;
         container.innerHTML= JSON.stringify(user);

       })
      .catch(error=>{
         console.log(`Error: ${error}`);
      })

}

// TODO with axios.get() ..



