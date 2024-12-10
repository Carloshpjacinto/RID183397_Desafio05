import bookRepositories from "../repositorie/books.repositories.js"

async function findAllBooksService() {
    
    const allBooks = await bookRepositories.findAllBooksRepository()

    return allBooks
}

async function createBookService(newBook) {

    const books = await bookRepositories.createBookRepository(newBook)

    return books
}

export default {findAllBooksService, createBookService}