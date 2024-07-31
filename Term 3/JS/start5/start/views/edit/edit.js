// DOMS ELEMENTS  ---------------------------------------------------------
const dom_questions_view = document.querySelector("#questions-view");

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];

// HIDE / SHOW ---------------------------------------------------------
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

//  LOCAL STORAGE ---------------------------------------------------------
function saveQuestions() {
  localStorage.setItem("questions", JSON.stringify(questions));
}

function loadQuestions() {
  let questionsStorage = JSON.parse(localStorage.getItem("questions"));
  if (questionsStorage !== null) {
    questions = questionsStorage;
  }
}

//  EDIT ---------------------------------------------------------

function renderQuestions() {
  // 1 - Remove the card container and create a new one
  dom_questions_view.lastElementChild.remove();
  let questions_container = document.createElement('div');
  questions_container.setAttribute('id','questions-container');
  dom_questions_view.appendChild(questions_container);
  // 2 - For all questions,  create a new div (class : item), and append it the container
  for(let i=0; i < questions.length ; i++){

    let cards = document.createElement('div');
    cards.setAttribute('class', 'card');
  
    let questionsInfo = document.createElement('div');
    questionsInfo.setAttribute('class', 'question-info');
  
    let tittle = document.createElement('span')
    tittle.setAttribute('class', 'title')
    tittle.textContent = questions[i].title
  
    let action = document.createElement('div');
    action.setAttribute('class', 'actions');
  
    let edit = document.createElement('img');
    edit.src = "../../img/edit.svg";
    edit.addEventListener('click',editQuestion)
    
    let deleted = document.createElement('img');
    deleted.src = "../../img/trash.png";
    deleted.addEventListener('click', removeQuestion )
  
    cards.appendChild(questionsInfo)
    questionsInfo.appendChild(tittle);
    cards.appendChild(action);
    action.appendChild(edit);
    action.appendChild(deleted);
    questions_container.appendChild(cards);
  }
 


}

function editQuestion(event) {
  
}

function removeQuestion(event) {
  //  Get index from the dataset
  let index = event.target.parentElement.parentElement.dataset.index;
  console.log(1);
  // TODO Remove question at given index
  questions.splice(index, 1);

  // TODO changes to local storage
  saveQuestions();
  // TODO Update the view
  renderQuestions();
}

// MAIN  ---------------------------------------------------------

loadQuestions();
localStorage.clear()
renderQuestions();
