function setBook() {
   if (btninput.value === ""){
    return alert("Please enter a book")
   }
   let unitqueId = localStorage.getItem("id")
   if (unitqueId === null){
        unitqueId = 1;
        localStorage.setItem("id",JSON.stringify(unitqueId));
   }else{
    unitqueId = parseInt(unitqueId)+1
    localStorage.setItem("id",JSON.stringify(unitqueId))
   }
    let book = {
        id: unitqueId,
        title: btninput.value,
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

    window.location.reload();
}

function btndeleteBook(e){
    let id = e.target.closest('tr').firstElementChild.textContent;
    books.filter(book => {
        
    });
    // books.splice(id-1, 1);
    localStorage.setItem('books', JSON.stringify(books));
    // window.location.reload();
}
const btnUpdate = document.getElementById("update");
btnUpdate.addEventListener("click", upDate)
function changeToEdit (e){
    btnAdd.setAttribute("class", "hide");
    btnUpdate.setAttribute("class", "")
}
function upDate(e){
    console.log("hi");
}

function getbooks() {
    for (let book of books) {
        let tr = document.createElement('tr');
        let tdId = document.createElement('td');
        let tdTitle = document.createElement('td');
        let tdAction = document.createElement('td');

        let btndelete = document.createElement('button')
        btndelete.classList.add('delete')
        btndelete.textContent="Delete"

        let btnEdit = document.createElement('button');
        btnEdit.classList.add('edit');
        btnEdit.textContent="Edit";
        // btnEdit.addEventListener('click', changeToEdit)

        tr.appendChild(tdId)
        tr.appendChild(tdTitle)
        tr.appendChild(tdAction)
        tdAction.appendChild(btnEdit)
        tdAction.appendChild(btndelete)

        tdId.textContent = book.id;
        tdTitle.textContent = book.title;
        // tdAction.textContent

        tbody.appendChild(tr)
    }

}
const btnAdd = document.querySelector("#add");
const btninput = document.querySelector('input');
const tbody = document.querySelector('tbody')
let books = [];

let qeryData = localStorage.getItem('books');
if (qeryData !== null) {
    books = JSON.parse(qeryData)
}
btnAdd.addEventListener('click', setBook)

getbooks();
// localStorage.clear()

let btnDelete = document.querySelectorAll('.delete');
for (let btnDeletes of btnDelete){
    btnDeletes.addEventListener('click', btndeleteBook)
}
let btnEdits = document.querySelectorAll('.edit');
for (let btnEdit of btnEdits){
    btnEdit.addEventListener('click', changeToEdit)
}

// localStorage.clear()