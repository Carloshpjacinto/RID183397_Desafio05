import bookService from "../service/books.service.js"

async function findAllBooksController(req, res) {
    
    try{

        const books = await bookService.findAllBooksService();

        res.send(books);

    }catch(e){

        res.status(404).send(message)
    }
}

async function createBookController(req, res) {

    try{

        const book = req.body;

        const idBook = req.params.id

        const response = await bookService.updateBookService(book, idBook);

        res.send(response)

    }catch(e){

        res.status(400).send(e.message)
    }
}

async function updateBookController(req, res) {
    
    const newBook = req.body;

    try{

        const book = await bookService.createBookService(newBook);

        res.status(201).send(book)

    }catch(e){

        res.status(400).send(e.message)
    }
}

async function deleteBookController(req, res) {
    
    try{

        const idBook = req.params.id;

        await bookService.deleteBookService(idBook)
    
        res.status(200)

    }catch(e){

        res.status(400).send(e.message)
    }
}

export default {findAllBooksController, createBookController, updateBookController, deleteBookController}
