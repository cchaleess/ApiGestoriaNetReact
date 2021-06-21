import React, { useState ,Fragment } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function DepartmentModalUpdate({UpdateDeparmentFunction , modalOnOffUpdateDeparmentFunction  , OpenModalDeparmentUpdate  ,  HandleChange , DepartMentId  , DepartMentName }) {
    debugger;
   return (
    <Fragment>
        <Modal isOpen={OpenModalDeparmentUpdate }>
          <ModalHeader>Modifica datos</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>ID: </label>
              <br />
              <input
                type="text"
                className="form-control"
                readOnly
                value={DepartMentId}
              />
              <label>Nuevo Nombre: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={HandleChange}
                value={DepartMentName}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => UpdateDeparmentFunction()}>
              Modifica
            </button>{" "}
            <button
              className="btn btn-danger"
              onClick={() => modalOnOffUpdateDeparmentFunction()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
    </Fragment>
  );
}
export default DepartmentModalUpdate;
