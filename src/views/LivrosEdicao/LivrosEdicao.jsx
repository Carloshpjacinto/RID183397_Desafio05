import {useEffect , useState} from 'react';
import Header from "../../components/Header/Header";
import "./index.scss";
import SubmenuLivros from "../../components/SubmenuLivros/SubmenuLivros";
import { useParams } from 'react-router-dom';
import { LivrosService } from "../../api/axios/LivrosService";

const LivrosEdicao = () => {

  let {id} = useParams();

  const [livro, setLivro] = useState([]);

  async function getLivro(){

    const {data} = await LivrosService.getLivro(id);
    setLivro(data);
  };

  async function editLivro(event){

    event.preventDefault();

    const {titulo, num_paginas, isbn, editora } = livro

    const body = {
  
      titulo,
      num_paginas: Number(num_paginas),
      isbn,
      editora
    };

      await LivrosService.updateLivro(Number(id),body).then(()=>{

        alert("Livro atualizado");

        window.document.getElementById("formulario").reset();
        setLivro({id: id, titulo: '', num_paginas: '', isbn: '', editora: '' });

      }).catch((err)=>{

        alert(err);  
      });
  };

  useEffect(() => {

    getLivro();
    document.getElementById("id").value = id
  }, []);

  return (
  <>
    <Header/>    
    <SubmenuLivros/>
    <div className='livrosCadastro'>
      <h1>Edição de Livros</h1>
      <div>

        <form id="formulario" onSubmit={editLivro}>

          <div className='form-group'>
            <label>Id</label>
            <input type="text" id='id' disabled required onChange={(event)=>{ setLivro({...livro, id: event.target.value})}} value={livro.id}></input>
          </div>

          <div className='form-group'>
            <label>Titulo</label>
            <input type="text" id='titulo' onChange={(event)=>{ setLivro({...livro, titulo: event.target.value})}} value={livro.titulo || ""}></input>
          </div>

          <div className='form-group'>
            <label>Número de Páginas</label>
            <input type="text" id='num_paginas' onChange={(event)=>{ setLivro({...livro, num_paginas: event.target.value})}} value={livro.num_paginas || ""}></input>
          </div>

          <div className='form-group'>
            <label>ISBN</label>
            <input type="text" id='isbn' onChange={(event)=>{ setLivro({...livro, isbn: event.target.value})}} value={livro.isbn || ""}></input>
          </div>

          <div className='form-group'>
            <label>Editora</label>
            <input type="text" id='editora' onChange={(event)=>{ setLivro({...livro, editora: event.target.value})}} value={livro.editora || ""}></input>
          </div> 

          <div className='form-group'>
            <button type='submit'>Atualizar Livro</button>  
          </div>  

        </form>
      </div>        
    </div>
  </>);
};

export default LivrosEdicao
