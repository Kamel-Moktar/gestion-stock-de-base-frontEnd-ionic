import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AppStat} from "../stat-managment/app.reduecer";
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {GetAllProductAction} from "../stat-managment/product/product.action";
import {Router} from "@angular/router";
import {Product} from "../models/product";
import {InitProductToProvideAction} from "../stat-managment/provide/provide.action";
import {InitProductToSaleAction} from "../stat-managment/sale/sale.action";
import {AppUser} from "../models/AppUser";
import {AuthenticationService} from "../services/authentication.service";
import {PutCurrentUser} from "../stat-managment/user/user.actions";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public cart = {
    name : "   La pecherie de Sud",
    email: "   abc@yahoo.fr",
    logo: "assets/images/logo3.png",
    location :"assets/images/Visite.jpg",
  }
  private appStat$ :Observable<AppStat>
  private products :Product[];
  constructor(private store : Store<any>,private router :Router,private auth: AuthenticationService) {}7
  currentUser :AppUser ;

  ngOnInit(){
    this.auth.getCurrentUser().subscribe(
      r=> {
        this.store.dispatch(new PutCurrentUser(r))
      }
    )

    this.store.dispatch(new GetAllProductAction({}))
    this.appStat$=this.store.pipe(map( (s)=>{
      this.currentUser=s.appStatAct.userStat.currentUser;
     return  s.appStatAct;
    }
      )
    )



  }

  onRefresh() {
    this.store.dispatch(new GetAllProductAction({}))
  }

  OnVent() {
    this.appStat$.subscribe(
      r=>{ this.products=r.productStat.products

      }
    )
    this.store.dispatch(new InitProductToSaleAction(this.products));
    this.router.navigateByUrl('menu/sale');


  }

  onSaprovisionner(){
    this.appStat$.subscribe(
      r=> this.products=r.productStat.products
    )
    this.store.dispatch(new InitProductToProvideAction(this.products));
    this.router.navigateByUrl('menu/provide');
  }
}
