import React from 'react';
import Navbar from './Components/estaticos/navbar/Navbar';
import Footer from './Components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Sobre from './paginas/sobre/Sobre';
import Login from './paginas/login/Login'
import CadastroUsuario from './paginas/cadastro/CadastroUsuario';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/Store';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          </Routes>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App;