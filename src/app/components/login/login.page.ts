import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {AppUser} from "../../models/AppUser";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 private userForm : FormGroup;
 private errorAuth :boolean=false;
  constructor(private router : Router, private fb : FormBuilder, private auth:AuthenticationService) { }

  ngOnInit() {
    this.userForm=this.fb.group(
      {
        userName:["",Validators.required],
        password:["",Validators.required]
      }
    )

  }

  onLogin(user: AppUser) {

    this.auth.login(user).subscribe(
      response=>{
        let jwt=response.token;
        if(jwt==null) { this.router.navigateByUrl("/login"); this.errorAuth=true;
        }
        else {this.router.navigateByUrl("/menu/home"); this.errorAuth=false;}
      }
    )
  }
}
