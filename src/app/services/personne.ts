import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  private url = `http://localhost:8080/ws/personnes`
  private personnes: Personne[]

  constructor(private http: HttpClient) {
    this.personnes = [
      { id: 1, nom: "Wick", prenom: "John", age: 45 },
      { id: 2, nom: "Dalton", prenom: "Jack", age: 55 },
      { id: 3, nom: "Maggio", prenom: "Candice", age: 27 },
      { id: 4, nom: "Linus", prenom: "Sophie", age: 67 },
    ]
  }

  findAll(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.url)
  }

  save(p: Personne): Observable<Personne> {
    return this.http.post<Personne>(this.url, p)
  }
  remove(ind: number) {
    this.personnes.splice(ind, 1)
  }
}
