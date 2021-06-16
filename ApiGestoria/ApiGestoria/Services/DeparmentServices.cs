using ApiGestoria.DbContexts;
using ApiGestoria.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiGestoria.Interfaces;
using ApiGestoria.dto;
using AutoMapper;
using ApiGestoria.Dto;

namespace ApiGestoria.Services
{
    public class DeparmentServices : IDeparmentServices
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        private readonly IConnectionSqlServices _ConnectionSqlServices;

        public DeparmentServices(ApplicationDbContext context, IMapper mapper, IConnectionSqlServices ConnectionSqlServices)

        {
            _context = context;
            _mapper = mapper;
            _ConnectionSqlServices = ConnectionSqlServices;
        }

        public async Task<string> GetlistDeparments()
        {
            string query = "";
            try
            {
                query = @"SELECT Id, Name from dbo.DEPARTMENT";
                return await _ConnectionSqlServices.GetDataFormatJsonFromSql(query);
            }
            catch(Exception ex)
            {
                string error = ex.ToString();
                return "";
            }
        }

        public async Task<int> SaveDepartmentDataBase(DepartmentCreatedDTO DepartmentDto)
        {
            string query = "";
            try
            {
                query = String.Format("INSERT INTO dbo.DEPARTMENT (Name,UserCreated,DateCreated) VALUES('{0}', '{1}' ,'{2}' )", 
                                       DepartmentDto.Name, DepartmentDto.UserCreated, DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss.fff"));
                return await _ConnectionSqlServices.CrudDataToSql(query);
            }
            catch (Exception ex)
            {
                string error = ex.ToString();
                return -1;
            } 
        }

        public async Task<int> UpdateDepartmentDataBase(DepartmentUpdateDTO departmentDto , long deparmentId)
        {
            string query = "";
            try
            {
                if (departmentDto.Id != deparmentId)
                {
                    return -3;
                }

                query = String.Format("UPDATE dbo.Department SET Name = '{0}' , UserModificated = '{1}' , DateModificated = GETDATE() WHERE Id = {2} ",
                        departmentDto.Name, departmentDto.UserModificated, departmentDto.Id);

                return await _ConnectionSqlServices.CrudDataToSql((query));     
            }
            catch (Exception ex)
            {
                string error = ex.ToString();
                return -1;
            }   
        }

        public async Task<int> DeleteDepartmentDataBase(long deparmentId)
        {
            try
            {
                var existDepartment = await _context.Department.AnyAsync(x => x.Id == deparmentId);

                if (existDepartment)
                {
                    _context.Remove(new Department() { Id = deparmentId });
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
