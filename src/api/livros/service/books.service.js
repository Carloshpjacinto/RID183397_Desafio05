import booksRepositories from "../repositorie/books.repositories.js";

async function findAllBooksService() {
    
    const allBooks = await booksRepositories.findAllBooksRepository();

    return allBooks;
};

async function findIdBooksService(idBook) {
    
    const idBooks = await booksRepositories.findIdBooksRepository(idBook);

    return idBooks;
};

async function createBooksService(newBook) {

    const books = await booksRepositories.createBooksRepository(newBook);

    return books;
};

async function updateBooksService(idBook, book) {
    
    const updateBook = await booksRepositories.updateBooksRepository(idBook, book);

    return updateBook;
};

async function deleteBooksService(idBook) {
    
    const book = await booksRepositories.deleteBooksRepository(idBook);

    return {message: "Livro deletado com sucesso!"};
};

export default {findAllBooksService, findIdBooksService, createBooksService, updateBooksService, deleteBooksService};
