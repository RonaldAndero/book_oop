class UI {

    addBookToList(titleVal, authorVal, isbnVal) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${titleVal}</td>
      <td>${authorVal}</td>
      <td>${isbnVal}</td>
      <td><a href="#" class="indigo darken-4 btn">X</a></td>`;
        list.appendChild(row);
    }

    deleteBook(el){
        if(el.textContent == "X"){
            el.parentElement.parentElement.remove();
        }
    }
}