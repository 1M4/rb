import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { RestProviderService } from '../services/rest-provider.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-estatal',
  templateUrl: './estatal.page.html',
  styleUrls: ['./estatal.page.scss'],
})
export class EstatalPage implements OnInit {

  private title: string;
  private id: number;
  private section = 'clas';
  private clasificacion: any;
  private calendario: any;
  private jornadaSeleccionada: any;

  constructor(private route: ActivatedRoute, private router: Router, private provider: RestProviderService,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController, private location: Location) {

    this.route.queryParams.subscribe(params => {
      this.title = this.router.getCurrentNavigation().extras.state.title;
      this.id = this.router.getCurrentNavigation().extras.state.id;
    });
  }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...'
    });

    await loading.present().then(() => {
      this.getClasificacion(this.id);
      this.getCalendario(this.id);
    });
  }

  segmentChanged(event: any) {
    this.section = event.detail.value;
  }

  private async getClasificacion(id: number) {
    await this.provider.getClasificacion(id).subscribe(data => {
      this.clasificacion = data;
    });
  }

  private async getCalendario(id: number) {
    await this.provider.getCalendario(id).subscribe(data => {
      this.calendario = data;
      this.loadingCtrl.dismiss();

    }, error => {
      console.error(error);
      this.loadingCtrl.dismiss().then(() => {
        this.presentAlert();
      });
    });
  }

  private async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Error al conectar con el servidor',
      message: 'Ha ocurrido un error al intentar conectar con el servidor. Por favor, inténtalo de nuevo o revisa tu conexión a Internet.',
      // cssClass: 'clase-alert',
      buttons: [{
        text: 'Ok',
        role: 'cancel',
        handler: () => {
          this.location.back();
        }
      }]
    });
    alert.present();
  }

  ionViewDidLeave() {
    this.loadingCtrl.dismiss();
    this.alertCtrl.dismiss();
  }

}
