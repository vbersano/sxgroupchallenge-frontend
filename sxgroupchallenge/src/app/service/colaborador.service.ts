import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Colaborador } from '../model/Colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllColaboradores(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>("https://sxgroupchallenge-backend.herokuapp.com/colaborador", this.token)
  }

  postColaborador(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>("https://sxgroupchallenge-backend.herokuapp.com/colaborador", colaborador, this.token)
  }

  putColaborador(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.put<Colaborador>('https://sxgroupchallenge-backend.herokuapp.com/colaborador', colaborador, this.token)
  }

  deleteColaborador(id: number) {
    return this.http.delete(`https://sxgroupchallenge-backend.herokuapp.com/colaborador/${id}`, this.token)
  }

  getByIdColaborador(id: number): Observable<Colaborador> {
    return this.http.get<Colaborador>(`https://sxgroupchallenge-backend.herokuapp.com/colaborador/${id}`, this.token)
  }

  getByNomeColaborador(nome: string): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(`https://sxgroupchallenge-backend.herokuapp.com/colaborador/nome/${nome}`, this.token)
  }

}
