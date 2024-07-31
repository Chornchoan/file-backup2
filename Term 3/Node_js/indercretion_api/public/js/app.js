
document.addEventListener("DOMContentLoaded", function() {
    const url = "http://localhost:3000";
     // getlistasks
    function lisTasks(){
        axios.get(url + "/tasks")
            .then(response=>{
                console.log(response.data.data);
                getTask(response.data.data);
            })
            .catch(err =>{
                console.log(err);
            }) 
    };
    return lisTasks;

});

