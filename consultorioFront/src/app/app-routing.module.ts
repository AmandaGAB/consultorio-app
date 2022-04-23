import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MedicosComponent} from "./components/medicos/medicos.component";
import {CadastrarMedicoComponent} from "./components/cadastrar-medico/cadastrar-medico.component";

const routes: Routes = [
  {path: 'medicos', component: MedicosComponent},
  {path: 'medicos/cadastrar/:id', component: CadastrarMedicoComponent},
  {path: 'pacientes', component: MedicosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
