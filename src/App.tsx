
import { Route, Routes } from 'react-router'
import './App.css'

import Navbar from './includes/navbar/Navbar'
import Footer from './includes/footer/Footer'
import Submenu from './includes/SubMenu/SubMenu'



import Home from "./pages/Home";




function About() {
  return (
    <div>
      <h1>Hello Redo</h1>
    </div>
  )
}



function App() {
  return (
    <>
      <Navbar />
      <div className='h-dvh'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/submenu/:id" element={<Submenu />} />
        <Route path="/submenu/parametros/:id" element={<Submenu />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;