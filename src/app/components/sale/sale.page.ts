import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AppStat} from "../../stat-managment/app.reduecer";
import {ProductToProvide} from "../../models/product-to-provide";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";
import {map} from "rxjs/operators";
import {Product} from "../../models/product";
import {
  SaveProductToProvideAction,

} from "../../stat-managment/provide/provide.action";
import {
  SaveProductToSaleAction,
  SelectProductSaleAction,
  SelectProductToSaleAction
} from "../../stat-managment/sale/sale.action";
import {ProductToSale} from "../../models/product-to-sale";

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {


  private appStat$ :Observable<AppStat>
  productToSale : ProductToSale[];
  selected: boolean=false;
  constructor(private store : Store<any>,private router :Router,private alertController:AlertController) {}

  ngOnInit(): void {
    this.appStat$=this.store.pipe(map( (s)=>{

          return s.appStatAct;
        }
      )
    );
    this.appStat$.subscribe( s=>
      this.productToSale=s.productToSaleStat.productsToSale);
  }


  onSave() {
    let products :Product[]=[];
    this.productToSale.forEach(p=>{
      let pp:Product={id:p.product.id,quantity:p.requestedQuantity,name:p.product.name}
      products.push(pp);
    })
    this.store.dispatch(new SaveProductToSaleAction(products));
    this.router.navigateByUrl("/menu/home");
  }

  OnSelect(v: ProductToProvide) {
    this.store.dispatch(new SelectProductSaleAction(v));
    if( !v.isSelected ) this.router.navigateByUrl("/menu/editSale")
    else {
      this.alertController.create({
        header: 'Alerte',
        subHeader: 'Confirmation :',
        message: 'Vousllez vous vraimment annuler la selection de ce produits  ?',
        buttons: [
          {
            text: 'OUI',
            handler: () => {
              this.store.dispatch(new SelectProductToSaleAction(
                {product:v.product,requestedQuantity:0,isSelected:false}));
            }
          },
          {
            text: 'NO',
            handler: () => {
              this.store.dispatch(new SelectProductToSaleAction(
                {product:v.product,requestedQuantity:v.requestedQuantity,isSelected:true}));
            }
          }
        ]
      }).then(res => {
        res.present();
      });

    }




  }
}
