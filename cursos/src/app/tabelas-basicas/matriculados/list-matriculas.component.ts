import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {CursosService} from './cursos.service';

@Component({
  selector: 'list-cursos',
  templateUrl: './list-matriculas.component.html',
  providers: [CursosService] 
})
export class ListMatriculasComponent implements OnInit {
  cursos = [];
  nomeCurso = 'Angular';
  urlImagem = 'http://angularworkshop.co.il/img/superAngular.jpg';
  idUser: string;
  aluno : any = {
    nome: 'Tiago',
    idade: 23,
    pai: {
      nome:'Alberto',
      idade:45
    }
  }
  constructor(private cursosService: CursosService, 
              private route: ActivatedRoute){

  }

  public listarCursos(){
   // let cursos = new CursosService();
    this.cursosService.obterCursos().subscribe((data: any) => {
      console.log(data); 
      this.cursos = data;
    });;
  }

  ngOnInit(){
    this.route.params.subscribe( params => {
        this.idUser = params['id'];
      }
    );
  }
  
}
