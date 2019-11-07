import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { modelComanda } from 'src/app/Model/comandaModel';
import { LocalStorageService } from '../../services/local-storage.service';
import {ModalController} from '@ionic/angular';
import { RegistroComandaPage } from '../../modal/registro-comanda/registro-comanda.page';
import { DetalleComandaPage } from '../../modal/detalle-comanda/detalle-comanda.page';

@Component({
  selector: 'app-list-comanda',
  templateUrl: './list-comanda.page.html',
  styleUrls: ['./list-comanda.page.scss'],
})
export class ListComandaPage implements OnInit {
comandas: modelComanda[];
public sum: number = 0;
constructor(private servicelocal: LocalStorageService,
              private mcontroller: ModalController) { }

  async ngOnInit() {
    this.comandas =  await this.servicelocal.getComandaLocal();
    console.log(this.comandas);
    await this.sumaTotal(this.comandas);
  }
  
  async abrirModal(){
    console.log('abrir modal');
    const modal = await this.mcontroller.create({
      component: RegistroComandaPage
    });
    await modal.present();
  }
  segmentChanged(event){

  }
  async detail(comanda: modelComanda){
    const detalle = await this.mcontroller.create({
    component:DetalleComandaPage,
    componentProps:{
      comanda: comanda
    }
    });
    await detalle.present();
  }
  async sumaTotal(totalcomandas: modelComanda[]){
    this.sum = 0;
    // for(let com of totalcomandas){
    //   this.sum += com.total;
    // }
    totalcomandas.forEach(data => {
      console.log(data.total);
      this.sum += data.total;
    });
    console.log('total de la suma', this.sum);
  }
}
