using Microsoft.AspNetCore.Mvc;
using SchoolChessClub.DTO;

namespace SchoolChessClub.WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class DrillController : ControllerBase
{
    [HttpGet("{value}")]
    public IActionResult DrillByOption([FromRoute] DrillOption value) => Ok(value);

    [HttpGet("{id:int}")]
    public IActionResult DrillById(int id) => Ok(id);
}
