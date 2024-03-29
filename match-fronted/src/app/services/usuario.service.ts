import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient, private router: Router){}

  private url: string = "http://localhost:8080/api/home"
  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  saveUser(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.url, user, {headers: this.httpHeaders});
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }
}
