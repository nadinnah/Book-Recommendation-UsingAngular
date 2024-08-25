import { Component, Input } from '@angular/core';
import {faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
  @Input () slides: any[]=[];
  currentSlide=0;
  faArrowRight= faArrowRight;
  faArrowLeft= faArrowLeft;
  hidden= false;
  next(){
    let currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide (currentSlide);
  }

  prev(){
    let currentSlide = 
    (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.jumpToSlide (currentSlide);
  }

    jumpToSlide (index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, 300);
}
}
