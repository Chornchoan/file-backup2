let students = [
    {
        id: 1,
        name: "John",
        email: "john@example.com",
        phone: "123-456-3303"
    },
    {
        id: 2,
        name: "Jane",
        email: "jane@example.com",
        phone: "123-456-3304"
    },
    {
        id: 3,
        name: "Mary",
        email: "mary@example.com",
        phone: "123-456-3305"
    },
    {
        id: 4,
        name: "Peter",
        email: "peter@example.com",
        phone: "123-456-3306"
    },
    {
        id: 5,
        name: "Lisa",
        email: "lisa@example.com",
        phone: "123-456-3307"
    }
];

function createRow(student) {
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = student.id;
    row.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = student.email;
    row.appendChild(emailCell);

    const phoneCell = document.createElement('td');
    phoneCell.textContent = student.phone;
    row.appendChild(phoneCell);
    
    const action = document.createElement('td');
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    button1.textContent = 'Details';
    button1.className = 'Details';
    button2.textContent = 'Delete';
    button2.className = 'Delete';
    action.appendChild(button1);
    action.appendChild(button2);
    row.appendChild(action);

    tbody.appendChild(row);
}

function showStudentDetails(student) {
    document.getElementById('studentCard').style.display = 'block';
    const cardId = document.getElementById('cardId');
    const cardName = document.getElementById('cardName');
    const cardEmail = document.getElementById('cardEmail');
    const cardPhone = document.getElementById('cardPhone');

    let tr = student.target.closest("tr");
    cardId.textContent = tr.children[0].textContent;
    cardName.textContent = tr.children[1].textContent;
    cardEmail.textContent = tr.children[2].textContent;
    cardPhone.textContent = tr.children[3].textContent;
}

// Main
const tbody = document.getElementById('studentsTableBody');
for (let student of students) {
    createRow(student);
}
const buttonList = document.getElementsByClassName('Details');
for (let btn of buttonList) {
    btn.addEventListener('click',showStudentDetails);
}