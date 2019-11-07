import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController} from '@ionic/angular';
import { modelComanda } from 'src/app/Model/comandaModel';
import { LocalStorageService } from '../../services/local-storage.service';
@Component({
  selector: 'app-detalle-comanda',
  templateUrl: './detalle-comanda.page.html',
  styleUrls: ['./detalle-comanda.page.scss'],
})
export class DetalleComandaPage implements OnInit {
@Input() comanda:modelComanda;
  constructor(private modalcon: ModalController) { }

  ngOnInit() {
    console.log(this.comanda);
  }
  regresar(){
this.modalcon.dismiss();
  }

}
