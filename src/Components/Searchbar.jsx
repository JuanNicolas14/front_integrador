import React from 'react'

const Searchbar = () => {
  return (
    <section class="busqueda">
        <div>
          <h2>Busca ofertas en hoteles, casas y mucho más</h2>
          <div class="formulario">
            <form>
              <input type="text" placeholder=" 📍 ¿Qué quieres reservar hoy?" />
              <input type="text" placeholder=" 🗓️ Check in - Check out" />
              <button>Buscar</button>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Searchbar