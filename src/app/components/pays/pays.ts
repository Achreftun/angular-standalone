import { Component } from '@angular/core';
import { VilleComponent } from '../ville/ville';

@Component({
  selector: 'app-pays',
  imports: [VilleComponent],
  templateUrl: './pays.html',
  styleUrl: './pays.css',
})
export class PaysComponent {
  villes = ['Marseille', 'Lyon', 'Paris']
  updateVille(ville: string, i: number) {
    this.villes[i] = ville
    // const newValues = [...this.villes]
    // newValues[i] = ville
    // this.villes = newValues
  }
}
