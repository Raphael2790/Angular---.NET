import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProfessorService } from './professor.service';

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

  public professores : Professor[];
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private professorService : ProfessorService) { 
    this.criarForm();
  }

  ngOnInit() {
    this.carregarProfessores();
  }

  carregarProfessores() {
    this.professorService.getAll().subscribe(
      (professores: Professor[]) => {
      this.professores = professores;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  criarForm() {
    this.TeacherForm = this.fb.group({
      id:[""],
      nome:['', Validators.required],
      //diciplina:['', Validators.required]
    })
  }

  salvarProfessor(professor: Professor) {
    this.professorService.put(professor.id, professor).subscribe(
      (data: Professor) => { 
        console.log(data);
        this.carregarProfessores();
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  teacherSubmit() {
    this.salvarProfessor(this.TeacherForm.value)
  }

  selectTeacher(teacher:Professor) {
    this.SelectedTeacher = teacher;
    this.TeacherForm.patchValue(teacher);
  }

  clearTeacher() {
    this.SelectedTeacher = null;
  }

}
