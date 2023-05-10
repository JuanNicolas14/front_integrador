import React from 'react'
import images from '../assets/images/images'
import '../index.css'

const Categoria = ({nombre}) => {
  return (
    <article>
        <img src={images.plato2} alt="Plato" />
        <div className='descripcion'>
          <h3>{nombre}</h3>
          <p>Una descripcion breve....</p>
        </div>
    </article>
  )
}

export default Categoria