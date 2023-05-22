let myLibrary = [
    {
        title: "Memoirs of a Geisha",
        author: "Arthur Golden",
        pages: 275,
        readStatus: "read"
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        pages: 157,
        readStatus: "Not read"
    }

];

function Book(title, author, pages, readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

Book.prototype.info = function() {
    return this.title + " by " + this.author + ", " + this.pages + 
        " pages, " + this.readStatus
}

const book1 = new Book("LOTR", "JRR Tolkein", 750, "read")
myLibrary.push(book1)

// console.log(book1.info())

// let text = ""
// document.getElementById("myLibrary").innerHTML = text

function showLibrary(myLibrary){
    return "<div class=\"book-cards\">" + myLibrary.map(book => `
    <div>
      <div class="book-header">
        <h3>${book.title}</h3>
      </div>
      <div class="book-info">
        <h4>${book.author}</h4>
        <p>${book.pages}</p>
      </div> 
      <button class="info-button">+ info</button>
    </div>`).join('') + "</div>";
}

document.getElementById("myLibrary").innerHTML = showLibrary(myLibrary)

function addBookToLibrary() {
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let readStatus = document.getElementById("readStatus").value
    const book = new Book(title, author, pages, readStatus)
    myLibrary.push(book)
  console.log(book)
  document.getElementById("title").value = ""
  document.getElementById("author").value = ""
  document.getElementById("pages").value = ""
  document.getElementById("readStatus").value = "read"
  document.getElementById("myLibrary").innerHTML = showLibrary(myLibrary)
}