import { database } from "../../config/database/data-source.js"

database.run(`CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        num_paginas INTEGER NOT NULL,
        isbn TEXT NOT NULL,
        editora TEXT NOT NULL
    )`);

function findAllBooksRepository(){

    return new Promise((resolve, reject) => {

        database.all(`SELECT * FROM books`, [], (err, rows) =>{

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

        const {titulo, num_paginas, isbn, editora} = newBook

        database.run(`INSERT INTO books (titulo, num_paginas, isbn, editora) VALUES (?, ?, ?, ?)`,
            [titulo, num_paginas, isbn, editora],

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

function deleteBookRepository(idBook){

    return new Promise((resolve, reject) => {

        database.run(`DELETE FROM books WHERE id = ?`,
            [idBook],
            
            function(err){

                if(err){

                    reject(err)

                }else{

                    resolve({message: "Livro deletado com sucesso!"})
                }
            }
        )
    })
}

export default {findAllBooksRepository, createBookRepository, deleteBookRepository}
