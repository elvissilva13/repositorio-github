
import React, { useEffect, useState } from 'react';
import   './lista.css'


 
function ListaDeRepositorios() {
    const [repositorio, setRepositorio] = useState([{
      id: 0,
      name:''
    }]);
 
   
    useEffect(() => {
        async function carregaRepositorios () {
            const resposta = await fetch('https://api.github.com/users/elvissilva13/repos');
            const repositorio = await resposta.json();
         
            setRepositorio(repositorio);
          }
          carregaRepositorios();
        }, []);
 

  return (
    <div className='container'>
      <img  src="http://www.github.com/elvissilva13.png" alt="foto github" />
      <h1>Repositórios github </h1>
        <ul>
        {repositorio.map((repositorio) =>(
          <li key={repositorio.id}>
            {repositorio.name.toUpperCase()}
          </li>
        ))}
      </ul>
      
    </div>
  );
}
export default ListaDeRepositorios;