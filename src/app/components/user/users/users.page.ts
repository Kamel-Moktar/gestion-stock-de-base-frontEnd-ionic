import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from "../../../servises/authentication.service";
import {AppUser} from "../../../models/AppUser";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {DeleteUserAction, GetAllUserAction, SelectUserAction} from "../../../stat-managment/user/user.actions";
import {AppStat} from "../../../stat-managment/app.reduecer";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {GetAllRoleAction} from "../../../stat-managment/role/role.action";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})


export class UsersPage implements OnInit {
  private statAct : Observable<AppStat>


  constructor(private auth:AuthenticationService,private router :Router,
              private store : Store<any>, private alertControler : AlertController) { }

  ngOnInit() {
    this.store.dispatch(new GetAllRoleAction({}));
    this.store.dispatch(new GetAllUserAction({}));
    this.statAct=this.store.pipe(
      map(s=>s.appStatAct)
    )
  }

  onRefresh() {
    this.store.dispatch(new GetAllUserAction({}));
  }

  onAddUser() {

    this.router.navigateByUrl('menu/newUser');
  }

  onDelete(u: AppUser) {
    this.alertControler.create({
        header: 'Alerte',
        subHeader: 'Confirmation :',
        message: 'Vousllez vous vraimment suprimer ce Collaborateurs ?',
        buttons: [
          {
            text: 'OUI',
            handler: () => {
              this.store.dispatch(new DeleteUserAction(u));
            }
          },
          {
            text: 'NO',
            handler: () => {

            }
          }
        ]
      }

    ).then(res => {
      res.present();
    });

  }

  onUpdate(u: AppUser) {

    this.store.dispatch(new SelectUserAction(u.userName));
    this.router.navigateByUrl('menu/updateUser');
  }
}
