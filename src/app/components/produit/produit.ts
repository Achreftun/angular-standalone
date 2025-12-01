import { Component, input } from '@angular/core';
import { Produit } from '../../model/produit';

@Component({
  selector: 'app-produit',
  imports: [],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class ProduitComponent {
  produit = input.required<Produit>()
}
