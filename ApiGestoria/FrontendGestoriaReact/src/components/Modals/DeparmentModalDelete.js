import React, {Fragment } from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

function DepartmentModalDelete({DeleteDeparmentFunction , modalOnOffDeleteDeparmentFunction  , OpenModalDeparmentDelete  ,  Name , HandleChange }) {
    debugger;
   return (
    <Fragment>
        <Modal isOpen={OpenModalDeparmentDelete}>
            <ModalBody>
                Estas seguro que desea eliminar el departamento : {Name} ?
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={() => DeleteDeparmentFunction ()}>
                Si
                </button>
                <button
                className="btn btn-secundary"
                onClick={() => modalOnOffDeleteDeparmentFunction()}
                >
                No
                </button>
            </ModalFooter>
        </Modal>
    </Fragment>
  );
}
export default DepartmentModalDelete;