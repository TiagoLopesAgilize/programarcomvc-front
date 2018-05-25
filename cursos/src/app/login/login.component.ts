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
}
