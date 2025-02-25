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

import Modal from "../Modal";
import {SelecSkills,SelecRolMulti,SelecSeniorityMulti,} from "../Selection";



const EncontrarPersona = () => {

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <h1 className="text-3xl mt-20 mb-10">Encontrar Persona</h1>
      {/*FORM*/}
      <form className="bg-white w-2/3 h-1/2 self-center m-10">
        {/*ARRIBA*/}
        <div className="flex h-1/2">
          {/*ARRIBA IZ*/}
          <div className="flex justify-around items-center border w-1/2 ">
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faLightbulb} />
              <SelecRolMulti />
            </div>
          </div>
          {/*ARRIBA DER*/}
          <div className="flex justify-around items-center border w-1/2 ">
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faMedal} />
              <SelecSeniorityMulti />
            </div>
          </div>
        </div>
        {/*ABAJO*/}
        <div className="flex h-1/2">
          {/*ABAJO IZ*/}
          <div className="flex justify-around items-center border w-1/2">
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faUser} />
              <input
                type="text"
                placeholder="Nombre Completo"
                className="border-b border-[#D6E4EC]"
              />
            </div>
          </div>
          {/*ABAJO DER*/}
          <div className="flex justify-around items-center border w-1/2">
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

export default EncontrarPersona
