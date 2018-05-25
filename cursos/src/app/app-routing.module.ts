import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ListMatriculasComponent } from './tabelas-basicas/matriculados/list-matriculas.component';
import { Matriculados2Component } from './tabelas-basicas/matriculados2/matriculados2.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {  path: '', component: LoginComponent } ,
  { canActivate: [AuthGuard], path: 'matriculas', component: ListMatriculasComponent },
  { canActivate: [AuthGuard], path: 'matriculas/:id', component: ListMatriculasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
