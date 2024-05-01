import React from 'react'
import { Route, Routes } from "react-router-dom";

import Home from './views/Home'
import Carrito from './views/Carrito'
import Pizza from './views/Pizza'

import { NavBar } from './components/NavBar';

import PizzaProvider, { PizzaContext } from './context/PizzaContext';


const PIZZAS_URL = "/pizzas.json";

const App = () => {
  return (
    <PizzaProvider pizzasUrl={PIZZAS_URL}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pizza/:id" element={<Pizza />} />
      </Routes>
    </PizzaProvider>
  )
}

export default App