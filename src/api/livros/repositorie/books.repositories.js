import { bancoDeDados } from "../../config/database/data-source.js"

bancoDeDados.run(`CREATE TABLE IF NOT EXISTS books (
        id INTEGER NOT NULL,
        titulo TEXT NOT NULL,
        num_paginas INTEGER NOT NULL,
        isbn TEXT NOT NULL,
        editora TEXT NOT NULL
    )`);

function findAllBooksRepository(){

    return new Promise((resolve, reject) => {

        bancoDeDados.all(`SELECT * FROM books`, [], (err, rows) =>{

            if(err){

                reject(err);

            }else{

                resolve(rows);
            }
        })
    })
}
    
function createBookRepository(newBook){

    return new Promise((resolve, reject) => {

        const {id, titulo, num_paginas, isbn, editora} = newBook

        bancoDeDados.run(`INSERT INTO books (id, titulo, num_paginas, isbn, editora) VALUES (?, ?, ?, ?, ?)`,
            [id, titulo, num_paginas, isbn, editora],

            function (err){

                if(err){

                    reject(err);

                }else{

                    resolve(newBook);
                }
            }
        )
    })
}

export default {findAllBooksRepository, createBookRepository}
