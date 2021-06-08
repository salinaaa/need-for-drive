import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  loginForm: any = {
    login: '',
    password: '',
  }

  printForm(){
    console.log(this.loginForm);
}

  constructor() { }

  ngOnInit(): void {

  }

}
