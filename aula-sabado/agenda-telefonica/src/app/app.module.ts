import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListaComponent } from './lista-telefonica/lista.componente';
import { ListaTelefonica02Component } from './lista-telefonica-02/lista-telefonica-02.component';

@NgModule({
  declarations: [
    AppComponent, ListaComponent, ListaTelefonica02Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
