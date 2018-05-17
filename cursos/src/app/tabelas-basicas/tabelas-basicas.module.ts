import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from  '@angular/http';

import { CommonModule } from '@angular/common';
import { ListMatriculasComponent } from './matriculados/list-matriculas.component';
import { Matriculados2Component } from './matriculados2/matriculados2.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [ListMatriculasComponent, Matriculados2Component],
  exports:[ListMatriculasComponent,Matriculados2Component]
})
export class TabelasBasicasModule { }
