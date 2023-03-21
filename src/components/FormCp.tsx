import { useState } from "react";

import { InputCp } from "./InputCp";
import { InputCpDate } from "./InputCpDate";
import { InputCpSelect } from "./InputCpSelect";

import useCountryState from "../hooks/useCountryState";

import {
  inputname,
  inputEmail,
  inputCountry,
  inputState,
} from "../configCp/configInputs";

export interface dataForm {
  name: string;
  email: string;
  birthdate: string;
  country?: string;
  state?: string;
  temperature?: string;
}

interface propFormCp {
  showModal: (is: boolean) => void;
  setData: (data: dataForm) => void;
}
export function FormCp(p: propFormCp) {
  const { countries, states, statesDisable, setCurrentCountry } =
    useCountryState();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.target as HTMLFormElement);
    formData;
    const obj: dataForm = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      birthdate: formData.get("birthdate") as string,
      country: formData.get("country") as string,
      state: formData.get("state") as string,
    };
    p.setData({ ...obj });
    p.showModal(true);
  }

  return (
    <form
      className=" p-5 "
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <div className="row d-flex justify-content-between ">
        <div className="col-12 col-md-5 mt-3">
          <InputCp {...inputname}></InputCp>
        </div>
        <div className="col-12 col-md-5 mt-3">
          <InputCp {...inputEmail}></InputCp>
        </div>
        <div className="col-12 col-md-3 mt-3">
          <InputCpDate></InputCpDate>
        </div>
        <div className="col-12 col-md-3 mt-3">
          <InputCpSelect
            {...inputCountry}
            isDisable={countries?.length == 0}
            onChange={setCurrentCountry}
          >
            {countries?.map((data) => {
              return (
                <option value={data.country_name} key={data.country_short_name}>
                  {data.country_name}
                </option>
              );
            })}
          </InputCpSelect>
        </div>
        <div className="col-12 col-md-3 mt-3">
          <InputCpSelect {...inputState} isDisable={statesDisable}>
            {states?.map((data) => {
              return (
                <option value={data.state_name} key={data.state_name}>
                  {data.state_name}
                </option>
              );
            })}
          </InputCpSelect>
        </div>
        <div className=" d-grid col-7  col-md-6">
          <input
            className="btn btn-primary mt-5"
            type="submit"
            value="Enviar"
          />
        </div>
        <div className=" d-grid col-3 ">
          <input
            className="btn btn-outline-danger mt-5"
            type="reset"
            value="Borrar"
          />
        </div>
      </div>
    </form>
  );
}
