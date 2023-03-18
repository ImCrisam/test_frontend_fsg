export interface propInputCpSelect {
  name: string;
}

export function InputCpSelect() {
  return (
    <div className="form-floating">
      <select
        className="form-select"
        id="floatingSelectGrid"
        aria-label="Floating label select example"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <label htmlFor="floatingSelectGrid">Works with selects</label>
    </div>
  );
}
