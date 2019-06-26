import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-the-end',
  templateUrl: './the-end.page.html',
  styleUrls: ['./the-end.page.scss'],
})
export class TheEndPage implements OnInit {

  var;

  constructor( private navCtrl: NavController ) { 
    this.var = setTimeout(function(){
      navCtrl.navigateForward("/home") 
    }, 10000);
   }

  ngOnInit() {
    //setTimeout(() => {
    //  this.navCtrl.navigateForward("/home");
    //}, 7000);
  }
  onClick(){
    clearTimeout(this.var);
    this.navCtrl.navigateBack("/home");
  }
}
