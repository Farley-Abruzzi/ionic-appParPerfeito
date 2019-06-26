import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
    //setTimeout(() => {
    //  this.navCtrl.navigateForward("/end");
    //}, 8000);
  }
  onClick() {
    this.navCtrl.navigateForward("/end");
  }
  
}
