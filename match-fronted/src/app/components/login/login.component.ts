import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../../model/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup

  user: Usuario = {
    id: 0,
    username: '',
    password: '',
  }

  

constructor(private userService: UsuarioService, private formBuilder: FormBuilder){}



comprobar(){

  if(this.user.username != null && this.user.password != null) {
    sessionStorage.setItem("username", this.user.username)
    sessionStorage.setItem("password", this.user.password)
    this.save()
  }else{
    alert("Introducir los datos correspondientes")
  }

}

  save(){
    this.user.username = this.form.get('username')?.value
    this.user.password = this.form.get('password')?.value
    this.userService.saveUser(this.user).subscribe({
      next: res =>{
        alert("Se ha registrado con exito")
        console.log(res)
      },
      error: err =>{
        alert("Ha ocurrido un error")
        console.log("Ha ocurrido un error" + err)
      }
    })
    
  }
  
}
