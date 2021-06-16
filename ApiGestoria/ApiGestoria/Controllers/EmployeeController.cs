using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using ApiGestoria.dto;
using ApiGestoria.Services;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using ApiGestoria.Interfaces;
using ApiGestoria.Dto;
using ApiGestoria.Entities;
using System.Collections.Generic;

namespace ApiGestoria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class EmployeeController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IEmployeeServices _employeeServices;
        public EmployeeController(IEmployeeServices employeeServices, IConfiguration configuration)

        
        {
            _configuration = configuration;
            _employeeServices = employeeServices;
        }

        [HttpGet]
        public async Task<JsonResult> Get()
        {
            return new JsonResult(JsonConvert.SerializeObject(await _employeeServices.GetlistEmployee()));
        }

        [HttpPost]
        public async Task<JsonResult> Post(EmployeeCreatedDTO employeecreateddto)
        {
            return new JsonResult(await _employeeServices.SaveEmployeeDataBase(employeecreateddto));
        }

        [HttpPut("{id}")]
        public async Task<JsonResult> Put(EmployeeUpdateDTO employeeuopdatedto, long id)
        {
            return new JsonResult(await _employeeServices.UpdateEmployeeDataBase(employeeuopdatedto, id));
        }

        [HttpDelete("{id}")]
        public async Task<JsonResult> Delete(int id)
        {
            return new JsonResult(await _employeeServices.DeleteEmployeeDataBase(id));
        }
    }
}
