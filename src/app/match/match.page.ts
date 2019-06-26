import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  //private cont = 0;
  //private bin = 0;
  private contSlides = 0;
  
  @ViewChild('mySlider') mySlide: any;

    slides = [
              {
                'img': 'assets/img/match1.jpg'
              },
              {
                'img': 'assets/img/match2.jpg'
              },
              {
                'img': 'assets/img/match3.jpg'
              },
              {
                'img': 'assets/img/match4.jpg'
              },
              {
                'img': 'assets/img/match5.jpg'
              },
              {
                'img': 'assets/img/match6.jpg'
              },
              {
                'img': 'assets/img/match7.jpg'
              },
              {
                'img': 'assets/img/match8.jpg'
              },
              {
                'img': 'assets/img/match9.jpg'
              },
              {
                'img': 'assets/img/match10.jpg'
              },
              {
                'img': 'assets/img/match11.jpg'
              },
              {
                'img': 'assets/img/match12.jpg'
              },
              {
                'img': 'assets/img/match13.jpg'
              },
              {
                'img': 'assets/img/match14.jpg'
              },
              {
                'img': 'assets/img/match15.jpg'
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
