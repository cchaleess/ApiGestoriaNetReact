using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGestoria.dto
{
    public class DepartmentCreatedDTO
    {
        public string Name { get; set; }
        public string UserModificated { get; set; }
        public DateTime? DateModificated { get; set; }
        public string UserCreated { get; set; }
        public DateTime? DateCreated { get; set; }

    }
}
