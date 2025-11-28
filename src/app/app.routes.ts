import { Routes } from '@angular/router';
import { ObservableComponent } from './components/observable/observable';
import { SubjectComponent } from './components/subject/subject';
import { ComputedComponent } from './components/computed/computed';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { AdresseComponent } from './components/adresse/adresse';
import { StagiaireComponent } from './components/stagiaire/stagiaire';
import { CalculComponent } from './components/calcul/calcul';
import { TableauComponent } from './components/tableau/tableau';

// ici on définit les routes de nos composants
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'tableau/:indice', component: TableauComponent },
    { path: 'adresse', component: AdresseComponent },
    { path: 'calcul/:op', component: CalculComponent },
    { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
    { path: 'observable', component: ObservableComponent },
    { path: 'subject', component: SubjectComponent },
    { path: 'computed', component: ComputedComponent },
];
