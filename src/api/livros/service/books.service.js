import bookRepositories from "../repositorie/books.repositories.js"

async function findAllBooksService() {
    
    const allBooks = await bookRepositories.findAllBooksRepository()

    return allBooks
}

async function createBookService(newBook) {

    const books = await bookRepositories.createBookRepository(newBook)

    return books
}

async function updateBookService(idBook, book) {
    
    const updateBook = await bookRepositories.updateBookRepository(idBook, book)

    return updateBook
}

async function deleteBookService(idBook) {
    
    const book = await bookRepositories.deleteBookRepository(idBook)

    return {message: "Livro deletado com sucesso!"}
}

export default {findAllBooksService, createBookService, updateBookService, deleteBookService}
