// TODO
import { Book } from "./Book";
import { Library } from "./Library";
import { Author } from "./Author";
import { Publisher } from "./Publisher";

//------create library---------
let libraryA = new Library("LibraryA", "SR")
let libraryB = new Library("LibraryA", "RUPP")

// -------create author------------
let author1 = new Author("John");
let author2 = new Author("Chorn");
let author3 = new Author("Donansy")

//--------create  publisher---------
let publisher1 = new Publisher("John", "SR");
let publisher2 = new Publisher("Donansy", "SR");

// ----- create books ----------
let book1 = new Book("Tom Tav", 1876)
let book2 = new Book("Kolab beylen", 1980)
let book3 = new Book("sophat", 1798)

//------add to  publisher -----
book1.setPublisher(publisher1);
book2.setPublisher(publisher2);

//---- add author to books
book1.addAuthor(author1);
book2.addAuthor(author2);
book2.addAuthor(author3);

// ------ add books to library  -------
libraryA.addBook(book1);
libraryA.addBook(book2,);
libraryB.addBook(book3,);


//--------------consolt the result  ------------------
console.log(libraryA.getBooksFromPublisher(publisher1));
console.log(libraryB.getBooksFromPublisher(publisher2));
