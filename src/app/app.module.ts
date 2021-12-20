import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Router, RouteReuseStrategy} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "./services/authentication.service";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {UserEffects} from "./stat-managment/user/user.effects";
import {appReducer} from "./stat-managment/app.reduecer";
import {RoleEffects} from "./stat-managment/role/role.effects";
import {ProductEffects} from "./stat-managment/product/product.effects";
import {ProductToProvideEffects} from "./stat-managment/provide/provide.effects";
import {ProductToSaleEffects} from "./stat-managment/sale/sale.effects";
import {RequestInterceptorService} from "./services/request-interceptor-service.service";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({appStatAct:appReducer}, {}),
    EffectsModule.forRoot([UserEffects,RoleEffects,ProductEffects,ProductToProvideEffects,ProductToSaleEffects])
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide:  HTTP_INTERCEPTORS, useClass: RequestInterceptorService,multi:true}
  ],

  bootstrap: [AppComponent],

})

export class AppModule {
  constructor(private route : Router,private auth :AuthenticationService) {
    let jwt=this.auth.loadToken();
    if(jwt==null)  this.route.navigateByUrl("/login")
    else this.route.navigateByUrl("/menu/home")
  }
}
