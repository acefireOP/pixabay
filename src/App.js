import React, { useState, useEffect } from 'react';
import Formulario from './component/Formulario'

function App() {

  const [ busqueda, guardarBusqueda ] = useState('')

  useEffect(() => {
    const consultarApi = async () => {
      if(busqueda === '') return

        const imagenerPorPagina = 30
        const key = '15023427-b354aa63679c8e048275914eb'
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenerPorPagina}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        console.log(resultado)
    }
    consultarApi()
  }, [busqueda])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
      </div>
    </div>
  );
}

export default App;
