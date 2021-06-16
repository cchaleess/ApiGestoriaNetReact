using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGestoria.Dto
{
    public class EmployeeDTO
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string UserModificated { get; set; }
        public DateTime? DateModificated { get; set; }
        public string UserCreated { get; set; }
        public DateTime? DateCreated { get; set; }
        public List<DepartmentDTO> Department { get; set; }
        public long DepartmentId { get; set; }
        public string ProfileName { get; set; }
    }
}
