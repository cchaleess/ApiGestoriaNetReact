using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGestoria.Entities
{
    public class Employee
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long DepartmentId { get; set; }
        public Department Department { get; set; }
        public string Photofilename { get; set; }
        public string UserModificated { get; set; }
        public DateTime? DateModificated { get; set; }
        public string UserCreated { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DownDate { get; set; }
    }
}
