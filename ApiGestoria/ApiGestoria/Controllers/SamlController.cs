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

namespace ApiGestoria.Controllers
{
    [ApiController]
    public class SamlController : ControllerBase
    {

        private readonly IConfiguration _configuration;

        public SamlController(IConfiguration configuration)

        {
            _configuration = configuration;
        }

        [HttpPost("saml")]
        public ActionResult AuthenticationHelper()
        {      
          string token = "";
          XmlDocument xml = new XmlDocument();
          xml.LoadXml(Request.Form["wresult"]);
          XmlNamespaceManager mgr = new XmlNamespaceManager(xml.NameTable);
          mgr.AddNamespace("saml", "urn:oasis:names:tc:SAML:2.0:assertion");
          XmlElement attributeStatementNode = (XmlElement)xml.SelectSingleNode("//saml:AttributeStatement", mgr);
          
          XmlDocument xml3 = new XmlDocument();
          xml3.LoadXml("<document>"+attributeStatementNode.InnerXml+"</document>"); 
          XmlNode root = xml3.FirstChild;

          UserSamLoginInfo UserSamLoginInfo = new UserSamLoginInfo();
          UserSamLoginInfo.name = root.ChildNodes[3].InnerText;
          UserSamLoginInfo.surname = root.ChildNodes[2].InnerText;

          TokenService TokenService = new TokenService();
          token = TokenService.BuildToken(_configuration ,UserSamLoginInfo);

          string url = "http://localhost:3000/token=" + token + "&nameUser=" + UserSamLoginInfo.name;
          RedirectResult redirectResult = new RedirectResult(url, true);
          return redirectResult;
        }

        //metodo de prueba que sera eliminado//
        [HttpGet("TokenTest")]
        public IActionResult GetTokenTest()
        {
            string token = "";
            UserSamLoginInfo UserSamLoginInfo = new UserSamLoginInfo();
            UserSamLoginInfo.name = "aels";
            UserSamLoginInfo.surname = "pepe";
            TokenService TokenService = new TokenService();
            token = TokenService.BuildToken(_configuration, UserSamLoginInfo);
            return new JsonResult(token);
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
