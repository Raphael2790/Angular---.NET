import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = "Professores";
  public SelectedTeacher: Professor;

  public teachers =[
    {id:1,nome:"Miguel", materia:"Português"},
    {id:2,nome:"João", materia:"Matemática"},
    {id:3,nome:"Antonio", materia:"Fisica"},
    {id:4,nome:"Hugo", materia:"História"}
  ]

  selectTeacher(teacher:Professor) {
    this.SelectedTeacher = teacher;
  }

  clearTeacher() {
    this.SelectedTeacher = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
