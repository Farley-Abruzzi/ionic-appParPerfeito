import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private navCtrl: NavController ){ 
  }

  async navigator( nav ){

    if(nav == 'male'){
      await this.navCtrl.navigateForward("/match");
      }
    else if(nav == 'female'){
      await this.navCtrl.navigateForward("/match-female");
      }
    }
 }


