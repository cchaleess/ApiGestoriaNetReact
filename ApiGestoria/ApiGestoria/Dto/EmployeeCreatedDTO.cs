using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGestoria.Dto
{
    public class EmployeeCreatedDTO
    {
        public string Name { get; set; }
        public long DepartmentId { get; set; }
        public string PhotoFileName { get; set; }
        public string UserCreated { get; set; }
    }
}
