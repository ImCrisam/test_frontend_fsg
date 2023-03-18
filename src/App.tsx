import { useState, useEffect } from "react";

import { InputCp } from "./components/InputCp";
import { InputCpDate } from "./components/InputCpDate";

import { inputname, inputEmail } from "./configInputs";
import { loginApi, countries } from "./services";
import "./App.css";

interface dataForm {
  name: string;
  email: string;
  birthdate: string;
  country?: string;
  state?: string;
}

function App() {
  const [data, setdata] = useState<dataForm>({} as dataForm);
  const [auth, setauth] = useState<string>("");

  useEffect(() => {
    loginApi().then((key) => {
      setauth(key.auth_token);
    });
  }, []);

  useEffect(() => {
    if (!auth) return;
    countries(auth).then((data) => {
      console.log(data);
    });
  }, [auth]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.target as HTMLFormElement);
    const obj: dataForm = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      birthdate: formData.get("birthdate") as string,
      country: formData.get("country") as string,
      state: formData.get("state") as string,
    };
    setdata({ ...obj });
    console.log(data);
  }
  return (
    <div className="App">
      <form
        className=" p-5 "
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <InputCp {...inputEmail}></InputCp>
        <InputCp {...inputname}></InputCp>
        <InputCpDate></InputCpDate>
        <div className="col-12">
          <input
            className="btn btn-primary mt-5"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}

export default App;
