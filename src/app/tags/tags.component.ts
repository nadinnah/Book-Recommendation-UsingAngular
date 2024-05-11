import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { BookService } from '../services/book/book.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{

  @Input() 
  bookPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags: Tag[]=[];
  
  constructor(private bookService:BookService){}
  
  ngOnInit() {
    if(!this.bookPageTags)
    this.tags= this.bookService.getAllTags();
  }

}
