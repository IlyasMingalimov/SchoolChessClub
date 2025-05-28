using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;

namespace SchoolChessClub.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TelemetryСontroller : ControllerBase
    {
        [HttpGet("Ping")]
        [AllowAnonymous]
        public IActionResult Ping() 
        {
            return new ContentResult
            {
                ContentType = "text/html",
                Content = $"Current time UTC {DateTime.UtcNow.ToString(CultureInfo.InvariantCulture)}"
            };
        }
    }
}
