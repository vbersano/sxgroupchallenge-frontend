import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Empresa } from '../model/Empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllEmpresa(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>('https://sxgroupchallenge-backend.herokuapp.com/empresa', this.token)
  }

  postEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>('https://sxgroupchallenge-backend.herokuapp.com/empresa', empresa, this.token)
  }

  putEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>('https://sxgroupchallenge-backend.herokuapp.com/empresa', empresa, this.token)
  }

  deleteEmpresa(id: number) {
    return this.http.delete(`https://sxgroupchallenge-backend.herokuapp.com/empresa/${id}`, this.token)
  }

  getByIdEmpresa(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`https://sxgroupchallenge-backend.herokuapp.com/empresa/${id}`, this.token)
  }

}

