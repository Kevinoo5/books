const formSubmit = document.querySelector("#submit-book")
const inputTitle = document.querySelector("#title")
const inputAuthor = document.querySelector("#author")
const inputISBN = document.querySelector("#isbn")
const table = document.querySelector("table")

formSubmit.addEventListener("click", addBook)
table.addEventListener("click", deleteBook)
document.addEventListener("DOMContentLoaded", getBookFromLocalStorage)

function addBook(event){
    const row = table.insertRow()

    const cell1 = row.insertCell()
    const cell2 = row.insertCell()
    const cell3 = row.insertCell()
    const cell4 = row.insertCell()

    const cross = document.createElement('a')
    cross.appendChild(document.createTextNode('X'))
    cross.className = 'blue-text text-darken-2'
    cross.setAttribute('href', '#')

    cell1.innerHTML = inputTitle.value
    cell2.innerHTML = inputAuthor.value
    cell3.innerHTML = inputISBN.value
    cell4.appendChild(cross)

    const toLSData = [inputTitle.value, inputAuthor.value, inputISBN.value]
    addBookToLocalStorage(toLSData)
    inputTitle.value = ""
    inputAuthor.value = ""
    inputISBN.value = ""
    event.preventDefault()
}

function deleteBook(event) {
    let selectedBook
    let name = event.target.parentElement.parentElement.children[0].innerText
    let author = event.target.parentElement.parentElement.children[1].innerText
    let ISBN = event.target.parentElement.parentElement.children[2].innerText
    let selectedBookLS = [name, author, ISBN]
    if (event.target.textContent === "X"){
        if (confirm("Are you sure you want to delete this book?")) {
            selectedBook = event.target.parentElement.parentElement.rowIndex
            table.deleteRow(selectedBook)
            deleteBookFromLocalStorage(selectedBookLS)
        }
    }
}

function deleteBookFromLocalStorage(book){
    let books
    if (localStorage.getItem("books") === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }
    books.forEach((bookLS, bookIndex) => {
        console.log(bookIndex)
        const sbookLS = JSON.stringify(bookLS)
        const sbook = JSON.stringify(book)
        if(sbookLS === sbook){
            books.splice(bookIndex, 1)
        }
    })
    console.log(books)
    localStorage.setItem('books', JSON.stringify(books))
}

function addBookToLocalStorage(book){
    let books
    if (localStorage.getItem("books") === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }
    console.log(books)
    books.push(book)
    localStorage.setItem("books", JSON.stringify(books))
}

function getBookFromLocalStorage(){
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((book) => {
        console.log(books)
        console.log(book[3])
        const getRow = table.insertRow()

        const getCell1 = getRow.insertCell()
        const getCell2 = getRow.insertCell()
        const getCell3 = getRow.insertCell()
        const getCell4 = getRow.insertCell()

        const getCross = document.createElement('a')
        getCross.appendChild(document.createTextNode('X'))
        getCross.className = 'blue-text text-darken-2'
        getCross.setAttribute('href', '#')

        getCell1.innerHTML = book[0].toString()
        getCell2.innerHTML = book[1].toString()
        getCell3.innerHTML = book[2].toString()
        getCell4.appendChild(getCross)
    })
}