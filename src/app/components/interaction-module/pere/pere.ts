import { Component, viewChildren } from '@angular/core';
import { FilsComponent } from '../fils/fils';

@Component({
  selector: 'app-pere',
  imports: [FilsComponent],
  templateUrl: './pere.html',
  styleUrl: './pere.css',
})
export class PereComponent  {

  fils = viewChildren(FilsComponent)
  nom = 'John Wick'
  maVille = 'Marseille'

  tousLesEnfants() {
    this.fils().forEach(f => console.log(f.ville()))
  }
}
