import * as yup from "yup";
import { rol } from "../components/Selection";

// MIN 5 caracteres, 1 mayuscula, 1 minuscula, y un numero
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
const textRules = /^[a-zA-ZÀ-ÿ\s]{1,250}$/;

/*
  solo letras
  const regExp = /^[a-zA-ZÀ-ÿ\s]{1,250}$/;

  linkedin
  const regExpLinkedin =
    /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|company)\/[a-z0-9_-]+\/?$/;
  */

/*
creacion de un password
contrasenia: yup.string().min(5).matches(passwordRules, "Por favor ingrese una contraseña válida.").required
*/

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor ingrese un email válido.")
    .required("Por favor ingrese un mail."),
  contrasenia: yup
    .string()
    .matches(passwordRules, "Por favor ingrese una contraseña válida.")
    .required("Por favor ingrese una contraseña."),
});

export const personaSchema = yup.object().shape({
  nameComplete: yup
    .string()
    .matches(textRules, "Por favor ingrese un nombre válido.")
    .required("Ingrese un nombre."),
  email: yup
    .string()
    .email("Por favor ingrese un email válido."),
  linkedin: yup
    .string()
    .url("El formato de la url no es válido.")
    .required("Ingrese la url al Linkedin."),
  recruiter: yup
    .string()
    .matches(textRules, "Por favor ingrese un nombre válido.")
    .required("Ingrese el nombre del recruiter."),
  //selection: yup.string().oneOf(rol).required()
  //mail: yup.string().email("Por favor ingrese un email válido.")
});
