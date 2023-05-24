let bookId = 3

let myLibrary = [
    {
        title: "Memoirs of a Geisha",
        author: "Arthur Golden",
        pages: 275,
        readStatus: "read",
        id: 1
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        pages: 157,
        readStatus: "Not read",
        id: 2
    }

];

function Book(title, author, pages, readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.id = bookId++
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
        element.innerHTML = "read"
    }
}

const book1 = new Book("LOTR", "JRR Tolkein", 750, "read")
myLibrary.push(book1)

function showLibrary(myLibrary){ 
    return myLibrary.map(book => `  
    <div class="book-cards" id="${book.id}">
      <div class="book-header">
        <h3>${book.title}</h3>
      </div>
      <div class="book-info">
        <h4>${book.author}</h4>
        <p>${book.pages}</p>
        <p id="${book.id}-readStatus" onclick="toggleReadStatus(${book.id})">${book.readStatus}</p>
       <p>${book.id}</p>
      </div> 
      <button class="delete-button" onclick="deleteBook(${book.id})">Delete</button>
    </div>`)
    .join('');
}

document.getElementById("myLibrary").innerHTML = showLibrary(myLibrary)

function addBookToLibrary() {
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let readStatus = document.getElementById("readStatus").value
    const book = new Book(title, author, pages, readStatus)
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
