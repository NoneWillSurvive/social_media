using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using way_of_samurai_back.Models;

namespace way_of_samurai_back.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class AuthController : ControllerBase
    {
        public static readonly Auth _authData = new Auth
        {
            // Email = "kab2000@bk.ru"
            Messages = new string[]
            {
                "qwe"
            },
            ResultCode = 0,
            Data = new AuthUser()
            {
                Email = "kab2000@bk.ru",
                Id = 9163,
                Login = "chebyrator"
            },
            FieldsErrors = Array.Empty<string>()
        };

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [Produces("application/json", "text/plain")]
        public async Task<ActionResult<Auth>> GetAuthInfo()
        {
            return Ok(_authData);
        }

    }
}