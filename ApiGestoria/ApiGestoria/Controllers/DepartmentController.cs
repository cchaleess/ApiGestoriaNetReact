using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using ApiGestoria.dto;
using ApiGestoria.Services;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using ApiGestoria.Interfaces;
using ApiGestoria.Dto;

namespace ApiGestoria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class DepartmentController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IDeparmentServices _deparmentServices;

        public DepartmentController(IDeparmentServices deparmentServices ,IConfiguration configuration)

        {
            _configuration = configuration;
            _deparmentServices = deparmentServices;
        }

        [HttpGet]
        public async Task<JsonResult> Get()
        {      
            return new JsonResult (await _deparmentServices.GetlistDeparments());
        }

        [HttpPost]
        public async Task<JsonResult> Post(DepartmentCreatedDTO departmentdto)
        {
            return new JsonResult(await _deparmentServices.SaveDepartmentDataBase(departmentdto));
        }

        [HttpPut("{id}")]
        public async Task<JsonResult> Put(DepartmentUpdateDTO departmentdto , long id)
        {
            return new JsonResult(await _deparmentServices.UpdateDepartmentDataBase(departmentdto, id));
        }

        [HttpDelete("{id}")]
        public async Task<JsonResult> Delete(long id)
        {
            return new JsonResult(await _deparmentServices.DeleteDepartmentDataBase(id));
        }
    }
}
