import React, { useState ,Fragment } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function EmployeeModalUpdate({UpdateEmployeeFunction , modalOnOffEmployeeFunction  , OpenModalEmployeeUpdate  ,  HandleChange , EmployeeId  ,EmployeeName }) {
    debugger;
   return (
    <Fragment>
        <Modal isOpen={OpenModalEmployeeUpdate}>
          <ModalHeader>Modifica datos</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>ID: </label>
              <br />
              <input
                type="text"
                className="form-control"
                readOnly
                value={EmployeeId}
              />
              <label>Nuevo Nombre: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={HandleChange}
                value={EmployeeName}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => UpdateEmployeeFunction()}>
              Modifica
            </button>{" "}
            <button
              className="btn btn-danger"
              onClick={() => modalOnOffEmployeeFunction ()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
    </Fragment>
  );
}
export default EmployeeModalUpdate;
