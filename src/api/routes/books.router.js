import bookController from "../livros/controller/books.controller.js";
import { Router } from "express";

const router = Router();

router.get("/", bookController.findAllBooksController);

router.post("/", bookController.createBookController);

router.delete("/:id", bookController.deleteBookController)

export default router
