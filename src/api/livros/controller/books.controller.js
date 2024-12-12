import booksService from "../service/books.service.js";

async function findAllBooksController(req, res) {
    
    try{

        const books = await booksService.findAllBooksService();

        res.send(books);

    }catch(e){

        res.status(404).send(message);
    };
};

async function findIdBooksController(req, res) {
    
    try{

        const idBook = req.params.id;

        const books = await booksService.findIdBooksService(idBook);

        res.send(books);

    }catch(e){

        res.status(404).send(message);
    };
};

async function createBooksController(req, res) {

    const book = req.body;

    try{

        const response = await booksService.createBooksService(book);

        res.send(response);

    }catch(e){

        res.status(400).send(e.message);
    };
};

async function updateBooksController(req, res) {

    try{

        const book = req.body;

        const idBook = req.params.id;

        const response = await booksService.updateBooksService(idBook, book);

        res.send(response);

    }catch(e){

        res.status(400).send(e.message);
    };
};

async function deleteBooksController(req, res) {
    
    try{

        const idBook = req.params.id;

        await booksService.deleteBooksService(idBook);
    
        res.status(200);

    }catch(e){

        res.status(400).send(e.message);
    };
};

export default {findAllBooksController, findIdBooksController, createBooksController, updateBooksController, deleteBooksController};
