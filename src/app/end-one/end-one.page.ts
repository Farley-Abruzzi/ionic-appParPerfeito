import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-end-one',
  templateUrl: './end-one.page.html',
  styleUrls: ['./end-one.page.scss'],
})
export class EndOnePage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
    //setTimeout(() => {
    //  this.navCtrl.navigateForward("/end-two");
    //}, 7000);
  }
  onClick() {
    this.navCtrl.navigateForward("/end-two");
  }

} 
