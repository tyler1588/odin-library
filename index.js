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
}

addBookToLibrary("Hello", "Mr.Wolf", 5, "Not Read");
addBookToLibrary("Goodbye", "Mrs.Cadence", 10, "Read");

for (let i = 0; i < myLibrary.length; i++){
    //Create book div
    const newBook = document.createElement("div");
    newBook.classList.add("book"+"-"+[i]);

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
    const bookReadStatus = document.createElement("h3");
    bookReadStatus.classList.add("bookReadStatus");
    const bookReadStatusNode = document.createTextNode(myLibrary[i].read_status);
    bookReadStatus.appendChild(bookReadStatusNode);

    //Add book to library
    const library = document.querySelector(".library");
    library.appendChild(newBook);
    const book = document.querySelector(".book"+"-"+[i]);
    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(bookNumPages);
    book.appendChild(bookReadStatus);
}






