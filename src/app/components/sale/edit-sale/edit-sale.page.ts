import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {ProductToProvide} from "../../../models/product-to-provide";
import {SelectProductToProvideAction} from "../../../stat-managment/provide/provide.action";
import {SelectProductToSaleAction} from "../../../stat-managment/sale/sale.action";
import {ProductToSale} from "../../../models/product-to-sale";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-edit-sale',
  templateUrl: './edit-sale.page.html',
  styleUrls: ['./edit-sale.page.scss'],
})
export class EditSalePage implements OnInit {

  qteForm:FormGroup ;


  constructor(private store:Store<any>,private router :Router,
              private fb :FormBuilder,
             private alertController : AlertController
  ) { }

  ngOnInit() {
    this.qteForm=this.fb.group(
      {qte:["",Validators.required]}
    )
  }
  onAnnuler() {

    let selectedProduct :ProductToSale;
    this.store.subscribe(s=> selectedProduct=s.appStatAct.productToSaleStat.selectedProductToSale);

    this.store.dispatch(new SelectProductToSaleAction(
      {
        product:selectedProduct.product,
        requestedQuantity:0,
        isSelected:false}
    ))
    this.router.navigateByUrl("menu/sale");
  }

  onSelectProduct(value :any ) {
    if(this.qteForm.valid){
    let selectedProduct :ProductToSale;
    this.store.subscribe(s=> selectedProduct=s.appStatAct.productToSaleStat.selectedProductToSale);

    this.store.dispatch(new SelectProductToSaleAction(
      {product:selectedProduct.product,
        requestedQuantity:value.qte,
        isSelected:true}
    ))
    this.router.navigateByUrl("menu/sale");
    }else{
      this.alertController.create(
        {
          header: "Alert",
          subHeader: "Iformations  monquantes",
          message: "Veuillez Sisaire de donneé valide ",
          buttons: ["OK"]
        }
      ).then(res =>{ res.present();})

    }
  }
}
