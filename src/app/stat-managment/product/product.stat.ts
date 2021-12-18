import {Product} from "../../models/Product";
import {AppStatEnum} from "../app.stat-enum";
import {Action} from "@ngrx/store";
import {ProductAction, ProductActionType} from "./product.action";


export interface ProductStat{
  products : Product[],
  selectedProduct : Product;
  stat : AppStatEnum,
  error : string
}

export class ProductReducer{


  public static initProductStat():ProductStat{  return  { products : [],selectedProduct:null,stat:AppStatEnum.INITIAL,error:""}};

  public static productReducer(productStat:ProductStat,action : Action):ProductStat{

    /*
    Gestion de l'etat d'affechage de collaborateurs
    */

    switch ((<ProductAction>action).type){
      case ProductActionType.GET_ALL_PRODUCT : return {...productStat,stat:AppStatEnum.LOADING}
      case ProductActionType.GET_ALL_PRODUCT_SUCCESS : return {...productStat,stat:AppStatEnum.LOADED,products:(<ProductAction>action).payload}
      case ProductActionType.GET_ALL_PRODUCT_ERROR : return {...productStat,stat:AppStatEnum.ERROR,products:(<ProductAction>action).payload}




      /*
      Gestion de l'etat d'ajout de collaborateurs
      */


      case ProductActionType.ADD_PRODUCT : return {...productStat,stat:AppStatEnum.LOADING,selectedProduct:(<ProductAction>action).payload}
      case ProductActionType.ADD_PRODUCT_SUCCESS :{
        let product : Product=(<ProductAction>action).payload
        let products=productStat.products;
        let productList=[...productStat.products]
        productList.push(product);
        return{...productStat,stat:AppStatEnum.LOADED,products:productList}
      }
      case ProductActionType.ADD_PRODUCT_ERROR : return {...productStat,stat:AppStatEnum.ERROR,products:(<ProductAction>action).payload}


      /*
   Gestion de l'etat de supprission de collaborateurs
   */


      case ProductActionType.DELETE_PRODUCT : return {...productStat,stat:AppStatEnum.LOADING}
      case ProductActionType.DELETE_PRODUCT_SUCCESS :{
        let product1 : Product=(<ProductAction>action).payload
        let productList1=[...productStat.products]
        let index=productList1.indexOf(product1);
        productList1.splice(index,1);
        return {...productStat,stat:AppStatEnum.LOADED,products:productList1}
      }
      case ProductActionType.DELETE_PRODUCT_ERROR : return {...productStat,stat:AppStatEnum.ERROR,products:(<ProductAction>action).payload}


      /*
  Gestion de l'etat de la modification de collaborateurs
  */
      case ProductActionType.UPDATE_PRODUCT : return{...productStat,stat:AppStatEnum.LOADING}
      case ProductActionType.UPDATE_PRODUCT_SUCCESS :{
        let product2 : Product=(<ProductAction>action).payload
        let productList2=[...productStat.products]
        let index=productList2.indexOf(product2);
        productList2=productList2.map((p)=>p.id==product2.id? product2:p);
        return {...productStat,stat:AppStatEnum.LOADED,products:productList2}    }
      case ProductActionType.UPDATE_PRODUCT_ERROR : return {...productStat,stat:AppStatEnum.ERROR,products:(<ProductAction>action).payload}

      /*Selection d'un utilisateur */
      case ProductActionType.SELECT_PRODUCT_SUCCESS : return{...productStat,selectedProduct:(<ProductAction>action).payload};




      /* Autre*/
      default :return {...productStat}
    }



  }
}
