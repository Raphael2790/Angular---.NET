import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = "Professores";
  public SelectedTeacher: string;

  public teachers =[
    {id:1,name:"Miguel", materia:"Português"},
    {id:2,name:"João", materia:"Matemática"},
    {id:3,name:"Antonio", materia:"Fisica"},
    {id:4,name:"Hugo", materia:"História"}
  ]

  selectTeacher(teacher:any) {
    this.SelectedTeacher = teacher.name;
  }

  clearTeacher() {
    this.SelectedTeacher = "";
  }

  constructor() { }

  ngOnInit() {
  }

}
