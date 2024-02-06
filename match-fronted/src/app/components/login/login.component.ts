import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../model/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  user: Usuario = {
    id: 0,
    username: '',
    password: '',
  };

  constructor(private userService: UsuarioService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

// nofunciona por los datos los comprueba con session storage

  comprobar() {

      var enteredUsername = this.form.get('username')?.value;
      var enteredPassword = this.form.get('password')?.value;
      this.userService.getUsers().subscribe({
        next: users => {
          const userFound = users.find(user => user.username === enteredUsername);

          if (userFound) {
            sessionStorage.setItem("username", enteredUsername);
            sessionStorage.setItem("password", enteredPassword);
            this.router.navigate(['/home']);
          } else {
            alert("Credenciales incorrectas");
          }
        },
        error: err => {
          alert("Ha ocurrido un error al obtener la lista de usuarios");
          console.error("Ha ocurrido un error", err);
        }
      });
  }
}
