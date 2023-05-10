import React from 'react'
import Categoria from '../Components/Categoria'
import Producto from '../Components/Producto'
import Searchbar from '../Components/Searchbar'

const Home = () => {
  return (
    <main className='home'>
        <Searchbar/>
        <section className='categorias'>
          <h2 className='titulo'>Buscar por categoria</h2>
          <div className='listado-categorias'>
            {['Tradicional','Mexicana','Italiana','Comidas Rapidas'].map((categoria,key) => (
              <Categoria key={key} nombre={categoria}/>
            ))
            }
          </div>
        </section>
        <section className='recomendados'>
          <h2>Recomendaciones</h2>
          <div className='listado-recomendados'>
            {['Bandeja Paisa','Cazuela De Mariscos','Sancocho','Mojarra Frita'].map((plato,key) => (
              <Producto key={key} nombre={plato}/>
            ))
            }
          </div>
        </section>
    </main>
  )
}

export default Home