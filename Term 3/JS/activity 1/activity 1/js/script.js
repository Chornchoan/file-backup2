//This code used for to delete elements in list
function deleteBooks(event){
    if (event.target.className==='delete'){
        event.target.closest('li').remove();

    }
} 
let booklists = document.querySelector('#book-list ul');
booklists.addEventListener('click',deleteBooks)

//This code used for add elements in 
function addBooks(event){
    event.preventDefault();
    let newBooks = document.getElementById('book').value;
    console.log(newBooks);
    let bookName = document.createElement('span')
    bookName.className='name'
    bookName.textContent = newBooks;

    let btndelete = document.createElement('span')
    btndelete.className='delete';
    btndelete.textContent='delete';

    let li = document.createElement('li')
    li.appendChild(bookName)
    li.appendChild(btndelete )
    booklists.appendChild(li)


}
let addForm = document.querySelector('button')
addForm.addEventListener('click', addBooks);

function search(event){
    let searchbooks = document.querySelector('#search-books input').value;
    let lis = document.querySelectorAll('li')
    lis.forEach(li=>{
        let nameBook = li.firstElementChild.textContent.toLocaleLowerCase();
        if (nameBook.includes(searchbooks.toLocaleLowerCase())){
            li.style.display ='block'
        }else{
            li.style.display='none'
        }
    })
}
let searchBook = document.getElementById('search-books').querySelector('input');
searchBook.addEventListener('keyup',search)