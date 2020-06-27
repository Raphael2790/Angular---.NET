using System.Collections.Generic;

namespace SmartSchool_WebApi.Models
{
  public class Aluno
  {
    public Aluno()
    {
        
    }
    public Aluno(int id, string name, string sobrenome, string telefone)
    {
      this.Id = id;
      this.Name = name;
      this.Sobrenome = sobrenome;
      this.Telefone = telefone;

    }
    public int Id { get; set; }
    public string Name { get; set; }
    public string Sobrenome { get; set; }
    public string Telefone { get; set; }
    public IEnumerable<AlunoDisciplina> AlunosDisciplinas { get; set; }
  }
}