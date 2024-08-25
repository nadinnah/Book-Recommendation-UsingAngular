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
  similarBooks: Book[] = [];
  constructor(
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private router: Router

  ) { }

  navigateBackToBooksPage() {
    this.router.navigate(['/books-page']); // Navigate to the route of your books page
  }
  toggleFavorite(book: Book): void {
    this.bookService.toggleFavorite(book);
  }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const bookId = Number(params['id']); // Convert 'id' parameter to a number

      if (bookId) {
        this.book = this.bookService.getBookById(bookId);

        if (this.book && this.book.tags && this.book.tags.length > 0) {
          const tag = this.book.tags[0]; // Use the first tag of the current book
          this.similarBooks = this.bookService.getSimilarBooksByTag(tag, this.book.id);
        }
      }
    });
  }
}
