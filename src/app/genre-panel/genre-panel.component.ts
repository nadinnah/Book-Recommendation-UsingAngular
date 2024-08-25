import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { Book } from '../shared/models/Book';


@Component({
  selector: 'app-genre-panel',
  templateUrl: './genre-panel.component.html',
  styleUrls: ['./genre-panel.component.css']
})
export class GenrePanelComponent {
  romanceBooks: Book[] = [];
  fantasyBooks: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.romanceBooks = this.bookService.getAllBooksByTag('Romance');
    this.fantasyBooks = this.bookService.getAllBooksByTag('Fantasy');
  }
}
