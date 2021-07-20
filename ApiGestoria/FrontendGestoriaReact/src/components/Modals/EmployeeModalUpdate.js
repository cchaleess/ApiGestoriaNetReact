import React, { Fragment } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function EmployeeModalUpdate({UpdateEmployeeFunction , modalOnOffEmployeeFunction  , OpenModalEmployeeUpdate  ,  HandleChange , DepartmentsList, CurrentEmployeeName,CurrentDepartmentId }) {
    debugger;
   return (
    <Fragment>
        <Modal isOpen={OpenModalEmployeeUpdate}>
          <ModalHeader>Modifica datos</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Nombre: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={HandleChange }
                value={CurrentEmployeeName}
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
                    <option key={dpto.id} value={dpto.id} selected={CurrentDepartmentId === dpto.id ?  true: false }>
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
