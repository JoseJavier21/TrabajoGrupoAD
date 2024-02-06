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

  comprobar() {
    if (this.form.valid) {
      var enteredUsername = this.form.get('username')?.value;
      var enteredPassword = this.form.get('password')?.value;

      this.userService.getUsers().subscribe({
        next: users => {
          const userFound = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

          if (userFound) {
            sessionStorage.setItem("username", enteredUsername);
            sessionStorage.setItem("password", enteredPassword);
            console.log("pasa a qui")
            this.router.navigate(['/api/home']);
          } else {
            alert("Credenciales incorrectas");
          }
        },
        error: err => {
          alert("Ha ocurrido un error al obtener la lista de usuarios");
          console.error("Ha ocurrido un error", err);
        }
      });
    } else {
      alert("Introducir los datos correspondientes");
    }
  }
}
