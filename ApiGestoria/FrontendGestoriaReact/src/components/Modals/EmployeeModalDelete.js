import React, { useState ,Fragment } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function EmployeeModalDelete({DeleteEmployeeFunction , modalOnOffDeleteEmployeeFunction  , OpenModalEmployeeDelete  ,  Name , HandleChange }) {
    debugger;
   return (
    <Fragment>
        <Modal isOpen={OpenModalEmployeeDelete }>
            <ModalBody>
                Estas seguro que desea eliminar el Empleado : {Name && Name} ?
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={() => DeleteEmployeeFunction ()}>
                Si
                </button>
                <button
                className="btn btn-secundary"
                onClick={() => modalOnOffDeleteEmployeeFunction ()}
                >
                No
                </button>
            </ModalFooter>
        </Modal>
    </Fragment>
  );
}
export default EmployeeModalDelete;