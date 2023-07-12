import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  loginForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    phone: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{10}$')]),
    message: new FormControl('',[Validators.required, Validators.maxLength(15)]),
  })
  loginUser(){
    console.log(this.loginForm.value)
  }

  get name(){
    return this.loginForm.get('name');
  }
  get address(){
    return this.loginForm.get('address');
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  get phone(){
    return this.loginForm.get('phone');
  }
  get message(){
    return this.loginForm.get('message');
  }
}
