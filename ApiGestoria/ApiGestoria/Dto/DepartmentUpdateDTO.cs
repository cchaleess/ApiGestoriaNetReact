using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGestoria.Dto
{
    public class DepartmentUpdateDTO
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string UserModificated { get; set; }    
    }

}
