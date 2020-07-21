import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PermisosService } from '../servicios/permisos.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  usuarioLogin: any ;

  constructor(
    private router: Router ,
    private permisosService: PermisosService ){ //crear los permisos
    this.usuarioLogin = this.permisosService.ObtenerUsuarioLogin(); //arreglarle
  } 


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // console.log(this.userLogin);
    if (this.usuarioLogin) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
