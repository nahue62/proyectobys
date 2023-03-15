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
  faIdCard,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faMailchimp } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { SelecSkills, SelecRol, SelecSeniority, Sources } from "../Selection";
import { useFormik } from "formik";
import { personaSchema } from "../../schemas";
import Contexto from "../../context/Contexto";
import { useContext, useState } from "react";
import Modal from "../Modal";

const CrearPersona = () => {
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
  const [persona, setPersona] = useState({
    nameComplete: "",
    rol: "",
    seniorityGeneral: "",
    linkedin: "",
    sources: "",
    recruiter: "",
    skills: [],
  });

  const pruebaSubmit = (e) => {
    e.preventDefault();

    /*
    contexto.empleados.forEach((e) => {
      console.log(e);
    });
    */

    console.log(errors.nameComplete);
    console.log(errors.linkedin);
    console.log(values.nameComplete)
    if (
      (errors.nameComplete == undefined &&
        errors.linkedin== undefined) && (values.nameComplete != "" ||
          values.linkedin!= "")
    ){
      alert("TA TO BIEEEN");
      setPersona({
        nameComplete: values.nameComplete,
        linkedin: values.linkedin
      })
      // ACA VA EL ENVIO AL BACK

      return;
    }else{
      alert("TA TOO MAL");
    }


    /*
    contexto.empleados = [
      ...contexto.empleados,
      {
        nameComplete: values.nameComplete,
        apellido: values.apellido,
        linkedin: values.linkedin,
      },
    ];
    contexto.empleados.forEach((e) => {
      console.log(e);
    });
    */
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
      nameComplete: "",
      rol: "",
      seniorityGeneral: "",
      linkedin: "",
      sources: "",
      recruiter: "",
      skill: [],
      phoneNumber: "",
      email: "",
      industries: "",
      remuneration: "",
      dni: "",
      cuil: "",
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
            <div className="flex items-center">
              <div>
                <FontAwesomeIcon className="mr-2" icon={faUser} />
              </div>
              <div>
                <input
                  id="nameComplete"
                  type="text"
                  placeholder="Nombre completo"
                  className={
                    errors.nameComplete && touched.nameComplete
                      ? "border-b border-[#F40505]"
                      : "border-b border-[#D6E4EC]"
                  }
                  value={values.nameComplete}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.nameComplete && touched.nameComplete && (
                  <p className="text-red-600 text-xs ">{errors.nameComplete}</p>
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
              <Sources />
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
                <SelecSkills
                  onModalChange={onModalChange}
                />
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
                  id="phoneNumber"
                  type="text"
                  placeholder="Teléfono"
                  className={
                    errors.phoneNumber && touched.phoneNumber
                      ? "border-b border-[#F40505]"
                      : "border-b border-[#D6E4EC]"
                  }
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <p className="text-red-600 text-xs ">{errors.phoneNumber}</p>
                )}
              </div>
            </div>
            <div>
              <FontAwesomeIcon className="mr-2" icon={faMailBulk} />
            </div>
            <div>
              <input
                id="email"
                type="text"
                placeholder="Mail"
                className={
                  errors.email && touched.email
                    ? "border-b border-[#F40505]"
                    : "border-b border-[#D6E4EC]"
                }
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="text-red-600 text-xs ">{errors.email}</p>
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
                  id="industries"
                  type="text"
                  placeholder="Industria"
                  className={
                    errors.industries && touched.industries
                      ? "border-b border-[#F40505]"
                      : "border-b border-[#D6E4EC]"
                  }
                  value={values.industries}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.industries && touched.industries && (
                  <p className="text-red-600 text-xs ">{errors.industries}</p>
                )}
              </div>
            </div>
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faDollarSign} />
            </div>
            <div>
              <input
                id="remuneration"
                type="text"
                placeholder="Remuneración"
                className={
                  errors.remuneration && touched.remuneration
                    ? "border-b border-[#F40505]"
                    : "border-b border-[#D6E4EC]"
                }
                value={values.remuneration}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.remuneration && touched.remuneration && (
                <p className="text-red-600 text-xs ">{errors.remuneration}</p>
              )}
            </div>
          </div>
        </div>

        {/* ---------*/}

        <div className="flex flex-col md:flex md:flex-row justify-around items-center border w-1/2 p-10">
          <div className="flex justify-start items-center">
            <div>
              <FontAwesomeIcon className="mr-2" icon={faIdCard} />
            </div>
            <div>
              <input
                id="dni"
                type="text"
                placeholder="Dni"
                className={
                  errors.dni && touched.dni
                    ? "border-b border-[#F40505]"
                    : "border-b border-[#D6E4EC]"
                }
                value={values.dni}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.dni && touched.dni && (
                <p className="text-red-600 text-xs ">{errors.dni}</p>
              )}
            </div>
          </div>
          <div>
            <FontAwesomeIcon className="mr-2" icon={faAddressCard} />
          </div>
          <div>
            <input
              id="cuil"
              type="text"
              placeholder="Cuil"
              className={
                errors.cuil && touched.cuil
                  ? "border-b border-[#F40505]"
                  : "border-b border-[#D6E4EC]"
              }
              value={values.cuil}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.cuil && touched.cuil && (
              <p className="text-red-600 text-xs ">{errors.cuil}</p>
            )}
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
