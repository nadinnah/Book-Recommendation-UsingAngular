import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit{
  loginForm: FormGroup =new FormGroup({
    username: new FormControl('',[Validators.required]),
  });
  ngOnInit(): void {
  
  }

}
