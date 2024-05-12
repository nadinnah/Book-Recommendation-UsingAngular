import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


interface bookTagsInterface {
  tagofbook:string;
  }

@Component({
  selector: 'app-db-adder',
  templateUrl: './db-adder.component.html',
  styleUrl: './db-adder.component.css'
})
export class DbAdderComponent implements OnInit{

  bookForm: FormGroup =new FormGroup({
    bookName: new FormControl('',[Validators.required]),
    bookId: new FormControl('',[Validators.required,Validators.minLength(8)]),
    tag: new FormControl('',[Validators.required]),
    imageUrl: new FormControl(''),
    description: new FormControl('',[Validators.required]),
    Author: new FormControl('',[Validators.required]),
    publisher: new FormControl('',[Validators.required]),
    dateOfPublish: new FormControl('',[Validators.required]),
  });

  bookTags: bookTagsInterface[] = [
    {tagofbook: 'Fantasy'},
    {tagofbook: 'Sci-Fi'},
    {tagofbook: 'Romance'},
    {tagofbook: 'Mystrey'},
    {tagofbook: 'Thriller'},
  ];


  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activateRoute:ActivatedRoute
  ){}


  ngOnInit(): void {}

  onAddBook(bookForm: FormGroup){
    this.httpClient.post(
      'https://project-database-1b68a-default-rtdb.firebaseio.com/booksDatabase.json',
      this.bookForm.value
    )
    .subscribe((Response) => console.log(Response));
  }

}
