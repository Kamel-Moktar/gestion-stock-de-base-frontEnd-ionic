import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AppStat} from "../../stat-managment/app.reduecer";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {DeleteProductAction, GetAllProductAction} from "../../stat-managment/product/product.action";
import {map} from "rxjs/operators";
import {
  SaveProductToProvideAction,
  SelectProductProvideAction,
  SelectProductToProvideAction
} from "../../stat-managment/provide/provide.action";
import {ProductToProvide} from "../../models/product-to-provide";
import {Product} from "../../models/product";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-provide',
  templateUrl: './provide.page.html',
  styleUrls: ['./provide.page.scss'],
})
export class ProvidePage implements OnInit {


  private appStat$ :Observable<AppStat>
  productToProvide : ProductToProvide[];
  selected: boolean=false;
  constructor(private store : Store<any>,private router :Router,private alertController:AlertController) {}

  ngOnInit(): void {
    this.appStat$=this.store.pipe(map( (s)=>{

     return s.appStatAct;
    }
    )
    );
    this.appStat$.subscribe( s=>
    this.productToProvide=s.productToProvideStat.productsToProvide);
  }


  onSave() {
    let products :Product[]=[];
    this.productToProvide.forEach(p=>{
      if (p.requestedQuantity>0){
      let pp:Product={id:p.product.id,quantity:p.requestedQuantity,name:p.product.name}
      products.push(pp);
      }
    })
    this.store.dispatch(new SaveProductToProvideAction(products));
    this.router.navigateByUrl("/menu/home");
  }

  OnSelect(v: ProductToProvide) {
     this.store.dispatch(new SelectProductProvideAction(v));
    if( !v.isSelected ) this.router.navigateByUrl("/menu/editProvide")
    else {
      this.alertController.create({
        header: 'Alerte',
        subHeader: 'Confirmation :',
        message: 'Vousllez vous vraimment annuler la selection de ce produits  ?',
        buttons: [
          {
            text: 'OUI',
            handler: () => {
               this.store.dispatch(new SelectProductToProvideAction(
              {product:v.product,requestedQuantity:0,isSelected:false}));
            }
          },
          {
            text: 'NO',
            handler: () => {
              this.store.dispatch(new SelectProductToProvideAction(
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
