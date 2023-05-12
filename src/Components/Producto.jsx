import React from 'react'
import images from '../assets/images/images'

const Producto = ({nombre}) => {
  return (
    <article>
        <img src={images.plato1} alt="" />
        <div className='descripcion'>
            <div>
                <p>⭐⭐⭐⭐</p>
                <h2>{nombre}</h2>
                <p>Una descripcion del restaurante y el tipo de comida que oferta, una descripcion del restaurante y el tipo de comida que podrian estar sirviendo.</p>
            </div>
            <button>Ver mas</button>
        </div>
    </article>
  )
}

export default Producto