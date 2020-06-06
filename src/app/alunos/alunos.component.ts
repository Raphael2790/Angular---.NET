import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  title = "Alunos"

  public alunos = [
    {name:"Marta"}, 
    {name:"Rogerio"}, 
    {name:"Lucas"}, 
    {name:"Arthur"}, 
    {name:"Gabriel"}, 
    {name:"José"}]

  constructor() { }

  ngOnInit(): void {
  }

}
