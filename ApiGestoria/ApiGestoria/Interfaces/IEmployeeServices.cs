using ApiGestoria.Dto;
using ApiGestoria.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGestoria.Interfaces
{
    public interface IEmployeeServices
    {
        public Task<string> GetlistEmployee();
        public Task<int> SaveEmployeeDataBase(EmployeeCreatedDTO employeedto);
        public Task<int> UpdateEmployeeDataBase(EmployeeUpdateDTO employeedto, long employeeId);
        public Task<int> DeleteEmployeeDataBase(long employeeId);

    }
}
