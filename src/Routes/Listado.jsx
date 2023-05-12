import React from 'react'
import Restaurante from '../Components/Restaurante'
import '../index.css'

const Listado = () => {
  return (
    <section className='contenedor-restaurantes'>
        <h2>Restaurantes</h2>
          <div className='listado-restaurantes'>
            {['El corral','Presto','McDonalds','La fonda paisa'].map((restaurante,key) => (
              <Restaurante key={key} nombre={restaurante}/>
            ))
            }
          </div>
    </section>
  )
}

export default Listado