using ApiGestoria.DbContexts;
using ApiGestoria.Dto;
using ApiGestoria.Entities;
using ApiGestoria.Interfaces;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGestoria.Services
{
    public class EmployeeServices : IEmployeeServices
    {

        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        private readonly IConnectionSqlServices _ConnectionSqlServices;

        public EmployeeServices(ApplicationDbContext context, IMapper mapper , IConnectionSqlServices ConnectionSqlServices)

        {
            _context = context;
            _mapper = mapper;
            _ConnectionSqlServices = ConnectionSqlServices;
        }

        public async Task<string> GetlistEmployee()
        {
            string query = "";
            try
            {
                query = @"SELECT dbo.EMPLOYEE.Id, dbo.EMPLOYEE.Name, DepartmentId, dbo.EMPLOYEE.UserCreated ,dbo.EMPLOYEE.DateCreated , Photofilename , dbo.DEPARTMENT.name as departmentname 
                        FROM dbo.EMPLOYEE INNER JOIN dbo.DEPARTMENT ON dbo.EMPLOYEE.DepartmentId = dbo.DEPARTMENT.Id ";

                return await _ConnectionSqlServices.GetDataFormatJsonFromSql(query);
            }
            catch (Exception ex)
            {
                string error = ex.ToString();
                return "";
            }
        }

        public async Task<int> SaveEmployeeDataBase(EmployeeCreatedDTO employeeCreatedDto)
        {
            string query = "";
            try
            {
                query = String.Format("INSERT INTO dbo.EMPLOYEE (Name, DepartmentId, UserCreated , DateCreated ,Photofilename)" +
                                       "VALUES ('{0}','{1}','{2}','{3}','{4}')", employeeCreatedDto.Name, employeeCreatedDto.DepartmentId,employeeCreatedDto.UserCreated, 
                                        DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss.fff") , employeeCreatedDto.PhotoFileName);

                return await _ConnectionSqlServices.CrudDataToSql(query);
            }
            catch (Exception ex)
            {
                string error = ex.ToString();
                return -1;
            }
        }

        public async Task<int> UpdateEmployeeDataBase(EmployeeUpdateDTO employeeUpdateDto, long employeeId)
        {
            string query = "";
            try
            {
                if (employeeUpdateDto.Id != employeeId)
                {
                    return -3;
                }

                query = String.Format("UPDATE dbo.EMPLOYEE SET Name = '{0}' , DepartmentId = {1}, " +
                                                         " photofilename = '{2}' , UserModificated = '{3}' , " +
                                                         " DateModificated = GETDATE() WHERE id = {4} ",
                                                          employeeUpdateDto.Name, employeeUpdateDto.DepartmentId, 
                                                          employeeUpdateDto.PhotoFileName, employeeUpdateDto.UserModificated, 
                                                          employeeUpdateDto.Id);

                return await _ConnectionSqlServices.CrudDataToSql((query));
            }
            catch (Exception ex)
            {
                string error = ex.ToString();
                return -1;
            }
        }

        public async Task<int> DeleteEmployeeDataBase(long employeeId)
        {
            try
            {
                var existEmployee = await _context.Employee.AnyAsync(x => x.Id == employeeId);
                if (existEmployee)
                {
                    _context.Remove(new Employee() { Id = employeeId });
                    return await _context.SaveChangesAsync();
                }
                else
                {
                    return -2;
                }
            }
            catch (Exception ex)
            {
                string error = ex.ToString();
                return -1;
            }
        }
    }
}
