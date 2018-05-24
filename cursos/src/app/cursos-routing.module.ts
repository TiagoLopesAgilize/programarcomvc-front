import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ListMatriculasComponent } from './tabelas-basicas/matriculados/list-matriculas.component';
import { Matriculados2Component } from './tabelas-basicas/matriculados2/matriculados2.component';

const routes: Routes = [
  { path: '', component:  Matriculados2Component  } ,
  { path: 'matriculas', component: ListMatriculasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }