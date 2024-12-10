import sqlite3 from 'sqlite3'

export const database = new sqlite3.Database("livro_DB.sqlite", (err) =>{

    if(err){

        console.error("Falha ao se conectar ao banco de dados!", err.message)

    }else{

        console.log("Conectado ao banco de dados com sucesso.")
    }
})
