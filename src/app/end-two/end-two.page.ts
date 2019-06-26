import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-end-two',
  templateUrl: './end-two.page.html',
  styleUrls: ['./end-two.page.scss'],
})
export class EndTwoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    //setTimeout(() => {
    //  this.navCtrl.navigateForward("/end-three");
    //}, 7000);
  }
  onClick() {
    this.navCtrl.navigateForward("end-three");
  }

}
