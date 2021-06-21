import React, { useState ,Fragment } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function EmployeeModalInsert({InsertEmployeeFunction , modalOnOffInsertEmployeeFunction  , OpenModalEmployeeInsert  ,  HandleChange }) {
    debugger;
   return (
    <Fragment>
        <Modal isOpen={OpenModalEmployeeInsert }>
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
            <button className="btn btn-primary" onClick={() => InsertEmployeeFunction ()}>
              Insertar
            </button>

            <button
              className="btn btn-danger"
              onClick={() => modalOnOffInsertEmployeeFunction ()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
    </Fragment>
  );
}
export default EmployeeModalInsert;
