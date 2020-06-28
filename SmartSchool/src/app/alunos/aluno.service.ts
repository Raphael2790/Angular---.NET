import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Aluno } from '../models/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http : HttpClient) { }

  baseUrl = `${environment.UrlPrincipal}/api/aluno`

  getAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.baseUrl}`);
  }

  getById(id: Number) : Observable<Aluno> {
    return this.http.get<Aluno>(`${this.baseUrl}/${id}`);
  }

  post(aluno: Aluno) {
    return this.http.post(`${this.baseUrl}`, aluno);
  }

  put(id : Number, aluno: Aluno) {
    return this.http.put(`${this.baseUrl}/${id}`, aluno);
  }

  delete(id: Number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
