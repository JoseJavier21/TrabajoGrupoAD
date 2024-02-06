import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
  people: Person[] = [];
  currentUser: Person | null = null;
  matches: Person[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Hacer una solicitud al backend para obtener la lista de personas
    this.http.get<Person[]>('url_del_backend/personas').subscribe(
      (data) => {
        this.people = data;
        // Supongamos que el usuario actual es el primero por defecto
        this.currentUser = this.people.length > 0 ? this.people[0] : null;
      },
      (error) => {
        console.error('Error al obtener la lista de personas desde el backend', error);
      }
    );
  }

  selectPerson(selectedPerson: Person): void {
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
  }

}
