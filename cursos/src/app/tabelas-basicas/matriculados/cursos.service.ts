import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CursosService {
    
    constructor(private _http: HttpClient){

    }

    public obterCursos():Observable<Object>{
       // let cursos = ['Angular','VuewJs','React','Elantra'];
        let obersebl = this._http.get('http://localhost:7000/users/curso');
    
        return obersebl;
    }

}