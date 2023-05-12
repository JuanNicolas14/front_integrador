import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Routes/Home'
import './index.css'
import Listado from './Routes/Listado'
import Detalle from './Routes/Detalle'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/restaurantes' element={<Listado/>} />
        <Route path='/detalle' element={<Detalle/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
