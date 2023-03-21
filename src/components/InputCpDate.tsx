export function InputCpDate() {
  function verifiAge(birthdate: string): boolean {
    const date: Date = new Date(birthdate);
    const now: Date = new Date();
    const delta = now.getTime() - date.getTime();
    const age: number = Math.floor(delta / (1000 * 60 * 60 * 24 * 365));
    return age >= 18 && age <= 62;
  }

  return (
    <div className="form-floating">
      <input
        name="birthdate"
        type="date"
        className="form-control"
        id="fn"
        required
        pattern="^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$"
        max={new Date().toISOString().split("T")[0]}
        onInvalid={(e) => {
          const target = e.target as HTMLInputElement;

          if (target.validity.patternMismatch || target.value == "") {
            target.setCustomValidity("Fecha Invalida");
            target.className = "form-control is-invalid";
            return;
          }
        }}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          target.setCustomValidity("");
          target.className = "form-control";

          if (!target.validity.valid) {
            target.setCustomValidity("Fecha Invalida");
            target.className = "form-control is-invalid";
            return;
          }

          if (target.validity.valid && !verifiAge(target.value)) {
            target.setCustomValidity("Debe ser mayor de 18 y menor de 62");
            target.className = "form-control is-invalid";
            return;
          }
        }}
      />
      <label className="ms-2" htmlFor="fn">
        Fecha de Nacimiento
      </label>
    </div>
  );
}
