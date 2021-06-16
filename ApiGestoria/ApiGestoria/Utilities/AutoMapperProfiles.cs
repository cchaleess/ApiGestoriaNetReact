using ApiGestoria.dto;
using ApiGestoria.Dto;
using ApiGestoria.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace ApiGestoria.Utilities
{
    public class AutoMapperProfiles :Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<DepartmentCreatedDTO, Department>().ReverseMap();
            CreateMap<DepartmentUpdateDTO, Department>().ReverseMap();
            CreateMap<EmployeeCreatedDTO, Employee>().ReverseMap();
            CreateMap<EmployeeUpdateDTO, Employee>().ReverseMap();
        }
    }
}
