using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SmartSchool_WebApi.Data;
using SmartSchool_WebApi.Models;

namespace SmartSchool_WebApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class AlunoController : ControllerBase
  {
    public IRepository _repo { get; }
    public AlunoController(IRepository repo)
    {
      _repo = repo;

    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var result = await _repo.GetAllAlunosAsync(true);
        return Ok(result);

      }
      catch (System.Exception ex)
      {
        return BadRequest($"Aconteceu um erro {ex.Message}");
      }
    }

    [HttpGet("{AlunoId}")]
    public async Task<IActionResult> GetByAlunoId(int AlunoId)
    {
      try
      {
        var result = await _repo.GetAlunoAsyncById(AlunoId, true);
        return Ok(result);

      }
      catch (System.Exception ex)
      {
        return BadRequest($"Aconteceu um erro {ex.Message}");
      }
    }

    [HttpGet("{ByDisciplina/{disciplinaId}}")]
    public async Task<IActionResult> GetByDisciplinaId(int DisciplinaId)
    {
      try
      {
        var result = await _repo.GetAlunosAsyncByDisciplinaId(DisciplinaId, true);
        return Ok(result);

      }
      catch (System.Exception ex)
      {
        return BadRequest($"Aconteceu um erro {ex.Message}");
      }
    }

    [HttpPost]
    public async Task<IActionResult> Post(Aluno model)
    {
      try
      {
        _repo.Add(model);
        if(await _repo.SaveChangesAsync())
        {
          return Ok(model);
        }

      }
      catch (System.Exception ex)
      {
        return BadRequest($"Aconteceu um erro {ex.Message}");
      }

      return BadRequest();
    }

    [HttpPut("{alunoId}")]
    public async Task<IActionResult> Put(int alunoId, Aluno model)
    {
      try
      {
        var aluno = await _repo.GetAlunoAsyncById(alunoId, false);
        if(aluno == null) return NotFound("Aluno não encontrado");

        _repo.Update(model);

        if(await _repo.SaveChangesAsync())
        {
          return Ok(model);
        }

      }
      catch (System.Exception ex)
      {
        return BadRequest($"Aconteceu um erro {ex.Message}");
      }

      return BadRequest();
    }

    [HttpDelete("{alunoId}")]
    public async Task<IActionResult> Delete(int alunoId)
    {
      try
      {
        var aluno = await _repo.GetAlunoAsyncById(alunoId, false);
        if(aluno == null) return NotFound("Aluno não encontrado");

        _repo.Delete(aluno);

        if(await _repo.SaveChangesAsync())
        {
          return Ok("Deletado");
        }

      }
      catch (System.Exception ex)
      {
        return BadRequest($"Aconteceu um erro {ex.Message}");
      }

      return BadRequest();
    }
  }
}