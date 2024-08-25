import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../services/book/book.service';
import { Tag } from '../shared/models/Tag';
import { Book } from '../shared/models/Book';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  searchCriteria: { title?: string, author?: string, tag?: string, publisher?: string, price?: number, dateOfPublish?: Date } = {};
  tags: Tag[] = [];
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.tags = this.bookService.getAllTags();
    this.books = this.bookService.getAll(); // For dateOfPublish dropdown
  }

  searchBooks(): void {
    const searchResult: Book[] = this.bookService.searchBooks(this.searchCriteria);
    console.log(searchResult); // You can do something with the search result here
  }
}