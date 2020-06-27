namespace SmartSchool_WebApi.Models
{
  public class Professor
  {
    public Professor()
    {
        
    }
    public Professor(int id, string nome, string materia)
    {
      this.Id = id;
      this.Nome = nome;
      this.Materia = materia;

    }
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Materia { get; set; }
  }
}