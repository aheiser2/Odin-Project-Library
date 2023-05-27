let bookId = 3
let fonts = ["'Abril Fatface', cursive", "'Castoro Titling', cursive", "'Gabriela', serif", "'Playball', cursive"]
let bookColors = ["darkblue", "teal", "purple", "crimson", "cornflowerblue", "darkolivegreen", "firebrick",
    "darkgreen", "darkslateblue", "goldenrod", "lavender", "lightcoral", "lightsteelblue", "mediumorchid", "thistle"]

function writingColor(bookColor){
    let writingColor = ""
    if(bookColor == "darkblue" || bookColor == "purple" || bookColor == "crimson" || bookColor == "darkolivvegreen" ||
    bookColor == "firebrick" || bookColor == "darkgreen" || bookColor == "darkslateblue" || bookColor == "goldenrod"
    || bookColor == "cornflowerblue"){
        writingColor = "white"
    } else {
        writingColor = "darkblue"
    }
    return writingColor
}

function randomBookColor(){
    let color = Math.floor(Math.random() * 14);
    let bookColor = bookColors[color]
    return bookColor
}

function randomFont(){
    let font = fonts[Math.floor(Math.random() * 3)];
    return font
}

let myLibrary = [
    {
        title: "Memoirs of a Geisha",
        author: "Arthur Golden",
        pages: 275,
        readStatus: "Read",
        id: 1,
        bookColor: "pink",
        font: "'Times New Roman', Times, serif"
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        pages: 157,
        readStatus: "Not read",
        id: 2,
        bookColor: "red",
        font: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
    }

];

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

Book.prototype.info = function() {
    return this.title + " by " + this.author + ", " + this.pages + 
        " pages, " + this.readStatus
}


function toggleReadStatus(id){
    var element = document.getElementById(`${id}-readStatus`);
    console.log(element)
    element.classList.toggle("mystyle");
    if(element.innerHTML === "read"){
        element.innerHTML = "Not read"
    } else if (element.innerHTML === "Not read"){
        element.innerHTML = "Read"
    }
}

const book1 = new Book("LOTR", "JRR Tolkein", 750, "Read")
myLibrary.push(book1)

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

document.getElementById("myLibrary").innerHTML = showLibrary(myLibrary)

function addBookToLibrary() {
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let readStatus = document.getElementById("readStatus").value
    let bookColor = randomBookColor()
    const book = new Book(title, author, pages, readStatus, bookColor)
    // document.getElementById(`${book.id}`).style.backgroundColor = bookColor
    myLibrary.unshift(book)
  console.log(book)
  document.getElementById("title").value = ""
  document.getElementById("author").value = ""
  document.getElementById("pages").value = ""
  document.getElementById("readStatus").value = "read"
  document.getElementById("myLibrary").innerHTML = showLibrary(myLibrary)
}

function deleteBook(id){
    let toDelete = myLibrary.findIndex(x => x.id === id)
    console.log(id)
    console.log(toDelete)
    document.getElementById(`${id}`).remove()
    myLibrary.splice(toDelete, 1)
    document.getElementById("myLibrary").innerHTML = showLibrary(myLibrary)

}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    addBookToLibrary()
    document.getElementById("myForm").style.display = "none";
  }


  