import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string = 'Anonyumous';

  constructor(public alertController: AlertController) {}

  onInput(event?: any) {
    this.name = event.target.value;
  }

  showAlert() {
    this.alertController
      .create({
        message: `Hello ${this.name}`,
        buttons: ['Thank you'],
      })
      .then((res) => {
        res.present();
      });
  }
}
