import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public TeacherForm: FormGroup;
  public titulo = "Professores";
  public SelectedTeacher: Professor;
  public SimplesTexto: string;

  public teachers =[
    {id:1,nome:"Miguel", materia:"Português"},
    {id:2,nome:"João", materia:"Matemática"},
    {id:3,nome:"Antonio", materia:"Fisica"},
    {id:4,nome:"Hugo", materia:"História"}
  ]

  constructor(private fb: FormBuilder) { 
    this.criarForm();
  }

  ngOnInit() {
  }

  criarForm() {
    this.TeacherForm = this.fb.group({
      nome:['', Validators.required],
      materia:['', Validators.required]
    })
  }

  teacherSubmit() {
    console.log(this.TeacherForm.value)
  }

  selectTeacher(teacher:Professor) {
    this.SelectedTeacher = teacher;
    this.TeacherForm.patchValue(teacher);
  }

  clearTeacher() {
    this.SelectedTeacher = null;
  }

}
