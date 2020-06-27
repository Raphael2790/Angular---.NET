using Microsoft.AspNetCore.Mvc;

namespace SmartSchool_WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfessorController : ControllerBase
    {
      [HttpGet]
      public IActionResult Get()
      {
        try
        {
            return Ok("Vinicius");
        }
        catch (System.Exception ex)
        {
            
            return BadRequest($"Aconteceu um erro:{ex.Message}");
        }
      }
    }
}