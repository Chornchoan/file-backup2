const URL = 'https://api.example.com';
function getTodo(res) {
   // TODO
   function getTodo() {
      axios.get(URL)
         .then(function (response) {
            // handle success
            console.log(response.data);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   }
   
   getTodo();

}

// TODO : request axios.get(...)...



