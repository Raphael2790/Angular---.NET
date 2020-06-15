import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public AlunoForm: FormGroup;
  public titulo = "Alunos";
  public SelectedStudent: Aluno;
  public TextoSimples: string;

  public alunos = [
    { id: 1, nome: "Marta", sobrenome: "Kent", telefone: 54547878 },
    { id: 2, nome: "Rogerio", sobrenome: "Arthur", telefone: 58251445 },
    { id: 3, nome: "Lucas", sobrenome: "Delfino", telefone: 12457896 },
    { id: 4, nome: "Arthur", sobrenome: "Gabriel", telefone: 121412525 },
    { id: 5, nome: "Gabriel", sobrenome: "Silva", telefone: 36362515 },
    { id: 6, nome: "José", sobrenome: "Augusto", telefone: 12015548 }]

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  ngOnInit(): void {
  }

  criarForm() {
    this.AlunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    })
  }

  alunoSubmit() {
    console.log(this.AlunoForm.value)
  }

  selectStudent(aluno: Aluno) {
    this.SelectedStudent = aluno;
    this.AlunoForm.patchValue(aluno);
  }

  clearStudent() {
    this.SelectedStudent = null;
  }



}
