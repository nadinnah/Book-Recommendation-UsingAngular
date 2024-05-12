import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


interface userTypeInterface {
  user: string;
  }

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit{
  loginForm: FormGroup =new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    userTypeProperty: new FormControl('',[Validators.required]),
  });
  users: userTypeInterface[] = [
    {user: 'Admin'},
    {user: 'Reader'},
  ];

  
  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {}

onLogin(loginForm: FormGroup){
  const URL = "https://project-database-1b68a-default-rtdb.firebaseio.com/usersDatabase.json";

  /* to print the log in credintials in console
  console.log(this.loginForm.value);
*/

/*to login */
  this.httpClient.get(URL, {
    params: new HttpParams()
    .set("orderBy",'"username"')
    .set('equalTo',`"${loginForm.value.username}"`)})
    .subscribe(user =>{
      if (Object.keys(user)?.length>0){
        console.log(user);
      }else{
        console.error("No users found with this username");
      }

  });



}
 
}
