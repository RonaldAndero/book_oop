class LS {

    getData(titleVal, authorVal, isbnVal) {
        let books;
        if(localStorage.getItem(titleVal, authorVal, isbnVal) === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem(titleVal, authorVal, isbnVal));
        }
        return books;
    }

    setData(titleVal, authorVal, isbnVal, data){
        localStorage.setItem(titleVal, authorVal, isbnVal, JSON.stringify(books));
    }

    addBook(titleVal, authorVal, isbnVal) {
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'))
        }
        books.push(titleVal, authorVal, isbnVal);
        localStorage.setItem('books', JSON.stringify(books));
    }

    removeBook(isbn) {
        let books = this.getData('books');
        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}