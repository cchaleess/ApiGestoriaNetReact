import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { useState, useEffect ,Fragment } from "react";
import EmployeeTable from '../Tables/EmployeeTable';
import EmployeeService from "../../Services/EmployeeService";
import DepartmentService from "../../Services/DepartmentService";
import EmployeeModalDelete from "../Modals/EmployeeModalDelete";
import EmployeeModalUpdate from "../Modals/EmployeeModalUpdate";
import EmployeeModalInsert from "../Modals/EmployeeModalInsert";

function EmployeePage() {
  const [data, setData] = useState([]);
  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [departament, setDepartament] = useState([]);
  const [listTh, setlistTh] = useState(['Id', 'Nombre', 'Fecha usuario alta','Departamento','Administración']);
  const [titleTable, setTitleTable] = useState('Tabla Empleados');

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
    setModalInsert(!modalInsert);
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
    empSelected.departmentId = parseInt(document.getElementById("comboDepartamento").value);
    await new EmployeeService().insertEmployee(empSelected).then(
      (response) => {
        if (response && response != null) {
          setData(data.concat(response));
          modalOnOffInsert();
          GetEmployees();    
        }
      }
    );
  }

  const UpdateEmployee = async () => {
    await new EmployeeService().updateEmployee(empSelected).then(
      (response) => {
        if (response && response != null) {
          modalOnOffEdit();
          GetEmployees();    
        }
      }
    );
  }

  const DeleteEmployee = async () => {
    await new EmployeeService().deleteEmployee(empSelected.id).then(
      (response) => {
        if (response && response != null) {
          modalOnOffDelete();
          GetEmployees();    
        }
      }
    );
  }

  const GetDepartments = async () => {
    await new DepartmentService().getDepartmentList().then(
      (response) => {
        if (response && response != null) {
          setDepartament(JSON.parse(response)); 
        }
      }
    );
  };

  const seleccionaEmp = (accion) => (event) => {
    var rowid = parseInt(event.target.parentNode.parentNode.firstElementChild.innerHTML.replace("td", "").replace("/td"),10);
    empSelected.id = rowid;
    empSelected.name = event.target.parentNode.parentNode.innerHTML.split("td")[3].replace('</','').replace('>','');
    empSelected.departmentId = parseInt(event.target.parentNode.parentNode.innerHTML.split("td")[5].split(">")[1].split("<"),10);
    accion === "Editar" ? modalOnOffEdit() : modalOnOffDelete();    
  };

  const modalOnOffInsert = () => {
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
      <EmployeeTable
          title={titleTable}
          listTh={listTh}
          listTr={data}
          selectionPopup={seleccionaEmp}
      ></EmployeeTable>

      <button onClick={() => modalOnOff()} className="btn btn-success">
        Agregar Empleado
      </button>

      <Fragment>    
        <EmployeeModalInsert
          InsertEmployeeFunction = {InsertEmployee}
          modalOnOffInsertEmployeeFunction = {modalOnOffInsert}
          OpenModalEmployeeInsert = {modalInsert}
          DepartmentsList = {departament}
          HandleChange={handleChange}     
         ></EmployeeModalInsert>

        <EmployeeModalUpdate
          UpdateEmployeeFunction = {UpdateEmployee}
          modalOnOffEmployeeFunction = {modalOnOffEdit}
          OpenModalEmployeeUpdate = {modalEdit}
          HandleChange={handleChange} 
          DepartmentsList = {departament} 
          CurrentEmployeeName = {empSelected.name}  
          CurrentDepartmentId = {empSelected.departmentId}        
         ></EmployeeModalUpdate>

        <EmployeeModalDelete
          DeleteEmployeeFunction = {DeleteEmployee}
          modalOnOffDeleteEmployeeFunction  = {modalOnOffDelete}
          OpenModalEmployeeDelete = {modalDelete}
          Name = {empSelected.name}   
          HandleChange={handleChange}        
         ></EmployeeModalDelete>

      </Fragment>
    </div>
  );
}
export default EmployeePage;
