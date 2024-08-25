import { Component } from '@angular/core';
import { ReaderService } from '../services/book/reader.service';
import { Reader } from '../shared/models/Book';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
    reader: Reader | null = null;
  
    constructor(private readerService: ReaderService) { }
  
    ngOnInit(): void {
      const foundReader = this.readerService.getReaderById(1); // Fetch reader data by ID (e.g., ID of 1)

    if (foundReader) {
      this.reader = foundReader;
    } else {
      this.reader = null; // Handle the case where reader is not found
    }}
  }

