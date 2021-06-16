using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGestoria.Interfaces
{
    public interface ISamlServices 
    {
        public RedirectResult AuthenticationHelper(string  request);
        public IActionResult GetTokenTest();
        public IActionResult Logout();
    }
}
