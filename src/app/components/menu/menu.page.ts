import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../servises/authentication.service";
import { MenuController} from "@ionic/angular";
import {Store} from "@ngrx/store";
import {InitProductToProvideAction} from "../../stat-managment/provide/provide.action";
import {AppStat} from "../../stat-managment/app.reduecer";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Product} from "../../models/product";
import {InitProductToSaleAction} from "../../stat-managment/sale/sale.action";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  private listMenu=[
    {title:"Produit/Refference",url:"/menu/product",icon:"albums-outline", },
    {title:"Vendre",url:"/menu/sale",icon:"barcode-outline" },
    {title:"S'aprovisionner",url:"/menu/provide",icon:"boat-outline" },
    {title:"Collaborateurs",url:"/menu/users",icon:"people-outline" },
    {title:"Deconnexion",url:"/login",icon:"log-out-outline" }
  ];
  appStat$ : Observable<AppStat>
  products : Product[];

  constructor(private router :Router,private auth :AuthenticationService,
              private menuController:MenuController,private store :Store<any>

  ) { }

  ngOnInit() {
    this.appStat$=this.store.pipe(
      map((s)=> s.appStatAct)
    )
  }

  onMenuAction(m:string){
     if(m=="/login")this.auth.clearToken();

     if(m=="/menu/sale"||m=="/menu/provide")
     {
       this.appStat$.subscribe(
         r=> this.products=r.productStat.products
       )
       this.store.dispatch(new InitProductToProvideAction(this.products));
       this.store.dispatch(new InitProductToSaleAction(this.products));
     }

     this.router.navigateByUrl(m);
  }

  onMenuDemand() {
    this.menuController.open();
  }
}
