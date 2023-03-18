import "./InputCp.css";

export interface propInputCp {
  lable: string;
  textInvalid: string;
  isRequired: boolean;
  textRequired: string;
  autoComplete?: string;
  pattern: string;
  textId: string;
  type: "text" | "email" | "number";
}

export function InputCp(p: propInputCp) {
  return (
    <div className="form-floating">
      <input
        type={p.type}
        className="form-control "
        id={p.textId}
        placeholder=""
        autoComplete={p.autoComplete}
        required={p.isRequired}
        pattern={p.pattern}
        onInvalid={(e) => {
          let target = e.target as HTMLInputElement;
          if (!target.value) {
            target.setCustomValidity(p.textRequired);
          } else {
            target.setCustomValidity(p.textInvalid);
          }
        }}
      ></input>
      <label htmlFor={p.textId}>{p.lable}</label>
    </div>
  );
}
