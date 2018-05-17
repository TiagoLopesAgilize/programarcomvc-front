
import {Component} from '@angular/core';
//template literal 2016
@Component({
 selector:'meu-primeiro-componente',
 template:`<span>
          Eu sou o componente 01 na raiz abaixo do root
          componente app component.
          </span>

          <app-lista-telefonica-02></app-lista-telefonica-02>
          `
})
export class ListaComponent {
 contructor(){

 }
}
