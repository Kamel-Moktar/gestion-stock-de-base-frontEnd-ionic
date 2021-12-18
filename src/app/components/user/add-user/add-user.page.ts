import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../servises/authentication.service";
import {Store} from "@ngrx/store";
import {AddUserAction, GetAllUserAction} from "../../../stat-managment/user/user.actions";
import {AppUser} from "../../../models/AppUser";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {AppRole} from "../../../models/AppRole";
import {map} from "rxjs/operators";
import {AlertController} from "@ionic/angular";


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
  private userForm : FormGroup;
  private roles$:Observable<AppRole[]>;

  constructor(private fb: FormBuilder, private router:Router ,
              private auth :AuthenticationService,
              private store : Store<any>,
              private alertcontroler:AlertController) { }

  ngOnInit() {

    this.roles$=this.store.pipe(
      map(a=> a.appStatAct.roleStat.roles )

    )
    this.userForm=this.fb.group(
      {
        userName:["",Validators.required],
        password:["",Validators.required],
        role:["",Validators.required]
      })
  }

  onAddUser(user : any) {
    if(this.userForm.valid)
    {
    this.store.dispatch(new AddUserAction(
      {
        id:null,
        userName:user.userName,
        password:user.password,
        roles:[{id:null,roleName:user.role}]
      }
    ));
    this.router.navigateByUrl('/menu/users');
    }else this.alertcontroler.create(
      {
        header:"Alerte",
        subHeader:"Manque d'iformation",
        message:"Veuillez Comléter la sisai des information Moncantes .",
        buttons:["OK"]

      }
    ).then(res=>{res.present();})
  }

  onAnnuler() {
    this.router.navigateByUrl('/menu/users');
  }
}
