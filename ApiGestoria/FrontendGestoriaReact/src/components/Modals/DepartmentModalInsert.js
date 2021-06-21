import React, { useState ,Fragment } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function DepartmentModalInsert({InsertDeparmentFunction , modalOnOffInsertDeparmentFunction  , OpenModalDeparmentInsert  ,  HandleChange }) {
    debugger;
   return (
    <Fragment>
        <Modal isOpen={OpenModalDeparmentInsert }>
          <ModalHeader>Insertar</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Nombre: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={HandleChange}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => InsertDeparmentFunction()}>
              Insertar
            </button>

            <button
              className="btn btn-danger"
              onClick={() => modalOnOffInsertDeparmentFunction()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
    </Fragment>
  );
}
export default DepartmentModalInsert;
