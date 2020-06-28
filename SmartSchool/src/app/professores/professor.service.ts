import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Professor } from '../models/Professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

constructor(private http : HttpClient) { }

  baseUrl = `${environment.UrlPrincipal}/api/professor`;

  getAll() : Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.baseUrl}`);
  }

  getById(id: Number) : Observable<Professor> {
    return this.http.get<Professor>(`${this.baseUrl}/${id}`);
  }

  post(professor: Professor) {
    return this.http.post(`${this.baseUrl}`, professor);
  }

  put(id:Number, professor: Professor) {
    return this.http.put(`${this.baseUrl}/${id}`, professor);
  }

  delete(id: Number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
