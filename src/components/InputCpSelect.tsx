export interface propInputCpSelect {
  name: string;
  lable: string;
  isDisable?: boolean;
  textSelect: string;
  textInvalid: string;
  onChange?: (data: string) => void;
  children?: React.ReactNode;
}

export function InputCpSelect(p: propInputCpSelect) {
  return (
    <div className="form-floating">
      <select
        name={p.name}
        id={p.name}
        className="form-select"
        defaultValue=""
        required
        disabled={p.isDisable}
        onChange={(e) => {
          if (e.target.validity.customError) {
            e.target.setCustomValidity("");
            e.target.className = "form-control";
          }
          if (!p.onChange) return;
          p.onChange(e.target.value);
        }}
        onInvalid={(e) => {
          const target = e.target as HTMLInputElement;

          if (target.validity.patternMismatch || target.value == "") {
            target.setCustomValidity(p.textInvalid);
            target.className = "form-control is-invalid";
            return;
          }
        }}
      >
        <option value="" disabled hidden>
          {p.textSelect}
        </option>
        {p.children}
      </select>
      <label htmlFor="floatingSelectGrid">{p.lable}</label>
    </div>
  );
}
