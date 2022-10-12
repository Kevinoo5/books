const formSubmit = document.querySelector("#submit-book")
const inputTitle = document.querySelector("#title")
const inputAuthor = document.querySelector("#author")
const inputISBN = document.querySelector("#isbn")
const table = document.querySelector("table")


formSubmit.addEventListener("click", addBook)


function addBook(){
    let newRow = table.insertRow()
    for (let i = 0; i < 4; i++){
        const inputs = [inputTitle.value, inputAuthor.value, inputISBN.value]
        let td = document.createElement("td")
        td.appendChild(document.createTextNode(inputs[i]))
        if (i === 3) {
            const a = document.createElement("a")
            td = document.createElement("td")
            a.appendChild(document.createTextNode("X"))
            a.className = "blue-text text-darken-2"
            a.setAttribute("href", "#")
            td.appendChild(a)
        }
        newRow.appendChild(td)
    }
}
