import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  imports: [],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css',
})
export class CompteurComponent {
  valeur = 0

  incrementer() {
    this.valeur++
  }
  decrementer() {
    this.valeur--
  }
}
