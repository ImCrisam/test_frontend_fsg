import { useState } from "react";
import { InputCp } from "./components/InputCp";
import { inputname, inputEmail } from "./configInputs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form className=" p-5 ">
        <InputCp {...inputname}></InputCp>
        <InputCp {...inputEmail}></InputCp>
        <div className="col-12">
          <button className="btn btn-primary mt-5" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
