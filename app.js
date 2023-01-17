ui = new UI();
ls = new LS();

const form = document.querySelector('form')
form.addEventListener('submit', addBookToList);
const tabel = document.querySelector('tbody')
tabel.addEventListener('click', deleteBook);

document.addEventListener('DOMContentLoaded',UI.displayBooks);

function addBookToList(e) {
    const titleVal = title.value
    const authorVal = author.value
    const isbnVal = isbn.value
    ui.addBookToList(titleVal, authorVal, isbnVal);
    ls.addBook(titleVal, authorVal, isbnVal);
    e.preventDefault();
}

function deleteBook(e) {
    ui.deleteBook(e.target);
    ls.removeBook(e.target);
}