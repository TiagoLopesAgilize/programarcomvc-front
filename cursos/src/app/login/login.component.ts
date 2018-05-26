import { Component, OnInit } from '@angular/core';
import { SegurancaService } from '../seguranca.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resultado : any;
  usuario: string;
  senha: string;
  cursos: any[];
  isOpen = false;
  nomeCursoSelecionado = '';

  constructor(private segurancaService: SegurancaService,
              private router: Router){

  }
    
  ngOnInit(){

  }

  efetuarLogin(){
    let flag = false;
  
    this.segurancaService.logar(this.usuario, this.senha).subscribe(
      (ret) => {
        console.log(ret);
        this.router.navigate([`matriculas/${ret._id}`]);
      }
    );
    console.log(`logado: ${flag}`);
    return flag;
  }
  
 filterCursos(event:any){
  const query = event.target.value;
  if(event && query) {
    this.pesquisarCursos();
    this.isOpen = true;
    this.cursos = this.cursos.filter(function (el) {
        return (el.nome.toLowerCase().indexOf(query.toLowerCase()) > -1
          || el.codigo.toString().indexOf(query) > -1);
      }.bind(this));
  } else {
    this.isOpen = false 
  }

 }

 private pesquisarCursos(){

    this.cursos = [{codigo:12, nome:'Angular'},
              {codigo:3, nome:'React'},
              {codigo:1, nome:'VueJs'}]

  
 }

 filterCursosArrow() { 
   if(!this.isOpen) {
    this.pesquisarCursos();
    this.isOpen = true;
   } else {
     this.isOpen = false;
   }
 }

 filterSelectItem(item: any){
  console.log(item);
  
  this.nomeCursoSelecionado += `${item.nome}  -  ` ;
 }

 selectFilter(flag:boolean) {
  this.cursos = [];
 }
}
