import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Book } from '../shared/models/Book';

@Component({
  selector: 'app-similar-books',
  templateUrl: './similar-books.component.html',
  styleUrl: './similar-books.component.css'
})
export class SimilarBooksComponent {
  @Input() similarBooks: Book[] = [];
}
