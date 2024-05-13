import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-db-remover',
  templateUrl: './db-remover.component.html',
  styleUrl: './db-remover.component.css', 

})
export class DbRemoverComponent implements OnInit{
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];

  books!: any[];


  Message() {
    this.bookRemovedMessage="Book Removed Sucessfully"
  }

  onDeleteBook(bookId:string){
    

    this.Message();
  }

  bookRemovedMessage: string | null = null;
  
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activateRoute:ActivatedRoute
  ){}
  ngOnInit(): void {

    const URL = "https://project-database-1b68a-default-rtdb.firebaseio.com/booksDatabase.json";

    this.httpClient.get<any[]>(URL)
    .subscribe((Response) => {
      this.books = Object.values(Response);
    }
  
  );

  }


 

}

