import express from 'express';
import 'dotenv/config';
import routers from "../../routes/index.js";
import cors from 'cors';

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use(routers);

app.listen(port, () => {

    console.log(`Rodando o servidor na porta ${port}`);
});
