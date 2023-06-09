import React from 'react'
import images from '../assets/images/images'

const Footer = () => {
  return (
    <footer id="footerContainer">
      <section>
          <div class="copyright">
              <p>©2023 BukinFood</p>
              <h4>Todos los derechos reservados</h4>
          </div>
          <div class="social-media">
              <img
              src={images.facebook}
              alt="icono-facebook"
              />
              <img className='logo' src={images.linkedin} alt="icono-linkedin" />
              <img src={images.twitter} alt="icono-twitter" />
              <img className='logo' src={images.instagram} alt="icono-instagram" />
          </div>
      </section>
    </footer>
  )
}

export default Footer