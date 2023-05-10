import React, {useState} from 'react'
import images from '../assets/images/images'
import {HiMenu} from 'react-icons/hi'
import {GrClose} from 'react-icons/gr'

const Header = () => {

  const [show, setShow] = useState(false)

  const showMenu = ()=> {
    if(show){
      setShow(false)
    }else{
      setShow(true)
    }
  }
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
        {show 
        ? <div className='menu-icono'>
            <button onClick={showMenu}><HiMenu /></button>
          </div>
        : <div className='menu-movil'>
            <div className="menu">
              <div className='menu-container'>
                <button onClick={showMenu}><GrClose/></button>
                <h2>Menú</h2>
              </div>
              <ul>
                <li>Crear cuenta</li>
                <li>Iniciar sesión</li>
              </ul>
            </div>
            <div className="redes-menu">
              <img
                src={images.facebook}
                alt="icono-facebook"
              />
              <img className='logo' src={images.linkedin} alt="icono-linkedin" />
              <img src={images.twitter} alt="icono-twitter" />
              <img className='logo' src={images.instagram} alt="icono-instagram" />
            </div>
          </div>
        }
        
      </section>
    </header>
  )
}

export default Header