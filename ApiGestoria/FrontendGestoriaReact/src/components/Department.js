import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { useState, useEffect, Fragment } from "react";
import Globals from '../Global';
import DeparmentService from "../Services/DepartmentService";
import GenericTable  from "./GenericTable";
import DepartmentModalInsert from "../components/Modals/DepartmentModalInsert";
import DepartmentModalUpdate from "../components/Modals/DepartmentModalUpdate";
import DepartmentModalDelete from "../components/Modals/DeparmentModalDelete";

function Department() {

  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [listTh, setlistTh] =   useState(['Id', 'Nombre','Administración']);

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
            modalOnOffInsertar();
            GetDepartments();    
          }
        }
      );
    }

  const UpdateDepartments = async () => {
      await new DeparmentService().updateDepartment(depSelected).then(
        (response) => {
          if (response && response != null) {
            modalOnOffEditar();
            GetDepartments();    
          }
        }
      );
    }

  const DeleteDepartments = async () => {
      await new DeparmentService().deleteDepartment(depSelected.id).then(
        (response) => {
          if (response && response != null) {
            modalOnOffEliminar();
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

  //MANEJO DE MODALES
  const seleccionaDep = (accion) => (event) => {
    var rowid = parseInt(
      event.target.parentNode.parentNode.firstElementChild.innerHTML
        .replace("td", "")
        .replace("/td"),
      10
    );
    depSelected.id = rowid;
    depSelected.name = event.target.parentNode.parentNode.innerHTML.split("td")[3].replace('</','').replace('>','');
    accion === "Editar" ? modalOnOffEditar() : modalOnOffEliminar();
  };

  const modalOnOffInsertar = () => {
    setModalInsertar(!modalInsertar);
  };
  const modalOnOffEditar = () => {
    setModalEditar(!modalEditar);
  };
  const modalOnOffEliminar = () => {
    setModalEliminar(!modalEliminar);
  };


  return (
    <div className="App">
      <br />
      <h1>Tabla Departamentos</h1>

      <br />
      <GenericTable
          listTh={listTh}
          listTr={data}
          selectionPopup={seleccionaDep}
      >
      </GenericTable>
          
      <button onClick={() => modalOnOffInsertar()} className="btn btn-success">
        Agregar Departamento
      </button>

      <Fragment>

        <DepartmentModalInsert 
          InsertDeparmentFunction = {InsertDepartments}
          modalOnOffInsertDeparmentFunction = {modalOnOffInsertar}
          OpenModalDeparmentInsert = {modalInsertar}
          HandleChange={handleChange}     
        ></DepartmentModalInsert>

       <DepartmentModalUpdate
          UpdateDeparmentFunction = {UpdateDepartments}
          modalOnOffUpdateDeparmentFunction  = {modalOnOffEditar}
          OpenModalDeparmentUpdate = {modalEditar}
          HandleChange={handleChange}  
          DepartMentId = {depSelected.id} 
          DepartMentName = {depSelected.name}          
       ></DepartmentModalUpdate>

        <DepartmentModalDelete
          DeleteDeparmentFunction = {DeleteDepartments}
          modalOnOffDeleteDeparmentFunction  = {modalOnOffEliminar}
          OpenModalDeparmentDelete = {modalEliminar}
          HandleChange={handleChange}  
          DepartMentId = {depSelected.id}   
          Name = {depSelected.name}      
       ></DepartmentModalDelete>

      </Fragment>
    </div>
  );
}

export default Department;
