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
    
    const newBook = req.body;

    try{

        const book = await bookService.createBookService(newBook);

        res.status(201).send(book)

    }catch(e){

        res.status(400).send(e.message)
    }
}

export default {findAllBooksController, createBookController}
