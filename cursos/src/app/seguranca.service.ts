import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SegurancaService {

    constructor(private _http: HttpClient){

    } 
  
    logar(usuario:string, senha:string) {

    const url = `http://45.55.144.89:3000/users/login`;

    const loginData = { 'email': usuario,
                        'password': senha,
                    };

    const excOne =  this._http.post(url, loginData).map(
        (ret) => {  // success
          console.log('excOne Data = ' + ret);
          const token = ret['token'];
          const lUser = ret['user'];

          localStorage.setItem('TOKEN', token);
          localStorage.setItem('USER', JSON.stringify(lUser) );

          return lUser;
        },
        (error: Error) => { // error
          console.log(error);
          return null;
        }
    );

    return excOne;

  }
}