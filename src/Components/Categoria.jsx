import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Categoria = ({nombre, dias, descripcion}) => {
  return (
    <article>
        <div className='categoria-imagen'>
          <div className="wrap">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>⭐⭐⭐</p>
          </div>
        </div>
        <div className='descripcion-button'>
          <Link to='/restaurantes' style={{ textDecoration: 'none' }}>
            <button>Ver restaurantes</button>
          </Link>
        </div>
    </article>
  )
}

export default Categoria