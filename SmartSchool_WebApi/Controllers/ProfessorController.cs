using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SmartSchool_WebApi.Data;
using SmartSchool_WebApi.Models;

namespace SmartSchool_WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfessorController : ControllerBase
    {
      public IRepository _repo {get;}

      public ProfessorController(IRepository repo)
      {
          _repo = repo;
      }

      [HttpGet]
      public async Task<IActionResult> Get()
      {
        try
        {
            var result = await _repo.GetAllProfessoresAsync(true);
            return Ok(result);
        }
        catch (System.Exception ex)
        {
            
            return BadRequest($"Aconteceu um erro:{ex.Message}");
        }
      }

      [HttpGet("{professorId}")]
      public async Task<IActionResult> GetByProfessorId(int professorId)
      {
        try
        {
            var result = await _repo.GetProfessorAsyncById(professorId, true);
            return Ok(result);
        }
        catch (System.Exception ex)
        {
            
            return BadRequest($"Aconteceu um erro:{ex.Message}");
        }
      }

      [HttpGet("ByAlunoId/{alunoId}")]
      public async Task<IActionResult> GetProfessoresByAlunoId(int alunoId)
      {
        try
        {
            var result = await _repo.GetProfessoresAsyncByAlunoId(alunoId, true);
            return Ok(result);
        }
        catch (System.Exception ex)
        {
            
            return BadRequest($"Aconteceu um erro:{ex.Message}");
        }
      }

      [HttpPost]
      public async Task<IActionResult> Post(Professor model)
      {
        try
        {
            _repo.Add(model);

            if(await _repo.SaveChangesAsync()){
              
              return Ok(model);

            }
        }
        catch (System.Exception ex)
        {
            
            return BadRequest($"Aconteceu um erro:{ex.Message}");
        }

        return BadRequest();
      }

      [HttpPut("{professorId}")]
      public async Task<IActionResult> Put(int professorId ,Professor model)
      {
        try
        {
            var professor = await _repo.GetProfessorAsyncById(professorId, false);

            if(professor == null) return NotFound("Professor não encontrado");

            _repo.Update(model);

            if(await _repo.SaveChangesAsync()){
              
              return Ok(model);

            }
        }
        catch (System.Exception ex)
        {
            
            return BadRequest($"Aconteceu um erro:{ex.Message}");
        }

        return BadRequest();
      }

      [HttpDelete("{professorId}")]
      public async Task<IActionResult> Delete(int professorId ,Professor model)
      {
        try
        {
            var professor = await _repo.GetProfessorAsyncById(professorId, false);

            if(professor == null) return NotFound("Professor não encontrado");

            _repo.Delete(model);

            if(await _repo.SaveChangesAsync()){
              
              return Ok("Deletado com sucesso");

            }
        }
        catch (System.Exception ex)
        {
            
            return BadRequest($"Aconteceu um erro:{ex.Message}");
        }

        return BadRequest("Não foi possível deletar o professor");
      }
    }
}