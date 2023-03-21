import "./App.css";
import { useState } from "react";
import { FormCp, dataForm } from "./components/FormCp";
import { Button } from "bootstrap";
import { CountDown } from "./components/CountDown";

function App() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState<dataForm>();
  const [countdownActive, setCountdownActive] = useState(false);

  return (
    <div className="App container-fluid ">
      {countdownActive ? (
        <div className={"d-flex justify-content-center flex-column mt-5"}>
          <CountDown></CountDown>
          <FormCp showModal={setModal} setData={setData}></FormCp>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={() => {
              setCountdownActive(true);
            }}
          >
            Comenzar
          </button>
        </div>
      )}

      <div
        style={{ display: modal ? "flex" : "none" }}
        className={`modal  ${modal ? "show bg-opacity-50 bg-black " : ""}`}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tab-index="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog h-auto modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setModal(false);
                }}
              ></button>
            </div>
            <div className="modal-body">
              {data ? (
                <div className="row">
                  <div className="col-6">Nombre:</div>
                  <div className="col-6">{data.name}</div>
                  <div className="col-6">Correo:</div>
                  <div className="col-6">{data.email}</div>
                  <div className="col-6">Fecha Nacimiento:</div>
                  <div className="col-6">{data.birthdate}</div>
                  <div className="col-6">Pais:</div>
                  <div className="col-6">{data.country}</div>
                  <div className="col-6">Estado:</div>
                  <div className="col-6">{data.state}</div>
                </div>
              ) : (
                <div className="row"></div>
              )}
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button className="btn btn-primary">Nuevo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
