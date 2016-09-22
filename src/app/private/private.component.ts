import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "./user";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'private.component.html'
})

export class PrivateComponent implements OnInit {
  public user: User;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }

  save(model: User, isValid: boolean) {
    console.log(model, isValid);
    if (isValid) {
      this.router.navigate(['./home']);
    }
  }
}