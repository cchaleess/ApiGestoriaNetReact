using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGestoria.Entities
{
    public class Department
    {

        public long Id { get; set; }
        public string Name { get; set; }
        public string UserModificated { get; set; }
        public List<Employee> Employees{ get; set; }
        public DateTime? DateModificated { get; set; }
        public string UserCreated { get; set; }
        public DateTime? DateCreated { get; set; }
    }
}
