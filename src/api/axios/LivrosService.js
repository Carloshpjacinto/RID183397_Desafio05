import axios from 'axios';
import 'dotenv/config';

const baseUrl = process.env.BASE_URL;

export class LivrosService{

    static getLivros(){

        return axios.get(baseUrl+'/livros');
    }

    static getLivro(id){

        return axios.get(`${baseUrl}/livros/${id}`);
    }

    static createLivro(body){

        return axios.post(`${baseUrl}/livros`,body);
    }

    static updateLivro(id,body){

        return axios.put(`${baseUrl}/livros/${id}`,body);
    }

    static deleteLivro(id){
        
        return axios.delete(`${baseUrl}/livros/${id}`);
    } 
}
