import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AppStat} from "../../../stat-managment/app.reduecer";
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AlertController} from "@ionic/angular";
import {map} from "rxjs/operators";
import {
  DeleteProductAction,
  GetAllProductAction,
  SelectProductAction
} from "../../../stat-managment/product/product.action";
import {Product} from "../../../models/product";


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  private statAct : Observable<AppStat>


  constructor(private auth:AuthenticationService,private router :Router,
              private store : Store<any>, private alertControler : AlertController) { }

  ngOnInit() {
    this.store.dispatch(new GetAllProductAction({}));
    this.statAct=this.store.pipe(
      map(s=>s.appStatAct)
    )
  }

  onRefresh() {
    this.store.dispatch(new GetAllProductAction({}));
  }

  onAddProduct() {

    this.router.navigateByUrl('menu/newProduct');
  }

  onDeleteProduct(u: Product) {

    this.alertControler.create({
        header: 'Alerte',
        subHeader: 'Confirmation :',
        message: 'Vousllez vous vraimment suprimer ce Collaborateurs ?',
        buttons: [
          {
            text: 'OUI',
            handler: () => {
              this.store.dispatch(new DeleteProductAction(u));

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
  onUpdateProduct(u: Product) {

    this.store.dispatch(new SelectProductAction(u.name));
    this.router.navigateByUrl('menu/updateProduct');
  }
}
