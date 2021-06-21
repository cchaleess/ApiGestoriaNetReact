import React, { useState ,Fragment } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function EmployeeModalInsert({InsertEmployeeFunction , modalOnOffInsertEmployeeFunction  , OpenModalEmployeeInsert  ,  DepartmentsList, HandleChange }) {
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
                onChange={HandleChange }
              />
              <br />
              <label>Departamento: </label>
              <br />
              <select
                id="comboDepartamento"
                name="departmentId"
                className="form-control"
              >
                {DepartmentsList.map((dpto) => {
                  return (
                    <option key={dpto.id} value={dpto.id}>
                      {dpto.name}
                    </option>
                  );
                })}
              </select>
              <br />
              <label>Fecha de ingreso: </label>
              <br />
              <input
                type="date"
                className="form-control"
                name="userCreated"
                onChange={HandleChange }
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
