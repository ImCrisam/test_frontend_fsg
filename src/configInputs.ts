import { propInputCp } from "./components/InputCp";

export const inputname: propInputCp = {
  textId: "name",
  lable: "nombre",
  pattern: "^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+([ ]?[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)+$",
  textInvalid: "Ingrese solo letras",
  isRequired: true,
  textRequired: "Este campo es obligatorio",
  type: "text",
  autoComplete: "name",
};
