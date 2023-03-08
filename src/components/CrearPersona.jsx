import {
  faCircleCheck,
  faFileSignature,
  faGear,
  faLightbulb,
  faMedal,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

import { SelecSkills, SelecRol, SelecSeniority, SelecContact } from "./Selection";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import Contexto from "./context/Contexto";
import { useContext } from "react";

const CrearPersona = () => {
  const contexto = useContext(Contexto);
  console.log(contexto.empleados)

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <h1 className="text-3xl mt-20 mb-10">Crear Persona</h1>
      <h3 className="text-[#117BB7]">Información de contacto</h3>
      {/*FORM*/}
      <form className="bg-white h-1/2 self-center m-10">
        {/*ARRIBA*/}
        <div className="flex h-1/2">
          {/*ARRIBA IZ*/}
          <div className="flex flex-col md:flex md:flex-row justify-around items-center border w-1/2 p-10">
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faUser} />
              <input
                id="nombre"
                type="text"
                placeholder="Nombre"
                className="border-b border-black"
              />
            </div>
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faFileSignature} />
              <input
                id="apellido"
                type="text"
                placeholder="Apellido"
                className="border-b border-black"
              />
            </div>
          </div>
          {/*ARRIBA DER*/}
          <div className="flex justify-around items-center border w-1/2">
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faLightbulb} />
              <SelecRol />
            </div>
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faMedal} />
              <SelecSeniority />
            </div>
          </div>
        </div>
        {/*ABAJO*/}
        <div className="flex h-1/2">
          {/*ABAJO IZ*/}
          <div className="flex justify-around items-center border w-1/2">
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faLinkedin} />
              <input
                type="text"
                placeholder="Linkedin"
                className="border-b border-black"
              />
            </div>
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faUserGroup} />
              <SelecContact />
            </div>
          </div>
          {/*ABAJO DER*/}
          <div className="flex justify-around items-center border w-1/2">
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faCircleCheck} />
              <input
                type="text"
                placeholder="Recruiter"
                className="border-b border-black"
              />
            </div>
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faGear} />
              <SelecSkills />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-10">
          <input
            type="submit"
            value="Enviar"
            className="text-white bg-[#006DA4] hover:bg-[#1d6081] px-4 py-2 rounded my-2 cursor-pointer transition-colors"
          />
          <NavLink to="/menu" className="my-2 hover:underline">Cancelar</NavLink>
        </div>

      </form>
    </div>
  );
};

export default CrearPersona;
