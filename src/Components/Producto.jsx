import React from 'react'
import images from '../assets/images/images'

const Producto = ({nombre}) => {
  return (
    <article>
        <img src={images.plato1} alt="" />
        <div className='descripcion'>
            <div>
                <p>Categoria</p>
                <h2>{nombre}</h2>
                <p>Una descripcion sobre algun plato muy rico :V</p>
            </div>
            <button>Enviar</button>
        </div>
    </article>
  )
}

export default Producto