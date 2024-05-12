import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  
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
