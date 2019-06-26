import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.page.html',
  styleUrls: ['./thanks.page.scss'],
})
export class ThanksPage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
    //setTimeout(() => {
    //this.navCtrl.navigateForward("/the-end");
    //}, 7000);
  }
  onClick() {
    this.navCtrl.navigateForward("/the-end");
  }

}
