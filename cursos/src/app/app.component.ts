import { Component } from '@angular/core';

import { SegurancaService } from './seguranca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SegurancaService] 
})
export class AppComponent {
  
  title = 'app';
  resultado : any;
  usuario: string;
  senha: string;

  constructor(private segurancaService:SegurancaService){

  }
    

  efetuarLogin(){
    let flag = false;
  
    this.segurancaService.logar(this.usuario, this.senha).subscribe(
      (ret) => console.log(ret)
    );
    console.log(`logado: ${flag}`);
    return flag;
  }

}
