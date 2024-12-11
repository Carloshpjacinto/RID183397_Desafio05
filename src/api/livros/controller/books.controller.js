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

    const book = req.body;

    try{

        const response = await bookService.createBookService(book);

        res.send(response)

    }catch(e){

        res.status(400).send(e.message)
    }
}

async function updateBookController(req, res) {

    try{

        const book = req.body;

        const idBook = req.params.id;

        const response = await bookService.updateBookService(idBook, book);

        res.send(response)

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
