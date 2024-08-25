import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page-reader',
  templateUrl: './home-page-reader.component.html',
  styleUrl: './home-page-reader.component.css'
})

export class HomePageReaderComponent {

  
  slide: any[]=[
    {
      url:"/assets/images/25bestfantasybooks.jpg",
      title:"first slide",
      description:"this is the first slide",
    },
    {
      url:"/assets/images/romance-books.jpg",
      title:"second slide",
      description:"this is the second slide",
    },
    {
      url:"/assets/images/series-books.jpg",
      title:"third slide",
      description:"this is the third slide",
    },
  ];


}


