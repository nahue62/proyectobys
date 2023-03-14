import React from "react";
import CrearPersona from "../../Crear/CrearPersona";
import EncontrarPersona from "../../Encontrar/EncontrarPersona";
import ListarPersona from "../../ListarPersona";
import CrearBusqueda from "../../Crear/CrearBusqueda";
import EncontrarBusqueda from "../../Encontrar/EncontrarBusqueda";
import CrearEntrevista from "../../Crear/CrearEntrevista";
import EncontrarEntrevista from "../../Encontrar/EncontrarEntrevista";
import Eventos from "../../Eventos";
import Menu from "../../../Pages/pageMenu/Menu";
import CerrarSesion from "../../../Pages/pageMenu/CerrarSesion";
import Navegador from "../../Navegador";
import { Navigate, Route, Routes } from "react-router-dom";
const Privado = () => {
  return (
    <>
      <Navegador />
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/persona/crear" element={<CrearPersona />} />
        <Route path="/persona/encontrar" element={<EncontrarPersona />} />
        <Route path="/persona/listado" element={<ListarPersona />} />
        <Route path="/busqueda/crear" element={<CrearBusqueda />} />
        <Route path="/busqueda/encontrar" element={<EncontrarBusqueda />} />
        <Route path="/entrevista/crear" element={<CrearEntrevista />} />
        <Route path="/entrevista/encontrar" element={<EncontrarEntrevista />} />
        <Route path="/entrevista/eventos" element={<Eventos />} />
        <Route path="/logout" element={<CerrarSesion />} />
      </Routes>
    </>
  );
};

export default Privado;
