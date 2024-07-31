// Start this project 
// and have a look in the 'Console' and the 'Network' tab in chrome
const studentsContainer = document.getElementById("studentsContainer");

function afterStudentRequest(response) {
  // TODO: Display the list of students in the DOM
  // console.log("response from server:");
  // console.log(response);
  // console.log("data of response:");
  // console.log(response.data);
  const data = response.data;
  for (const user of data) {
    studentsContainer.innerHTML  += `
    <li class="list-group-item fs-3">
        ${user.name}<br>
        <span class="fs-4 text-info">${user.nickname}</span><br>
        <span class="fs-6 text-info">${user.class}</span>
      </li>
      `
    
  }
}
// The URL of the data we want to get
const STUDENT_URL = "data/students.json";

// We use Axios library to do a HTTP request to the server
// Request a GET on STUDENT_URL to get the data from the JSON
// Once done the function 'afterStudentRequest' will be called
axios.get(STUDENT_URL).then(afterStudentRequest);
