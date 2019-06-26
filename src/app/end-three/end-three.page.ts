import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-end-three',
  templateUrl: './end-three.page.html',
  styleUrls: ['./end-three.page.scss'],
})
export class EndThreePage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
    //setTimeout(() => {
    //  this.navCtrl.navigateBack("/register");
    //}, 7000);
  }
  onClick() {
    this.navCtrl.navigateForward("/register");
  }

}
