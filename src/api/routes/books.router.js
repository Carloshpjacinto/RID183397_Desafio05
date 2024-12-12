import booksController from "../livros/controller/books.controller.js";
import { Router } from 'express';

const router = Router();

router.get("/", booksController.findAllBooksController);

router.get("/:id", booksController.findIdBooksController);

router.post("/", booksController.createBooksController);

router.put("/:id", booksController.updateBooksController);

router.delete("/:id", booksController.deleteBooksController);

export default router;
