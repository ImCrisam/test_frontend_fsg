import { propInputCp } from "../components/InputCp";
import { propInputCpSelect } from "../components/InputCpSelect";

export const inputname: propInputCp = {
  name: "name",
  lable: "nombre",
  pattern: "^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+([ ]?[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)+$",
  textInvalid: "Ingrese solo letras",
  isRequired: true,
  textRequired: "Nombre es requerido",
  type: "text",
  autoComplete: "name",
};

export const inputEmail: propInputCp = {
  name: "email",
  lable: "Email",
  textInvalid: "Email no valido",
  isRequired: true,
  pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
  textRequired: "Email es requerido",
  type: "email",
  autoComplete: "email",
};

export const inputCountry: propInputCpSelect = {
  name: "country",
  lable: "Seleccione Pais",
  textInvalid: "Pais es requerido",
  textSelect: "Selecione pais",
};
export const inputState: propInputCpSelect = {
  name: "state",
  lable: "Seleccione Estado",
  textInvalid: "Estado es requerido",
  textSelect: "Selecione Estado",
};
