import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AppStat} from "../../../stat-managment/app.reduecer";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AlertController} from "@ionic/angular";
import {map} from "rxjs/operators";

import {UpdateProductAction} from "../../../stat-managment/product/product.action";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  state$: Observable<AppStat>;
  selectedProduct: Product = null;
  dataArrived: boolean = false;
  private productForm: FormGroup = this.fb.group(
    {
      id: [""],
      name: ["", Validators.required]
    });


  constructor(public router: Router, private fb: FormBuilder,
              private store: Store<any>,
              private alertcontroler: AlertController

  ) {
  }

  ngOnInit() {
    this.state$ = this.store.pipe(map((s) => {
        this.selectedProduct = s.appStatAct.productStat.selectedProduct;
          if(this.selectedProduct!=null){
          this.productForm = this.fb.group(
            {
              id: [this.selectedProduct.id],
              name:[this.selectedProduct.name, Validators.required],
              quantity:[this.selectedProduct.quantity, Validators.required]
            })}
        return s.appStatAct
      }
    ));
  }
  onEditProduct(p: any) {
    if (p.id != null) {
      this.store.dispatch(new UpdateProductAction(
        {
          id: p.id,
          name: p.name,
          quantity:p.quantity
        }
      ));
    }
    this.router.navigateByUrl('/menu/product');
  }

  onAnnuler() {
    this.router.navigateByUrl('/menu/product');
  }


}
