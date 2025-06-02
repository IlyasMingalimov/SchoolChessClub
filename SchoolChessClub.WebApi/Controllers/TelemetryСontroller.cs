using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SchoolChessClub.System.Interface;

namespace SchoolChessClub.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TelemetryСontroller(ITime time) : ControllerBase
    {
        [HttpGet("Ping")]
        [AllowAnonymous]
        public IActionResult Ping() 
        {
            return new ContentResult
            {
                ContentType = "text/html",
                Content = $"Current time UTC {time.GetIsoCurrentTime()}"
            };
        }
    }
}
