import {
  faCircleCheck,
  faDollarSign,
  faFileSignature,
  faGear,
  faIndustry,
  faLightbulb,
  faMailBulk,
  faMedal,
  faPhone,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faMailchimp } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import {
  SelecSkills,
  SelecRol,
  SelecSeniority,
  SelecContact,
} from "../Selection";
import { useFormik } from "formik";
import { personaSchema } from "../../schemas";
import Contexto from "../../context/Contexto";
import { useContext, useState } from "react";
import Modal from "../Modal";

const CrearPersona = () => {
  /*
  const regExp = /^[a-zA-ZÀ-ÿ\s]{1,250}$/;
  const regExpLinkedin =
    /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|company)\/[a-z0-9_-]+\/?$/;
  */
  const [active, setActive] = useState(false);
  const [skills, setSkills] = useState([]);

  // MODAL
  const toggle = () => {
    setActive(!active);
  };

  const onModalChange = (e) => {
    setSkills(e);
  };

  const contexto = useContext(Contexto);
  const [empleado, setempleado] = useState({
    nombre: "",
    apellido: "",
    rol: "",
    seniority: "",
    linkedin: "",
    fuente: "",
    recruiter: "",
    skills: []
  });

  const pruebaSubmit = (e) => {
    e.preventDefault();
    contexto.empleados.forEach((e) => {
      console.log(e);
    });
    console.log(skills);
    console.log(errors);
    console.log(values.nombre);
    if (
      (values.nombre == "" || values.apellido == "" || values.linkedin == "") &&
      errors[0] == undefined
    ) {
      alert("Todos los campos están vacíos");
      return;
    }
    if (empleado.nombre)
      setempleado({
        nombre: values.nombre,
        apellido: values.apellido,
        linkedin: values.linkedin,
      });
    console.log("Empleado:" + empleado);
    contexto.empleados = [
      ...contexto.empleados,
      {
        nombre: values.nombre,
        apellido: values.apellido,
        linkedin: values.linkedin,
      },
    ];
    contexto.empleados.forEach((e) => {
      console.log(e);
    });
  };

  const {
    handleBlur,
    handleChange,
    //handleSubmit,
    //isSubmitting,
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
      skill: [],
      telefono: "",
      mail: "",
      industria: "",
      remuneracion: "",
    },
    validationSchema: personaSchema,
    //onSubmit,
  });

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <h1 className="text-3xl mt-20 mb-10">Crear Persona</h1>
      <h3 className="text-[#117BB7]">Información de contacto</h3>
      {/*FORM*/}
      <form
        className="bg-white h-1/2 w-3/4 self-center m-10"
        onSubmit={pruebaSubmit}
      >
        {/*ARRIBA*/}
        <div className="flex h-1/2">
          {/*ARRIBA IZ*/}
          <div className="flex flex-col md:flex md:flex-row justify-around items-center border w-1/2 p-10">
            <div className="flex justify-start items-center">
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
              <button type="button" onClick={toggle}>
                Skills
              </button>
              <Modal active={active} toggle={toggle}>
                <SelecSkills onModalChange={onModalChange} />
              </Modal>
            </div>
          </div>
        </div>

        {/*-------- */}

        <div className="flex h-1/2">
          {/*ABAJO IZ*/}
          <div className="flex flex-col md:flex md:flex-row justify-around items-center border w-1/2 p-10">
            <div className="flex justify-start items-center">
              <div>
                <FontAwesomeIcon className="mr-2" icon={faPhone} />
              </div>
              <div>
                <input
                  id="telefono"
                  type="text"
                  placeholder="Teléfono"
                  className={
                    errors.telefono && touched.telefono
                      ? "border-b border-[#F40505]"
                      : "border-b border-[#D6E4EC]"
                  }
                  value={values.telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.telefono && touched.telefono && (
                  <p className="text-red-600 text-xs ">{errors.telefono}</p>
                )}
              </div>
            </div>
            <div>
              <FontAwesomeIcon className="mr-2" icon={faMailBulk} />
            </div>
            <div>
              <input
                id="mail"
                type="text"
                placeholder="Mail"
                className={
                  errors.mail && touched.mail
                    ? "border-b border-[#F40505]"
                    : "border-b border-[#D6E4EC]"
                }
                value={values.mail}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.mail && touched.mail && (
                <p className="text-red-600 text-xs ">{errors.mail}</p>
              )}
            </div>
          </div>
          {/*ABAJO DER*/}
          <div className="flex flex-col md:flex md:flex-row justify-around items-center border w-1/2 p-10">
            <div className="flex justify-start items-center">
              <div>
                <FontAwesomeIcon className="mr-2" icon={faIndustry} />
              </div>
              <div>
                <input
                  id="industria"
                  type="text"
                  placeholder="Industria"
                  className={
                    errors.industria && touched.industria
                      ? "border-b border-[#F40505]"
                      : "border-b border-[#D6E4EC]"
                  }
                  value={values.industria}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.industria && touched.industria && (
                  <p className="text-red-600 text-xs ">{errors.industria}</p>
                )}
              </div>
            </div>
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faDollarSign} />
            </div>
            <div>
              <input
                id="remuneracion"
                type="text"
                placeholder="Remuneración"
                className={
                  errors.remuneracion && touched.remuneracion
                    ? "border-b border-[#F40505]"
                    : "border-b border-[#D6E4EC]"
                }
                value={values.remuneracion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.remuneracion && touched.remuneracion && (
                <p className="text-red-600 text-xs ">{errors.remuneracion}</p>
              )}
            </div>
          </div>
        </div>

        {/* ---------*/}

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
