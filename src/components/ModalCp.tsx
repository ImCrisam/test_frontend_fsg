interface propModalCp {
  isActive: boolean;
  children?: React.ReactNode;
}

export function ModalCp(p: propModalCp) {
  return (
    <div
      style={{ display: p.isActive ? "block" : "none" }}
      className={`modal  ${p.isActive ? "show bg-opacity-50 bg-black " : ""}`}
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tab-index="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog h-auto modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">{p.children}</div>
          <div className="modal-footer d-flex justify-content-center">
            <a className="btn btn-primary" href="/">
              Nuevo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
