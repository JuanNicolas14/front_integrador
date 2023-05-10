import React from 'react'
import images from '../assets/images/images'

const Header = () => {
  return (
    <header>
      <section>
        <div class="imagotipo">
          <img src={images.logoBukinFood} alt="icon-logo" />
          <div class="texto-logo">
            <h1>BukinFood</h1>
            <h3>Memberships</h3>
          </div>
        </div>

        <div class="botones-logueo">
          <button>Crear cuenta</button>
          <button>Iniciar sesión</button>
        </div>
      </section>
    </header>
  )
}

export default Header