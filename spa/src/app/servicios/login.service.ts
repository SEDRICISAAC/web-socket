import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PermisosService } from './permisos.service';
import { WebServiceService } from './web.service';
import { Data } from './../modelos/data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private url: string;

  constructor(
    private http: HttpClient,
    private servidor: WebServiceService,
    private permisos: PermisosService
  ) {
    this.url = servidor.obtenerUrl();
   }



logIn(dataLogin): Observable<Data> {
  return this.http.post<Data>(`${this.url}login`, dataLogin);
 }
  
}
