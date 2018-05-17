import { Component } from '@angular/core';

@Component({
  selector: 'app-matriculados2',
  templateUrl: './matriculados2.component.html',
  styleUrls: ['./matriculados2.component.css']
})
export class Matriculados2Component {

  alunos = ['Tiago','Lopes', 'Aline', 'fernanda'];
  constructor() {

  }

  add(){
    this.alunos.push('Novo aluno');
  }
}
