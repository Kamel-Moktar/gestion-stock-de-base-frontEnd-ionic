import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InitProductToProvideAction, SelectProductToProvideAction} from "../../../stat-managment/provide/provide.action";
import {ProductToProvide} from "../../../models/product-to-provide";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-edit-provide',
  templateUrl: './edit-provide.page.html',
  styleUrls: ['./edit-provide.page.scss'],
})
export class EditProvidePage implements OnInit {
  qteForm: FormGroup;


  constructor(private store: Store<any>,
              private router: Router,
              private fb: FormBuilder,
              private alertController: AlertController
  ) {
  }

  ngOnInit() {
    this.qteForm = this.fb.group(
      {qte: ["", Validators.required]}
    )
  }

  onAnnuler() {

    let selectedProduct: ProductToProvide;
    this.store.subscribe(s => selectedProduct = s.appStatAct.productToProvideStat.selectedProductToProvide);
    console.log(selectedProduct.product.name);
    this.store.dispatch(new SelectProductToProvideAction(
      {
        product: selectedProduct.product,
        requestedQuantity: 0,
        isSelected: false
      }
    ))
    this.router.navigateByUrl("menu/provide");
  }

  onSelectProduct(value: any) {
    if (this.qteForm.valid) {
      let selectedProduct: ProductToProvide;
      this.store.subscribe(s => selectedProduct = s.appStatAct.productToProvideStat.selectedProductToProvide);

      this.store.dispatch(new SelectProductToProvideAction(
        {
          product: selectedProduct.product,
          requestedQuantity: value.qte,
          isSelected: true
        }
      ))
      this.router.navigateByUrl("menu/provide");
    } else {
      this.alertController.create(
        {
          header: "Alert",
          subHeader: "Iformations  monquantes",
          message: "Veuillez Sisaire de donneé valide ",
          buttons: ["OK"]
        }
      ).then(res => {
        res.present();
      })

    }
  }
}
