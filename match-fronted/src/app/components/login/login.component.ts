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
      sessionStorage.setItem("username", this.user.username);
      sessionStorage.setItem("password", this.user.password);
      this.save();
    } else {
      alert("Introducir los datos correspondientes");
    }
  }

  save() {
    this.user.username = this.form.get('username')?.value;
    this.user.password = this.form.get('password')?.value;

    this.userService.saveUser(this.user).subscribe({
      next: res => {
        alert("Se ha registrado con éxito");
        console.log(res);
        this.router.navigate(['/home'])
      },
      error: err => {
        alert("Ha ocurrido un error");
        console.error("Ha ocurrido un error", err);
      }
    });
  }
}
