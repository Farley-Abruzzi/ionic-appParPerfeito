import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-match-female',
  templateUrl: './match-female.page.html',
  styleUrls: ['./match-female.page.scss'],
})
export class MatchFemalePage implements OnInit {

  //private cont = 0;
  //private bin = 0;
  private contSlides = 0;

  @ViewChild('mySlider') mySlide: any;

    slides = [
              {
                "img": "assets/img/match-female-1.jpg"
              },
              {   
                "img": "assets/img/match-female-2.jpg"
              },
              {
                "img": "assets/img/match-female-3.jpg"
              },
              {
                "img": "assets/img/match-female-4.jpg"
              },
              {
                "img": "assets/img/match-female-5.jpg"
              },
              {
                "img": "assets/img/match-female-6.jpg"
              },
              {
                "img": "assets/img/match-female-7.jpg"
              },
              {
                "img": "assets/img/match-female-8.jpg"
              },
              {
                "img": "assets/img/match-female-9.jpg"
              },
              {
                "img": "assets/img/match-female-10.jpg"
              },
              {
                "img": "assets/img/match-female-11.jpg"
              },
              {
                "img": "assets/img/match-female-12.jpg"
              },
              {
                "img": "assets/img/match-female-13.jpg"
              },
              {
                "img": "assets/img/match-female-14.jpg"
              },
              {
                "img": "assets/img/match-female-15.jpg"
              }
    ];

  constructor( private navCtrl: NavController ) {  

      var m = this.slides.length, t, i;
  
      // Enquanto for o tamanho do vetor
      while (m) {
        i = Math.floor(Math.random() * m--);
  
        t = this.slides[m];
        this.slides[m] = this.slides[i];
        this.slides[i] = t;
      }
    }
   
  ngOnInit() {
  }
  proxSlide(){
    this.contSlides = this.contSlides + 1;
    if (this.contSlides == 7) {
      this.navCtrl.navigateForward("/incompatible");
      this.contSlides = 0;
    }
  }

  slideNext() {
      this.mySlide.slideNext();
    }
  }

