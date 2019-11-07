import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController} from '@ionic/angular';
import { modelComanda } from 'src/app/Model/comandaModel';
import { LocalStorageService } from '../../services/local-storage.service';
@Component({
  selector: 'app-registro-comanda',
  templateUrl: './registro-comanda.page.html',
  styleUrls: ['./registro-comanda.page.scss'],
})
export class RegistroComandaPage implements OnInit {
comanda: modelComanda;
 comandasarrar: modelComanda[];
  constructor(private modalcn: ModalController,
              private service: LocalStorageService) { }

  ngOnInit() {
    this.comanda = new modelComanda();
    this.comandasarrar = [];
  }
  onSubmitTemplate(){
    this.comanda.fecha = new Date();
    this.comanda.numeroLocal = 23;
    console.log(this.comanda);
    this.comandasarrar = [];
    this.comandasarrar.push(this.comanda);
    console.log(this.comandasarrar);
    this.service.setComandaLocal(this.comandasarrar);

  }
  regresar(){
    this.modalcn.dismiss();
  }

}
