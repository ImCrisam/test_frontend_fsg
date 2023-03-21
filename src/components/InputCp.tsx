//import "./InputCp.css";

import { useState } from "react";

export interface propInputCp {
  lable: string;
  textInvalid: string;
  isRequired: boolean;
  textRequired: string;
  autoComplete?: string;
  pattern?: string;
  name: string;
  type: "text" | "email" | "number";
}

export function InputCp(p: propInputCp) {
  return (
    <div className="form-floating">
      <input
        type={p.type}
        className="form-control"
        id={p.name}
        name={p.name}
        placeholder=""
        autoComplete={p.autoComplete}
        required={p.isRequired}
        pattern={p.pattern}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          if (!target.value && target.required) {
            target.setCustomValidity(p.textRequired + target.value);
            target.className = "form-control is-invalid";
            return;
          }
          if (target.validity.patternMismatch) {
            target.setCustomValidity(p.textInvalid);
            target.className = "form-control is-invalid";
            return;
          }
          target.className = "form-control";
          target.setCustomValidity("");
        }}
      ></input>
      <label className="ms-2" htmlFor={p.name}>
        {p.lable}
      </label>
    </div>
  );
}
