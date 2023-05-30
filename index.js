let bookId = 1
let fonts = ["'Abril Fatface', cursive", "'Castoro Titling', cursive", "'Gabriela', serif", "'Playball', cursive",
    "'Courier New', Courier, monospace", "Georgia, 'Times New Roman', Times, serif", "Arial, Helvetica, sans-serif"]
let bookColors = ["darkblue", "teal", "purple", "crimson", "cornflowerblue", "darkolivegreen", "firebrick",
    "darkgreen", "darkslateblue", "goldenrod", "palevioletred", "lightcoral", "lightsteelblue", "mediumorchid", "thistle"]
let myLibrary = [];

//Creates a random book cover color
function randomBookColor(){
    let color = Math.floor(Math.random() * bookColors.length); 
    let bookColor = bookColors[color]
    return bookColor
}

//Creates book cover writing color based on cover's color
function writingColor(bookColor){
    let writingColor = ""
    if(bookColor == "darkblue" || bookColor == "teal" || bookColor == "purple" || bookColor == "crimson" 
    || bookColor == "cornflowerblue" || bookColor == "darkolivvegreen" || bookColor == "firebrick" 
    || bookColor == "darkgreen" || bookColor == "darkslateblue" || bookColor == "lightcoral" || bookColor == "mediumorchid"){
        writingColor = "white"
    } else {
        writingColor = "navy"
    }
    return writingColor
}

//Picks a random font for the cover's writing
function randomFont(){
    let font = fonts[Math.floor(Math.random() * fonts.length)];
    return font
}

//Book constructor
function Book(title, author, pages, readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.id = bookId++
    this.bookColor = randomBookColor()
    this.writingColor = writingColor(this.bookColor)
    this.font = randomFont()
}

Book.prototype.info = function(){
    return this.title + " by " + this.author + ", " + this.pages + 
        " pages, " + this.readStatus
}

//Toggles read status of book when clicking on it
function toggleReadStatus(id){
    var element = document.getElementById(`${id}-readStatus`);
    console.log(element)
    element.classList.toggle("mystyle");
    if(element.innerHTML === "Read"){
        element.innerHTML = "Not Read Yet"
    } else if (element.innerHTML === "Not Read Yet"){
        element.innerHTML = "Read"
    }
}

//Shows all the books in the library on cards
function showLibrary(myLibrary){ 
    return myLibrary.map(book => `  
    <div class="book-cards" style="background: ${book.bookColor}; color: ${book.writingColor}" id="${book.id}">
      <div class="book-header" style="font-family: ${book.font}">
        <h3>${book.title}</h3>
      </div>
      <div class="book-info">
        <h4>${book.author}</h4>
        <p>Pages: ${book.pages}</p>
        <p id="${book.id}-readStatus" onclick="toggleReadStatus(${book.id})">${book.readStatus}</p>
      </div> 
      <button class="delete-button" role="button" onclick="deleteBook(${book.id})">Delete</button>
    </div>`)
    .join('');
}

//Takes in input to add a new book to the library, and generates a cover for it
function addBookToLibrary() {
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let readStatus = document.getElementById("readStatus").value
    if(readStatus == "read"){
        readStatus = "Read"
    } else {
        readStatus = "Not Read Yet"
    }
    if (title == ""){
        alert("Please fill out book title")
        return
    } else if (author == ""){
        alert("Please fill out author")
        return
    } else if(!/^\d+$/.test(pages)){
        alert("Please only enter numbers")
        return
    }
    let bookColor = randomBookColor()
    const book = new Book(title, author, pages, readStatus)
    myLibrary.unshift(book)
  console.log(book)
  document.getElementById("title").value = ""
  document.getElementById("author").value = ""
  document.getElementById("pages").value = ""
  document.getElementById("readStatus").value = "read"
  document.getElementById("myLibrary").innerHTML = showLibrary(myLibrary)
}

//Removes a book from the library 
function deleteBook(id){
    let toDelete = myLibrary.findIndex(x => x.id === id)
    console.log(id)
    console.log(toDelete)
    document.getElementById(`${id}`).remove()
    myLibrary.splice(toDelete, 1)
    document.getElementById("myLibrary").innerHTML = showLibrary(myLibrary)

}

//Functions to open and close the "New Book" form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    addBookToLibrary()
    document.getElementById("myForm").style.display = "none";
}


  