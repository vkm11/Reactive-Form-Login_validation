import { Component } from '@angular/core';
import {FormGroup, FormControl, FormControlName, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive-Form';
  loginForm=new FormGroup({
    user:new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]), // user:new FormControl('vijay')
    password:new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(8)]), //password:new FormControl(123)
  })

  loginUser(){
    console.log(this.loginForm.value)
  }

  get user(){
    return this.loginForm.get("user");
  }

  get password(){
    return this.loginForm.get('password');
  }

}
