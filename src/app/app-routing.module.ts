import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {path:"", redirectTo:"dashboard", pathMatch:"full"},
  {path:"professores", component: ProfessoresComponent},
  {path:"alunos", component: AlunosComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"perfil", component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
