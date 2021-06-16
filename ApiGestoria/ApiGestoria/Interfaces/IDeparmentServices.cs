using ApiGestoria.dto;
using ApiGestoria.Dto;
using ApiGestoria.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGestoria.Interfaces
{
    public interface IDeparmentServices
    {
        public Task<string> GetlistDeparments();
        public Task<int> SaveDepartmentDataBase(DepartmentCreatedDTO departmentdto);
        public Task<int> UpdateDepartmentDataBase(DepartmentUpdateDTO departmentDto, long deparmentId);
        public Task<int> DeleteDepartmentDataBase(long deparmentId);
    }
}
