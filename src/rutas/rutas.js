import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BuscadorPokemon from '../Components/BuscadorPokemon'
import Contador from '../Components/Contador'
import { Contenedor } from '../Components/Contenedor'

function Rutas({todo}) {
  return (
    <Routes>
    <Route path="/" element={ <Contenedor todo={todo} /> } />

    <Route path="/contador" element={<Contador />} />
    <Route path="/pokemon" element={<BuscadorPokemon />} />

  </Routes>
  )
}

export default Rutas