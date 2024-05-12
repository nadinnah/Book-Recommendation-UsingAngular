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

  next(){
    this.currentSlide= (this.currentSlide + 1) % this.slides.length;
  }

  prev(){
    this.currentSlide= (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  jumpToSlide (index: number) {
    this.currentSlide = index;
    }
}
