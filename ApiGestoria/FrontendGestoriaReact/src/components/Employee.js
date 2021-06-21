import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { useState, useEffect ,Fragment } from "react";
import GenericTable from './GenericTable';
import EmployeeService from "../Services/EmployeeService";
import DepartmentService from "../Services/DepartmentService";
import EmployeeModalDelete from "../components/Modals/EmployeeModalDelete";
import EmployeeModalUpdate from "../components/Modals/EmployeeModalUpdate";
import EmployeeModalInsert from "../components/Modals/EmployeeModalInsert";

function Employee() {
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [departamento, setDepartamento] = useState([]);

  const [listTh, setlistTh] = useState(['Id', 'Nombre', 'Fecha usuario alta','Departamento','Administración']);

  const [empSelected, setEmpSelected] = useState({
    id: 0,
    name: "",
    departmentId: 0,
    departmentname: "",
    photofilename: "",
    userCreated: "",
  });

  useEffect(() => {
    GetEmployees();
    GetDepartments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpSelected({
      ...empSelected,
      [name]: value,
    });
  };

  const modalOnOff = () => {
    setModalInsertar(!modalInsertar);
  };

  const GetEmployees = async () => {

    await new EmployeeService().getEmployeeList().then(
      (response) => {
        if (response && response != null) {
          debugger;
          setData(JSON.parse(JSON.parse(response)));      
        }
      }
    );
  }

const InsertEmployee = async () => {
    await new EmployeeService().insertEmployee(empSelected).then(
      (response) => {
        if (response && response != null) {
          setData(data.concat(response));
          modalOnOffInsertar();
          GetEmployees();    
        }
      }
    );
  }

const UpdateEmployee = async () => {
    await new EmployeeService().updateEmployee(empSelected).then(
      (response) => {
        if (response && response != null) {
          modalOnOffEditar();
          GetEmployees();    
        }
      }
    );
  }

const DeleteEmployee = async () => {
    await new EmployeeService().deleteEmployee(empSelected.id).then(
      (response) => {
        if (response && response != null) {
          modalOnOffEliminar();
          GetEmployees();    
        }
      }
    );
  }

  //COMBOBOX DEPARTAMENTOS
  const GetDepartments = async () => {
    await new DepartmentService().getDepartmentList().then(
      (response) => {
        if (response && response != null) {
          setDepartamento(JSON.parse(response.data)); 
        }
      }
    );
  };

  const seleccionaEmp = (accion) => (event) => {
    var rowid = parseInt(
      event.target.parentNode.parentNode.firstElementChild.innerHTML
        .replace("td", "")
        .replace("/td"),
      10
    );
    empSelected.id = rowid;
    empSelected.name = event.target.parentNode.parentNode.innerHTML.split("td")[3].replace('</','').replace('>','');
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
      <h1>Tabla Empleados</h1>
      <br />
      <GenericTable
          listTh={listTh}
          listTr={data}
          selectionPopup={seleccionaEmp}
      ></GenericTable>

      <button onClick={() => modalOnOff()} className="btn btn-success">
        Agregar Empleado
      </button>

      <Fragment>    
        <EmployeeModalInsert
          InsertEmployeeFunction = {InsertEmployee}
          modalOnOffInsertEmployeeFunction = {modalOnOffInsertar}
          OpenModalEmployeeInsert = {modalInsertar}
          HandleChange={handleChange}     
         ></EmployeeModalInsert>


        <EmployeeModalUpdate
          UpdateEmployeeFunction = {UpdateEmployee}
          mmodalOnOffEmployeeFunction = {modalOnOffEditar}
          OpenModalEmployeeUpdate = {modalEditar}
          HandleChange={handleChange}  
          EmployeeId = {empSelected.id} 
          EmployeeName = {empSelected.name}          
         ></EmployeeModalUpdate>






        <EmployeeModalDelete
          DeleteEmployeeFunction = {DeleteEmployee}
          modalOnOffDeleteEmployeeFunction  = {modalOnOffEliminar}
          OpenModalEmployeeDelete = {modalEliminar}
          Name = {empSelected.name}   
          HandleChange={handleChange}        
       ></EmployeeModalDelete>


      </Fragment>
    </div>
  );
}
export default Employee;
