
function getRadioValue(radios) {
    // TODO: get Radio value from radios array
    let result='';
    for (let radio of radios){
        if (radio.checked){
            result=radio.value
            // console.log(radio.value);
        }
    }
    return result
}

function getCheckboxValue(checkboxes) {
    // TODO: get Check box value from checkboxes array
    // Return value example: red, orange, purple
    // remove the last charector by slice(0, -1) 
    resultIncheckbox = '';
    for (let checkbox of checkboxes){
        if(checkbox.checked){
            resultIncheckbox+=checkbox.value +" ,";
        }
    }
    return resultIncheckbox.slice(0,-1)
}


function submitSurvey() {
    let qOne = getRadioValue(questionOne)
    let qTwo = getRadioValue(questionTwo)
    let qThree = getCheckboxValue(questionThree)
    let qFour = getCheckboxValue(questionFour)

    answerOne.textContent = qOne;
    answerTwo.textContent = qTwo;
    answerThree.textContent = qThree;
    answerFour.textContent = qFour;
}

// Main
const questionOne = document.querySelectorAll('input[name="q_1"]');
const questionTwo = document.querySelectorAll('input[name="q_2"]');
const questionThree = document.querySelectorAll('.chef');
const questionFour = document.querySelectorAll('.canteen');

const answerOne = document.querySelector('#quality')
const answerTwo = document.querySelector('#taste')
const answerThree = document.querySelector('#chef')
const answerFour = document.querySelector('#canteen')

const submitButton = document.querySelector('#submit');
const questionContainer = document.querySelector('.form-container');
const resultContainer = document.querySelector('.result-container');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    resultContainer.classList.remove('hide');
    questionContainer.classList.add('hide');
    submitSurvey();
});