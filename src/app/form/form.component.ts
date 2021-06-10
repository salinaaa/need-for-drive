import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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
  
  constructor(private router: Router){}

  printForm(){
    console.log(this.loginForm);
    this.router.navigateByUrl('/slider');
}

  ngOnInit(): void {

  }

}
