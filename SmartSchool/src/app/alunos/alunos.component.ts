import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlunoService } from './aluno.service';
import { error } from 'protractor';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public AlunoForm: FormGroup;
  public modalRef: BsModalRef
  public titulo = "Alunos";
  public SelectedStudent: Aluno;
  public TextoSimples: string;

  public alunos:Aluno[];

   
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private alunoService : AlunoService) {
    this.criarForm();
  }

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.alunoService.getAll().subscribe(
      (alunos : Aluno[]) => {
        this.alunos = alunos;
      },
      (error:any) => {
          console.log(error)
      }
    )
  }

  criarForm() {
    this.AlunoForm = this.fb.group({
      id:[''],
      name: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    })
  }

  salvarAluno(aluno: Aluno) {
    this.alunoService.put(aluno.id , aluno ).subscribe(
      (data: Aluno) => {
        console.log(data);
        this.carregarAlunos();
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  alunoSubmit() {
    this.salvarAluno(this.AlunoForm.value);
  }

  selectStudent(aluno: Aluno) {
    this.SelectedStudent = aluno;
    this.AlunoForm.patchValue(aluno);
  }

  clearStudent() {
    this.SelectedStudent = null;
  }



}
