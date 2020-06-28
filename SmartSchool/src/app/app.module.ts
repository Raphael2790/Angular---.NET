import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   declarations: [
      AppComponent,
      ProfessoresComponent,
      AlunosComponent,
      PerfilComponent,
      DashboardComponent,
      NavComponent,
      TituloComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      ModalModule.forRoot(),
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
