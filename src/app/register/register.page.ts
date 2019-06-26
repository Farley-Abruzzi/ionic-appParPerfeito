import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonInput, ToastController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( private navCtrl: NavController, public keyboard: Keyboard, private toastCtrl: ToastController ) { }
  
  //this.Keyboard.hideFormAcessoryBar(true);
  
  usuario = {
    nome: '',
    telefone: ''
  };

  @ViewChild('myInput') myInput: IonInput;

  ngOnInit() {
  }
  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  onClick() { 
    this.navCtrl.navigateForward("/thanks");
    this.presentToast('Cadastrado com sucesso!');
    console.log(this.usuario);

  }
  show() {
    this.myInput.setFocus();
  }
  showTheHide() {
    this.myInput.setFocus();

    setTimeout(() => {
      this.keyboard.hide();
    }, 3000);
  }
}


