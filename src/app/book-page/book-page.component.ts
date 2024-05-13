import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Book } from '../shared/models/Book';

@Component({
  selector: 'app-book-page-number',
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export class BookPageComponent implements OnInit {

  book!: Book;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  toggleFavorite(book: Book): void {
    this.bookService.toggleFavorite(book);
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const bookId = params['id']; // Access 'id' using bracket notation

      if (bookId) {
        this.book = this.bookService.getBookById(Number(bookId));
      }
    });
  }
}
