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

import {
  SelecSkills,
  SelecRol,
  SelecSeniority,
  SelecContact,
} from "./Selection";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import Contexto from "./context/Contexto";
import { useContext } from "react";

const CrearPersona = () => {
  const contexto = useContext(Contexto);
  console.log(contexto.empleados);

  //METODO PARA GUARDAR LOS DATOS DE PERSONA EN EL ARRAY
  const onSubmit = (values) => {
    console.log(values);
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      rol: "",
      seniority: "",
      linkedin: "",
      fuenteContacto: "",
      recruiter: "",
      skill: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <h1 className="text-3xl mt-20 mb-10">Crear Persona</h1>
      <h3 className="text-[#117BB7]">Información de contacto</h3>
      {/*FORM*/}
      <form
        className="bg-white h-1/2 w-3/4 self-center m-10"
        handleSubmit={handleSubmit}
      >
        {/*ARRIBA*/}
        <div className="flex h-1/2">
          {/*ARRIBA IZ*/}
          <div className="flex flex-col md:flex md:flex-row justify-around items-center border w-1/2 p-10">
            <div className="flex  justify-start items-center">
              <div>
                <FontAwesomeIcon className="mr-2" icon={faUser} />
              </div>
              <div>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                  className={
                    errors.nombre && touched.nombre
                      ? "border-b border-[#F40505]"
                      : "border-b border-[#D6E4EC]"
                  }
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.nombre && touched.nombre && (
                  <p className="text-red-600 text-xs ">{errors.nombre}</p>
                )}
              </div>
            </div>

            <div className="flex justify-start items-center">
              <div>
                <FontAwesomeIcon className="mr-2" icon={faFileSignature} />
              </div>
              <div>
                <input
                  id="apellido"
                  type="text"
                  placeholder="Apellido"
                  className={
                    errors.apellido && touched.apellido
                      ? "border-b border-[#F40505]"
                      : "border-b border-[#D6E4EC]"
                  }
                  value={values.apellido}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.apellido && touched.apellido && (
                  <p className="text-red-600 text-xs ">{errors.apellido}</p>
                )}
              </div>
            </div>
          </div>
          {/*ARRIBA DER*/}
          <div className="flex flex-col md:flex md:flex-row justify-around items-center border w-1/2 p-10">
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faLightbulb} />
              <SelecRol />
              {errors.selection && touched.selection && (
                <p className="text-red-600 text-xs ">{errors.selection}</p>
              )}
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
          <div className="flex flex-col md:flex md:flex-row justify-around items-center border w-1/2 p-10">
            <div className="flex justify-start items-center">
              <div>
                <FontAwesomeIcon className="mr-2" icon={faLinkedin} />
              </div>
              <div>
                <input
                  id="linkedin"
                  type="text"
                  placeholder="Linkedin"
                  className={
                    errors.linkedin && touched.linkedin
                      ? "border-b border-[#F40505]"
                      : "border-b border-[#D6E4EC]"
                  }
                  value={values.linkedin}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.linkedin && touched.linkedin && (
                  <p className="text-red-600 text-xs ">{errors.linkedin}</p>
                )}
              </div>
            </div>
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faUserGroup} />
              <SelecContact />
            </div>
          </div>
          {/*ABAJO DER*/}
          <div className="flex flex-col md:flex md:flex-row justify-around items-center border w-1/2 p-10">
            <div className="flex justify-start items-center">
              <div>
                <FontAwesomeIcon className="mr-2" icon={faCircleCheck} />
              </div>
              <div>
                <input
                  id="recruiter"
                  type="text"
                  placeholder="Recruiter"
                  className={
                    errors.recruiter && touched.recruiter
                      ? "border-b border-[#F40505]"
                      : "border-b border-[#D6E4EC]"
                  }
                  value={values.recruiter}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.recruiter && touched.recruiter && (
                  <p className="text-red-600 text-xs ">{errors.recruiter}</p>
                )}
              </div>
            </div>
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faGear} />
              <SelecSkills />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-10">
          {/*
          <input
            type="submit"
            value="Enviar"
            className="text-white bg-[#006DA4] hover:bg-[#1d6081] px-4 py-2 rounded my-2 cursor-pointer transition-colors"
          />
          */}
          <button
            type="submit"
            className="text-white bg-[#006DA4] hover:bg-[#1d6081] px-4 py-2 rounded my-2 cursor-pointer transition-colors"
            disabled={isSubmitting}
          >
            Enviar
          </button>
          <NavLink to="/menu" className="my-2 hover:underline">
            Cancelar
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default CrearPersona;
