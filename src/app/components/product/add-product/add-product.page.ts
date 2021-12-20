import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {AppRole} from "../../../models/AppRole";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";
import {Store} from "@ngrx/store";
import {AlertController} from "@ionic/angular";
import {map} from "rxjs/operators";
import {AddUserAction} from "../../../stat-managment/user/user.actions";
import {AddProductAction} from "../../../stat-managment/product/product.action";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  private productForm : FormGroup;
  constructor(private fb: FormBuilder, private router:Router ,
              private store : Store<any>,
              private alertcontroler:AlertController) { }

  ngOnInit() {


    this.productForm=this.fb.group(
      {
        name:["",Validators.required]
      })
  }

  onAddProduct(user : any) {
    if(this.productForm.valid)
    {
      this.store.dispatch(new AddProductAction(
        {
          id:null,
          name:user.name,
          quantity:0,
        }
      ));
      this.router.navigateByUrl('/menu/product');
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
    this.router.navigateByUrl('/menu/product');
  }
}
