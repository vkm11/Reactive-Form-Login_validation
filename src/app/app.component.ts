import { Component } from '@angular/core';
import {FormGroup, FormControl, FormControlName} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive-Form';
  loginForm=new FormGroup({
    user:new FormControl(), // user:new FormControl('vijay')
    password:new FormControl(), //password:new FormControl(123)
  })
  loginUser(){
    console.log(this.loginForm.value)
  }
}
