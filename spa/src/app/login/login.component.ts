import { Component, OnInit, HostListener } from '@angular/core';
import { PermisosService } from '../servicios/permisos.service';
import { Data } from '../modelos/data';
import { LoginService} from '../servicios/login.service';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

export interface DataLogin {
  data: {
    email: string;
    passw: string;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  dataLogin;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private PermisosService: PermisosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._loginForm();
  }

  _loginForm = () => {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  };

  login(): void {
    this.dataLogin = {
      data: {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
      },
    };

    if (this.dataLogin.data.email == '' || this.dataLogin.data.password == '') {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Porfavor ingrese datos',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      this.loginService.logIn(this.dataLogin).subscribe(
        (Data) => {
          
          if (Data) {
            if (this.PermisosService.decodificarToken(Data.token)) {
              this.router.navigate(['home']);
              //console.log(this.PermisosService.ObtenerUsuarioLogin());
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido',
                showConfirmButton: false,
                timer: 1500,
              });

            }
          } else {
            this.dataLogin.data.email = '';
            this.dataLogin.data.password = '';

            console.log('error')
          }
        },
        (error) => {
          this.dataLogin.data.email = '';
          this.dataLogin.data.password = '';
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Intente de nuevo',
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(error);
        }
      );
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.code === 'Enter') {
      event.preventDefault();
      this.login();
    }
  }
  
}

