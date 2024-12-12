import { Router } from 'express';
import bookRouter from "./books.router.js";

const router = Router();

router.use("/livros", bookRouter);

export default router;
