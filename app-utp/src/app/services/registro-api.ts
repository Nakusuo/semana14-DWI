import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiRespuesta, Registro } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroApiService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // POST: Guardar registro
  guardarRegistro(registro: Registro): Observable<ApiRespuesta> {
    return this.http.post<ApiRespuesta>(`${this.baseUrl}/registros`, registro);
  }

  // GET: Listar registros
  listarRegistros(): Observable<Registro[]> {
    return this.http.get<Registro[]>(`${this.baseUrl}/registros`);
  }
}
