import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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
  public modalRef: BsModalRef;

  public teachers =[
    {id:1,nome:"Miguel", materia:"Português"},
    {id:2,nome:"João", materia:"Matemática"},
    {id:3,nome:"Antonio", materia:"Fisica"},
    {id:4,nome:"Hugo", materia:"História"}
  ]
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService) { 
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
