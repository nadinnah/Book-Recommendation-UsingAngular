import { Component } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { Book } from '../shared/models/Book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css'
})
export class BooksPageComponent {
   books:Book[] = [];

  constructor(private bookService:BookService, private route:ActivatedRoute){}
  
  toggleFavorite(book: Book): void {
    this.bookService.toggleFavorite(book);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const searchTerm = params['searchTerm'];
      const tag = params['tag']; // Access 'tag' using bracket notation
      if (searchTerm) {
        this.books = this.bookService.getAll().filter(book =>
          book.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else if (tag) {
        this.books = this.bookService.getAllBooksByTag(tag);
      } else {
        this.books = this.bookService.getAll();
      }
    });
  }

}
