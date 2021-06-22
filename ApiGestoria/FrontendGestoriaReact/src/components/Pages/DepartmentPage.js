import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { useState, useEffect, Fragment } from "react";
import Globals from '../../Global';
import DeparmentService from "../../Services/DepartmentService";
import DepartmentTable  from "../Tables/DepartmentTable";
import DepartmentModalInsert from "../Modals/DepartmentModalInsert";
import DepartmentModalUpdate from "../Modals/DepartmentModalUpdate";
import DepartmentModalDelete from "../Modals/DeparmentModalDelete";

function DepartmentPage() {

  const [data, setData] = useState([]);
  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [listTh, setlistTh] =   useState(['Id', 'Nombre','Administración']);
  const [titleTable, setTitleTable] = useState('Tabla Departamentos');

  const [depSelected, setDepSelected] = useState({
    id: 0,
    name: "",
    userCreated: "",
    userModificated: "",
  });

  useEffect(() => {
    GetDepartments();  
  }, []);

    
  const GetDepartments = async () => {
      await new DeparmentService().getDepartmentList().then(
        (response) => {
          if (response && response != null) {
            setData(JSON.parse(response));      
          }
        }
      );
    }

  const InsertDepartments = async () => {
      await new DeparmentService().insertDepartment(depSelected).then(
        (response) => {
          if (response && response != null) {
            setData(data.concat(response));
            modalOnOffInsert();
            GetDepartments();    
          }
        }
      );
    }

  const UpdateDepartments = async () => {
      await new DeparmentService().updateDepartment(depSelected).then(
        (response) => {
          if (response && response != null) {
            modalOnOffEdit();
            GetDepartments();    
          }
        }
      );
    }

  const DeleteDepartments = async () => {
      await new DeparmentService().deleteDepartment(depSelected.id).then(
        (response) => {
          if (response && response != null) {
            modalOnOffDelete();
            GetDepartments();    
          }
        }
      );
    }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepSelected({
      ...depSelected,
      [name]: value,
    });
  };

  const seleccionaDep = (accion) => (event) => {
    var rowid = parseInt(
      event.target.parentNode.parentNode.firstElementChild.innerHTML
        .replace("td", "")
        .replace("/td"),
      10
    );
    depSelected.id = rowid;
    depSelected.name = event.target.parentNode.parentNode.innerHTML.split("td")[3].replace('</','').replace('>','');
    accion === "Editar" ? modalOnOffEdit() : modalOnOffDelete();
  };

  const modalOnOffInsert= () => {
    setModalInsert(!modalInsert);
  };
  const modalOnOffEdit = () => {
    setModalEdit(!modalEdit);
  };
  const modalOnOffDelete = () => {
    setModalDelete(!modalDelete);
  };


  return (
    <div className="App">
      <DepartmentTable
          title={titleTable}
          listTh={listTh}
          listTr={data}
          selectionPopup={seleccionaDep}>
      </DepartmentTable>
          
      <button onClick={() => modalOnOffInsert()} className="btn btn-success">
        Agregar Departamento
      </button>

      <Fragment>

        <DepartmentModalInsert 
          InsertDeparmentFunction = {InsertDepartments}
          modalOnOffInsertDeparmentFunction = {modalOnOffInsert}
          OpenModalDeparmentInsert = {modalInsert}
          HandleChange={handleChange}     
        ></DepartmentModalInsert>

       <DepartmentModalUpdate
          UpdateDeparmentFunction = {UpdateDepartments}
          modalOnOffUpdateDeparmentFunction  = {modalOnOffEdit}
          OpenModalDeparmentUpdate = {modalEdit}
          HandleChange={handleChange}  
          DepartMentId = {depSelected.id} 
          DepartMentName = {depSelected.name}          
       ></DepartmentModalUpdate>

        <DepartmentModalDelete
          DeleteDeparmentFunction = {DeleteDepartments}
          modalOnOffDeleteDeparmentFunction  = {modalOnOffDelete}
          OpenModalDeparmentDelete = {modalDelete}
          HandleChange={handleChange}  
          DepartMentId = {depSelected.id}   
          Name = {depSelected.name}      
       ></DepartmentModalDelete>

      </Fragment>
    </div>
  );
}

export default DepartmentPage;
