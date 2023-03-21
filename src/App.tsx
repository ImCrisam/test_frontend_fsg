import "./App.css";
import { useEffect, useState } from "react";
import { FormCp, dataForm } from "./components/FormCp";
import { Button } from "bootstrap";
import { CountDownCp } from "./components/CountDownCp";
import { ModalCp } from "./components/ModalCp";

function App() {
  const [modalData, setModalData] = useState(false);
  const [modalFinish, setModalFinish] = useState(false);

  const [data, setData] = useState<dataForm>();
  const [countdownActive, setCountdownActive] = useState(false);
  const [countdownFinish, setCountdownFinish] = useState(false);

  function finishCountDown() {
    setCountdownFinish(false);
    setModalFinish(true);
  }

  useEffect(() => {
    setCountdownActive(false);
  }, [modalData, modalFinish]);

  return (
    <div className="App container-fluid ">
      {countdownActive ? (
        <div className={"d-flex justify-content-center flex-column mt-5"}>
          <CountDownCp onFinish={finishCountDown}></CountDownCp>
          <FormCp showModal={setModalData} setData={setData}></FormCp>
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

      <ModalCp isActive={modalData}>
        {data && (
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
            <div className="col-6">Temperatura:</div>
            <div className="col-6">{data.temperature}</div>
          </div>
        )}
      </ModalCp>
      <ModalCp isActive={modalFinish}>
        <h3 className="fs-3 text-center">Tiempo Finalizado</h3>
      </ModalCp>
    </div>
  );
}

export default App;
