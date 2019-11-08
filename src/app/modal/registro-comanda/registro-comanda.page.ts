import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController} from '@ionic/angular';
import { modelComanda } from 'src/app/Model/comandaModel';
import { LocalStorageService } from '../../services/local-storage.service';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { delay } from 'q';

@Component({
  selector: 'app-registro-comanda',
  templateUrl: './registro-comanda.page.html',
  styleUrls: ['./registro-comanda.page.scss'],
})
export class RegistroComandaPage implements OnInit {
comanda: modelComanda;
 comandasarrar: modelComanda[];
 mensaje:string;
  constructor(private modalcn: ModalController,
              private service: LocalStorageService,
              private camera: Camera,
              private file: File) { }

  ngOnInit() {
    this.comanda = new modelComanda();
    this.comandasarrar = [];
  }
  async onSubmitTemplate(){
    try{

      this.comanda.fecha = new Date();
      this.comanda.numeroLocal = 23;
      console.log(this.comanda);
      this.comandasarrar = [];
      this.comandasarrar.push(this.comanda);
      console.log(this.comandasarrar);
      this.service.setComandaLocal(this.comandasarrar);
    this.mensaje = 'Comanda creada con éxito';
    await delay(2000);
    this.modalcn.dismiss();
    }catch(error){
      console.log(error);
      this.mensaje = 'Error al crear la comanda';
    }
  }
  regresar(){
    this.modalcn.dismiss();
  }
  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then(data => {
      //let bs64img = await this.ConvertBase64(data);
      //let base64image = 'data:image/jpeg;base64,' + bs64img;
      console.log(data);
      this.comanda.imagen = 'data:image/jpeg;base64,' + data;
      console.log(this.comanda.imagen);
    }, (err) => {
      console.log(err);
    });

  }

  private async ConvertBase64(path:string):Promise<any>{
   let filename = path.substring(path.lastIndexOf('/')+1);
   path = path.substring(0,path.lastIndexOf('/')+1);
   let response: any = await new Promise(resolve=>{
     this.file.readAsDataURL(path,filename).then(base64file=>{
      resolve(base64file);
     });
   });
   console.log(response);
   return response;
  }

}
