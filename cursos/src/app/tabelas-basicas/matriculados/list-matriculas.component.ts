import { Component } from '@angular/core';

@Component({
  selector: 'list-cursos',
  templateUrl: './list-matriculas.component.html'
})
export class ListMatriculasComponent {
  cursos = [];
  nomeCurso = 'Angular';
  urlImagem = 'http://angularworkshop.co.il/img/superAngular.jpg';
 
  aluno : any = {
    nome: 'Tiago',
    idade: 23,
    pai: {
      nome:'Alberto',
      idade:45
    }
  }
  constructor(){

  }
}
