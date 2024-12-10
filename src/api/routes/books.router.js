import bookController from "../livros/controller/books.controller.js"
import { Router } from "express";

const router = Router();

router.get("/", bookController.findAllBooksController);

router.post("/", bookController.createBookController)

export default router
