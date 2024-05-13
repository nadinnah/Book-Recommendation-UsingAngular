import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page-reader',
  templateUrl: './home-page-reader.component.html',
  styleUrl: './home-page-reader.component.css'
})
export class HomePageReaderComponent {

  
  slide: any[]=[
    {
      url:"/assets/images/ACalamityOfSouls.jpg",
      title:"first slide",
      description:"this is the first slide",
    },
    {
      url:"/assets/images/KingOfSloth.jpg",
      title:"second slide",
      description:"this is the second slide",
    },
    {
      url:"/assets/images/FunnyStory.jpg",
      title:"third slide",
      description:"this is the third slide",
    },
  ];


}


