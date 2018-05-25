
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabelasBasicasModule } from './tabelas-basicas/tabelas-basicas.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth-guard.service';
import { SegurancaService } from './seguranca.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    TabelasBasicasModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, SegurancaService],
  bootstrap: [AppComponent]//,
  //exports:[ListMatriculasComponent]
})
export class AppModule { }
