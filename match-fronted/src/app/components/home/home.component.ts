import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/Usuario';


interface Person {
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: Usuario[] = [];
  currentUser: Usuario | null = null;
  matches: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Utilizar el servicio para obtener la lista de usuarios
    this.usuarioService.getUsers().subscribe(
      (data) => {
        this.users = data;
        // Supongamos que el usuario actual es el primero por defecto
        this.currentUser = this.users.length > 0 ? this.users[0] : null;
      },
      (error) => {
        console.error('Error al obtener la lista de usuarios desde el backend', error);
      }
    );
  }

  /*selectPerson(selectedPerson: Person): void {
    // Verificar si ya hay un match con la persona seleccionada
    const existingMatch = this.matches.find(match => match.id === selectedPerson.id);

    if (existingMatch) {
      // Si ya hay un match, eliminarlo (deseleccionar la persona)
      this.matches = this.matches.filter(match => match.id !== selectedPerson.id);
    } else {
      // Si no hay un match, verificar si la persona seleccionada también te ha seleccionado
      const hasMatch = Math.random() < 0.5; // Simulación aleatoria de un match

      if (hasMatch) {
        this.matches.push(selectedPerson);
      }
    }
  }*/

}
