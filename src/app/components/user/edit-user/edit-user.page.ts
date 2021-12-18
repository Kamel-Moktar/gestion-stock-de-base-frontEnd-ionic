import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RinitPasswordAction, UpdateUserAction} from "../../../stat-managment/user/user.actions";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppStat} from "../../../stat-managment/app.reduecer";
import {AppUser} from "../../../models/AppUser";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AlertController, LoadingController} from "@ionic/angular";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  state$: Observable<AppStat>;
  selectedUser: AppUser = null;
  dataArrived: boolean = false;
  private userForm: FormGroup = this.fb.group(
    {
      id: [""],
      userName: ["", Validators.required],
      role: ["", Validators.required]
    });
  private passwordFormControl: FormGroup = this.fb.group(
    {
      psw: ["", Validators.required]
    }
  )

  constructor(public router: Router, private fb: FormBuilder,
              private store: Store<any>,
              private loadingCtrl: LoadingController,
              private alertcontroler: AlertController

  ) {
  }

  ngOnInit() {
    //this.basicLoader();

    this.state$ = this.store.pipe(map((s) => {
        this.selectedUser = s.appStatAct.userStat.selectedUser;
        let r: String = "";
        if (this.selectedUser != null) {
          this.dataArrived = true;
          if (this.selectedUser.roles[0] != null) r = this.selectedUser.roles[0].roleName;
          this.userForm = this.fb.group(
            {
              id: [this.selectedUser.id],
              userName: [this.selectedUser.userName, Validators.required],
              role: [r, Validators.required]
            })
        }
        return s.appStatAct
      }
    ));
  }


  basicLoader() {
    this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 1000,
      translucent: true
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((res) => {

      });
    });
  }

  onEditUser(user: any) {

    if (user.id != null) {
      this.store.dispatch(new UpdateUserAction(
        {
          id: user.id,
          userName: user.userName,
          password: null,
          roles: [{id: null, roleName: user.role}]
        }
      ));
    }
    this.router.navigateByUrl('/menu/users');
  }

  onAnnuler() {
    this.router.navigateByUrl('/menu/users');
  }

  rinitPasword(s : any, user: AppUser) {
    if (this.passwordFormControl.valid) {

        this.store.dispatch(
        new RinitPasswordAction(
          {
            id: user.id,
            userName: user.userName,
            password: s.psw,
            roles:null
          }
        )
      )

      this.alertcontroler.create(
        {
          header: "info",
          subHeader: "success",
          message: "Mot de passe rinitialiser avec success",
          buttons: ["OK"]
        }
      ).then(res =>{ res.present();})

      this.passwordFormControl= this.fb.group(
        {
          psw: ["", Validators.required]
        })

    } else {

     this.alertcontroler.create(
        {
          header:"Alerte",
          subHeader:"Manque d'iformation",
          message:"Veuillez Comléter la sisai des information Moncantes .",
          buttons:["OK"]
        }
      ).then(res=>{res.present();})
    }



    }
}


