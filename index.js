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

function Book(key, title, author, num_pages, read_status) {
    this.key = key
    this.title = title
    this.author = author
    this.num_pages = num_pages
    this.read_status = read_status
}

function addBookToLibrary(key, title, author, num_pages, read_status){
    createBook = new Book(key, title, author, num_pages, read_status)
    myLibrary.push(createBook);
    console.log(createBook.key)
    updateLibrary();
}

const form  = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    let key = myLibrary.length;
    let title = form.elements["title"].value
    let author = form.elements["author"].value
    let num_pages = form.elements["num_pages"].value
    let read_status = form.elements["read_status"].checked

    if (read_status === false){
        read_status = "Not Read"
    } else if (read_status === true){
        read_status = "Read"
    }
    addBookToLibrary(key, title, author, num_pages, read_status);
});

function updateLibrary(){

    let element = document.querySelectorAll(".book")
    let elementArray = [...element];

    elementArray.forEach(existingCard => {
        existingCard.remove()
    });

    for (let i = 0; i < myLibrary.length; i++){

        //Create book div
        const newBook = document.createElement("div");
        newBook.classList.add("book");
        newBook.setAttribute("id", i)

        //Append title to book div
        const bookTitle = document.createElement("h1");
        bookTitle.classList.add("bookTitle");
        const bookTitleNode = document.createTextNode(myLibrary[i].title);
        bookTitle.appendChild(bookTitleNode);
    
        //Append author to book div
        const bookAuthor = document.createElement("h2");
        bookAuthor.classList.add("bookAuthor");
        const bookAuthorNode = document.createTextNode("By: " + myLibrary[i].author);
        bookAuthor.appendChild(bookAuthorNode); 
    
        //Append num_pages to book div
        const bookNumPages = document.createElement("h3");
        bookNumPages.classList.add("bookNumPages");
        const bookNumPagesNode = document.createTextNode(myLibrary[i].num_pages + " pages");
        bookNumPages.appendChild(bookNumPagesNode);
    
        //Append read_status to book div
        const bookReadStatus = document.createElement("button");
        bookReadStatus.classList.add("bookReadStatus");
        const bookReadStatusNode = document.createTextNode(myLibrary[i].read_status);
        bookReadStatus.appendChild(bookReadStatusNode);

        //Append delete button to book div
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteBookButton");
        const deleteButtonNode = document.createTextNode("Remove")
        deleteButton.appendChild(deleteButtonNode)
    
        //Add book to library
        const library = document.querySelector(".library");
        library.appendChild(newBook);
        const book = document.getElementById(i);
    
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookNumPages);
        book.appendChild(bookReadStatus);
        book.appendChild(deleteButton);

    }
        
}

document.addEventListener("click", function(event){

    if (event.target.matches(".deleteBookButton")){
        let removeIndex = event.target.parentNode.id;
        myLibrary.splice(removeIndex, 1);
        updateLibrary();
    }

    if (event.target.matches(".bookReadStatus")){
        let updateIndex = event.target.parentNode.id;
        let currentValue = event.target.innerHTML;

        if (currentValue === "Not Read"){
            myLibrary[updateIndex].read_status = "Read";
        } else if (currentValue === "Read") {
            myLibrary[updateIndex].read_status = "Not Read"
        }
        updateLibrary();
    }
})






