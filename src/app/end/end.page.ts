import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-end',
  templateUrl: './end.page.html',
  styleUrls: ['./end.page.scss'],
})
export class EndPage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
    //setTimeout(() => {
    //  this.navCtrl.navigateForward("/end-one");
    //}, 7000);
  }
  onClick() {
    this.navCtrl.navigateForward("/end-one");
  }

}
