import { Component } from '@angular/core';
import {CursosService} from './cursos.service';
@Component({
  selector: 'list-cursos',
  templateUrl: './list-matriculas.component.html',
  providers: [CursosService] 
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
  constructor(private cursosService: CursosService){

  }

  public listarCursos(){
   // let cursos = new CursosService();
    this.cursosService.obterCursos().subscribe((data: any) => {
      console.log(data); 
      this.cursos = data;
    });;
  }
  
}
