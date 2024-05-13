import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


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

  errorMessage: string | null = null;

  isAdmin: boolean = false;
  
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activateRoute:ActivatedRoute
  ){}

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
      const userArray = Object.values(user);
      const matchedUser = userArray.find((user: any) => user.username === loginForm.value.username);
if(matchedUser){
      if (matchedUser.password === loginForm.value.password && matchedUser.userTypeProperty === loginForm.value.userTypeProperty){

        /* print username w password in console
        console.log(user);
        */
          if (matchedUser.userTypeProperty ==="Admin") {
                  this.errorMessage = null;
                  this.isAdmin=true;
                 
              this.router.navigate(['/','home-page-admin'],{
                relativeTo: this.activateRoute
              });
          }else{
                this.errorMessage = null;
                this.isAdmin=false;
               
                this.router.navigate(['/','home-page-reader'],{
                  relativeTo: this.activateRoute
                });
          }
        
      }else{
        this.errorMessage = "Incorrect username/password";
        console.error("Incorrect username/password");
      }
    }else{
      this.errorMessage = "No users found with this username";
      console.error("No users found with this username");
    }

  });



}
 
}
