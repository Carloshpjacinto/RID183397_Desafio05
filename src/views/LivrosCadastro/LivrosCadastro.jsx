import {useState} from 'react'
import Header from '../../components/Header/Header'
import "./index.scss"
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros'
import { LivrosService } from '../../api/LivrosService'

const LivrosCadastro = () => {
  
  const [livro, setLivro] = useState([])

  async function createLivro(event){

    event.preventDefault();

    const {titulo, num_paginas, isbn, editora } = livro;

    const body = {

      titulo,
      num_paginas: Number(num_paginas),
      isbn,
      editora
    }

    if(!titulo || !num_paginas || !isbn || !editora){

      alert("Todos os campos são Obrigatorios");
      return;
    }

    try{

      await LivrosService.createLivro(body);
      alert("Livro cadastrado com sucesso!")
      document.getElementById("formulario").reset();
      setLivro({titulo: '', num_paginas: '', isbn: '', editora: '' });

    }catch(err){

      alert("Erro ao cadastrar livro")
    }
  }

  return (
  <>
    <Header/>    
    <SubmenuLivros/>
    <div className='livrosCadastro'>
        <h1>Cadastro de Livros</h1>
        <div>          
          <form id="formulario" onSubmit={createLivro}>
          <div className='form-group'>
            <label>Id</label>
            <input type="text" id='id'></input>
          </div>
          <div className='form-group'>
            <label>Titulo</label>
            <input type="text" id='titulo' value={livro.titulo} required onChange={(event)=>{ setLivro({...livro, titulo: event.target.value})}}></input>
          </div>
          <div className='form-group'>
            <label>Número de Páginas</label>
            <input type="text" id='num' value={livro.num_paginas} required onChange={(event)=>{ setLivro({...livro, num_paginas: event.target.value})}}></input>
          </div>
          <div className='form-group'>
            <label>ISBN</label>
            <input type="text" id='isbn' value={livro.isbn} required onChange={(event)=>{ setLivro({...livro, isbn: event.target.value})}}></input>
          </div>
          <div className='form-group'>
            <label>Editora</label>
            <input type="text" id='editora' value={livro.editora} required onChange={(event)=>{ setLivro({...livro, editora: event.target.value})}}></input>
          </div> 
          <div className='form-group'>
            <button type='submit'>Cadastrar Livro</button>  
          </div>         
          </form>
        </div>
    </div>
  </>)
  
}

export default LivrosCadastro
