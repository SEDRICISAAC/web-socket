import { Injectable } from '@angular/core';
import  jwt_decode from 'jwt-decode';
import { Usuario } from '../modelos/usuario';
import { Data} from './../modelos/data';



@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  data: Data;
  private token: string;
  private usuarioLogin: Usuario;
  private sessionId: string;
  constructor() {
    this.token = null;
    this.usuarioLogin = null;
  }




  decodificarToken(token: string): boolean{
    const decoded = jwt_decode(token);
    if (decoded){
      this.token = token || null;
      this.usuarioLogin = decoded.data || null;
      this.sessionId = this.usuarioLogin.sessionId || null;
      delete this.usuarioLogin.sessionId;
      delete this.usuarioLogin.password;
      return true;
    }else{
      return false;
    }
  }


  obtenerToken(): string {
    return this.token;
  }

  destruirToken(): void {
    this.token = null;
  }

  ObtenerUsuarioLogin(): object {
    return this.usuarioLogin;
  }

  obtenerSessionLogin(): string{
    return this.sessionId;
  }



}