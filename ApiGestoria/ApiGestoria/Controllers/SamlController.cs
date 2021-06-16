using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml;
using ApiGestoria.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.Configuration;
using ApiGestoria.dto;
using Microsoft.AspNetCore.Authentication.WsFederation;
using System.Xml.Linq;
using ApiGestoria.Interfaces;

namespace ApiGestoria.Controllers
{
    [ApiController]
    public class SamlController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        private readonly ISamlServices _samlServices;

        public SamlController(IConfiguration configuration , ISamlServices SamlServices)

        {
            _configuration = configuration;
            _samlServices = SamlServices;
        }

        [HttpPost("saml")]
        public ActionResult AuthenticationHelper()
        {
            return _samlServices.AuthenticationHelper(Request.Form["wresult"].ToString());
        }

        //metodo de prueba que sera eliminado//
        [HttpGet("TokenTest")]
        public IActionResult GetTokenTest()
        {
            return _samlServices.GetTokenTest();
        }

        [Authorize]
        [HttpGet("saml")]
        public IActionResult AuthenticateUser()
        {
            return Ok(User);
        }

        [HttpGet("logout")]
        public IActionResult LogOut()
        {
            return SignOut(
                new Microsoft.AspNetCore.Authentication.AuthenticationProperties
                {
                    RedirectUri = "https://becomebackend.azurewebsites.net"
                },
                CookieAuthenticationDefaults.AuthenticationScheme,
                WsFederationDefaults.AuthenticationScheme);
        }        
    }
}
