import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = "Alunos";
  public SelectedStudent: string;

  public alunos = [
    {id:1,name:"Marta", sobrenome:"Kent", telefone:"54547878"}, 
    {id:2,name:"Rogerio", sobrenome:"Arthur", telefone:"58251445"}, 
    {id:3,name:"Lucas", sobrenome:"Delfino", telefone:"12457896"}, 
    {id:4,name:"Arthur", sobrenome:"Gabriel", telefone:"121412525"}, 
    {id:5,name:"Gabriel", sobrenome:"Silva", telefone:"36362515"}, 
    {id:6,name:"José", sobrenome:"Augusto", telefone:"12015548"}]

  selectStudent(aluno:any) {
    this.SelectedStudent = aluno.name
  }

  clearStudent(){
    this.SelectedStudent = ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
