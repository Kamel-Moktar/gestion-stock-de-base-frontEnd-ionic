import {UserReducer, UserStat} from "./user/user.stat";
import {Action} from "@ngrx/store";
import {RoleReducer, RoleStat} from "./role/role.stat";
import {ProductReducer, ProductStat} from "./product/product.stat";
import {ProductToProvide} from "../models/product-to-provide";
import {ProductToProvideReducer, ProductToProvideStat} from "./provide/provide.stat";
import {ProductToSaleReducer, ProductToSaleStat} from "./sale/sale.stat";


export class AppStat{
  public userStat :  UserStat;
  public roleStat :  RoleStat;
  public productStat : ProductStat
  public productToProvideStat : ProductToProvideStat
  public productToSaleStat : ProductToSaleStat
}


const intAppStat : AppStat={
     userStat:UserReducer.initUserStat(),
     roleStat:RoleReducer.initRoleStat(),
     productStat:ProductReducer.initProductStat(),
     productToProvideStat:ProductToProvideReducer.initProductToProvideStat(),
     productToSaleStat:ProductToSaleReducer.initProductToSaleStat()
}


export function appReducer(appstat : AppStat=intAppStat,action : Action ):AppStat{

  /*
  gestion l'etat de l'appliction liee au ulitisateur
  */

 return {...appstat,
        userStat:UserReducer.userReducer(appstat.userStat,action),
        roleStat:RoleReducer.roleReducer(appstat.roleStat,action),
        productStat:ProductReducer.productReducer(appstat.productStat,action),
        productToProvideStat:ProductToProvideReducer.productToProvideReducer(appstat.productToProvideStat,action),
        productToSaleStat:ProductToSaleReducer.productToSaleReducer(appstat.productToSaleStat,action)
 }

}




