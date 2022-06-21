const modal = document.querySelector(".modal");
const openModal = document.querySelector(".add-book");
const closeModal = document.querySelector(".close-modal");

openModal.addEventListener("click", () => {
    modal.showModal();
})

closeModal.addEventListener("click", () => {
    modal.close();
})

let myLibrary = [];

function Book(title, author, num_pages, read_status) {
    this.title = title
    this.author = author
    this.num_pages = num_pages
    this.read_status = read_status
}

function addBookToLibrary(title, author, num_pages, read_status){
    createBook = new Book(title, author, num_pages, read_status)
    myLibrary.push(createBook);
    updateLibrary();
}

const form  = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    let title = form.elements["title"].value
    let author = form.elements["author"].value
    let num_pages = form.elements["num_pages"].value
    let read_status = form.elements["read_status"].checked

    if (read_status === false){
        read_status = "Not Read"
    } else if (read_status === true){
        read_status = "Read"
    }
    addBookToLibrary(title, author, num_pages, read_status);
});

function updateLibrary(){
    let index = myLibrary.length-1;
        //Create book div
        const newBook = document.createElement("div");
        newBook.classList.add("book"+"-"+[index]);
    
        //Append title to book div
        const bookTitle = document.createElement("h1");
        bookTitle.classList.add("bookTitle");
        const bookTitleNode = document.createTextNode(myLibrary[index].title);
        bookTitle.appendChild(bookTitleNode);
    
        //Append author to book div
        const bookAuthor = document.createElement("h2");
        bookAuthor.classList.add("bookAuthor");
        const bookAuthorNode = document.createTextNode("By: " + myLibrary[index].author);
        bookAuthor.appendChild(bookAuthorNode); 
    
        //Append num_pages to book div
        const bookNumPages = document.createElement("h3");
        bookNumPages.classList.add("bookNumPages");
        const bookNumPagesNode = document.createTextNode(myLibrary[index].num_pages + " pages");
        bookNumPages.appendChild(bookNumPagesNode);
    
        //Append read_status to book div
        const bookReadStatus = document.createElement("button");
        bookReadStatus.classList.add("bookReadStatus");
        const bookReadStatusNode = document.createTextNode(myLibrary[index].read_status);
        bookReadStatus.appendChild(bookReadStatusNode);
    
        //Add book to library
        const library = document.querySelector(".library");
        library.appendChild(newBook);
        const book = document.querySelector(".book"+"-"+[index]);
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookNumPages);
        book.appendChild(bookReadStatus);
}







