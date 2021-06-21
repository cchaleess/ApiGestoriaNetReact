import React, { useState ,Fragment } from "react";

function EmployeeTable({ title, listTh , listTr , selectionPopup}) {
   return (
    <Fragment>
      <h1>{title}</h1>
      <table className="table table-bordered">
      <thead>
            {listTh === "[]" || listTh === null || listTh === "" || listTh.lenght === 0
                ? "no hay cabecera"
                : listTh.map((Thvalue) => (  
                    <Fragment>
                        <th>{Thvalue}</th>
                    </Fragment>        
            ))}
      </thead>
      <tbody>
            {listTr === "[]" || listTr === null || listTr === "" || listTr.lenght === 0
                ? "no hay datos Empleados a mostrar "
            : listTr.map((TrValue) => (           
                <tr key={TrValue.id}>
                <td>{TrValue.id}</td>
                <td>{TrValue.name}</td> 
                <td>{TrValue.userCreated}</td>   
                <td>{TrValue.departmentname}</td>        
                <td>
                    <button
                    className="btn btn-primary"
                    onClick={selectionPopup("Editar")}
                    >
                    Editar
                    </button>{" "}
                    <button
                    className="btn btn-danger"
                    onClick={selectionPopup("Eliminar")}
                    >
                    Eliminar
                    </button>
                </td>
                </tr>
        ))}
        </tbody>
     </table>
  </Fragment>
  );
}
export default EmployeeTable;