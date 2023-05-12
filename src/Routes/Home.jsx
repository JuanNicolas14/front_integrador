import React from 'react'
import { Link } from 'react-router-dom'

import Categoria from '../Components/Categoria'
import Producto from '../Components/Producto'
import Searchbar from '../Components/Searchbar'

const Home = () => {

  const planes = [
    {
      nombre: 'Semanal',
      dias: 7,
      descripcion: 'Un almuerzo por dia, durante 7 dias.'
    },
    {
      nombre: 'Quincenal',
      dias: 15,
      descripcion: 'Un almuerzo por dia, durante 15 dias.'
    },
    {
      nombre: 'Mensual',
      dias: 30,
      descripcion: 'Un almuerzo por dia, durante 30 dias.'
    },
  ]
  return (
    <main className='home'>
        <Searchbar/>
        <section className='categorias'>
          <h2 className='titulo'>Restaurantes habiles por plan</h2>
          <div className='listado-categorias'>
            {planes.map((planes,key) => (              
              <Categoria 
                key={key} 
                nombre={planes.nombre}
                dias={planes.dias}
                descripcion={planes.descripcion}
              />
            ))
            }
          </div>
        </section>
        <section className='recomendados'>
          <h2>Restaurantes recomendados</h2>
          <div className='listado-recomendados'>
            {['El corral','Presto','McDonalds','Otro'].map((plato,key) => (
              <Producto key={key} nombre={plato}/>
            ))
            }
          </div>
        </section>
    </main>
  )
}

export default Home