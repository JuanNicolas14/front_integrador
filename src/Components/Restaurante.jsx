import React from 'react'
import images from '../assets/images/images'
import { Link } from 'react-router-dom'

const Restaurante = ({nombre}) => {
  return (
    <article className='restaurante'>
        <img src={images.plato1} alt="" />
        <div className='restaurante-descripcion'>
            <p>⭐⭐⭐⭐</p>
            <h2>{nombre}</h2>
            <p>Una descripcion del restaurante y el tipo de comida que oferta</p>
        </div>
        <Link to='/detalle' style={{ textDecoration: 'none' }}>
          <button>Ver mas</button>
        </Link>
    </article>
  )
}

export default Restaurante