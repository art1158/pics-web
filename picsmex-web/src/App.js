import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Negocios from './pages/Negocios';
import Sociales from './pages/Sociales';
import Contacto from './pages/Contacto';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App(){
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Inicio} />
        <Route path='/negocios' exact Component={Negocios} />
        <Route path='/sociales' exact Component={Sociales} />
        <Route path='/contacto' exact Component={Contacto} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
