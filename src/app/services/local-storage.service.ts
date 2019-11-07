import { Injectable } from '@angular/core';
import { modelComanda } from '../Model/comandaModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  public async setComandaLocal(comanda: modelComanda[]){
    let comandaslocal: modelComanda[];
    comandaslocal = await this.getComandaLocal();
    console.log(comandaslocal);
    // tslint:disable-next-line: triple-equals
    
    if (comandaslocal == null) {
        localStorage.setItem('comandas', JSON.stringify(comanda));
    } else {
        comandaslocal = comandaslocal.concat(comanda);
        await this.clearComandaLocal();
        localStorage.setItem('comandas', JSON.stringify(comandaslocal));
    }
    }
    public async getComandaLocal(){
        return JSON.parse(localStorage.getItem('comandas'));
    }
    public async clearComandaLocal(){
        localStorage.removeItem('comandas');
    }
}
