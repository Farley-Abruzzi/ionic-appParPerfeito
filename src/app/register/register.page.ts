import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonInput } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( private navCtrl: NavController, public keyboard: Keyboard ) { }
  
  //this.Keyboard.hideFormAcessoryBar(true);
  
  usuario = {
    nome: '',
    telefone: ''
  };

  @ViewChild('myInput') myInput: IonInput;

  ngOnInit() {
  }
  onClick() { 
    this.navCtrl.navigateForward("/thanks");
    console.log(this.usuario);
  }
  show() {
    this.myInput.setFocus();
  }
  showTheHide() {
    this.myInput.setFocus();

    setTimeout(() => {
      this.keyboard.hide();
    }, 5000);
  }
}


