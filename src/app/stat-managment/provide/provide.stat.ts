
import {AppStatEnum} from "../app.stat-enum";
import {Action} from "@ngrx/store";
import {ProductToProvideAction, ProductToProvideActionType} from "./provide.action";
import {ProductToProvide} from "../../models/product-to-provide";



export interface ProductToProvideStat{
  productsToProvide : ProductToProvide[],
  selectedProductToProvide : ProductToProvide;
  stat : AppStatEnum,
  error : string
}

export class ProductToProvideReducer{


  public static initProductToProvideStat(): ProductToProvideStat{  return  { productsToProvide : [],selectedProductToProvide:null,stat:AppStatEnum.INITIAL,error:""}};

  public static productToProvideReducer(productToProvideStat:ProductToProvideStat,action : Action):ProductToProvideStat{

    /*
    Gestion de l'etat d'affechage de collaborateurs
    */

    switch ((<ProductToProvideAction>action).type){
      case ProductToProvideActionType.INIT_PRODUCTS_TO_PROVIDE : return {...productToProvideStat,stat:AppStatEnum.LOADING}
      case ProductToProvideActionType.INIT_PRODUCTS_TO_PROVIDE_SUCCESS : return {...productToProvideStat,stat:AppStatEnum.LOADED,productsToProvide:(<ProductToProvideAction>action).payload}
      case ProductToProvideActionType.INIT_PRODUCTS_TO_PROVIDE_ERROR : return {...productToProvideStat,stat:AppStatEnum.ERROR}

      /*
      Gestion de l'etat d'ajout d'un produit au collection
      */

      case ProductToProvideActionType.SELECT_PRODUCT_TO_PROVIDE: return {...productToProvideStat,stat:AppStatEnum.LOADING,selectedProductToProvide:(<ProductToProvideAction>action).payload}
      case ProductToProvideActionType.SELECT_PRODUCT_TO_PROVIDE_SUCCESS :{
        let productToProvide : ProductToProvide=(<ProductToProvideAction>action).payload
        let productList=[...productToProvideStat.productsToProvide]
        productList=productList.map((p)=>p.product.id==productToProvide.product.id? productToProvide:p);
       // productList.push(product);

        return{...productToProvideStat,stat:AppStatEnum.LOADED,productsToProvide:productList}
      }




      case ProductToProvideActionType.SELECT_PRODUCT_TO_PROVIDE_ERROR : return {...productToProvideStat,stat:AppStatEnum.ERROR}


      /*
      Gestion de l'etat de supprission de collaborateurs
      */


      case ProductToProvideActionType.UNSELECT_PRODUCT_FROM_PROVIDE: return {...productToProvideStat,stat:AppStatEnum.LOADING,selectedProductToProvide:(<ProductToProvideAction>action).payload}
      case ProductToProvideActionType.UNSELECT_PRODUCT_FROM_PROVIDE_SUCCESS :{
        let productToProvide : ProductToProvide=(<ProductToProvideAction>action).payload
        let productList=[...productToProvideStat.productsToProvide]
        productList=productList.map((p)=>p.product.id==productToProvide.product.id? productToProvide:p);
        return{...productToProvideStat,stat:AppStatEnum.LOADED,productsToProvide:productList}
      }
      case ProductToProvideActionType.UNSELECT_PRODUCT_FROM_PROVIDE_ERROR : return {...productToProvideStat,stat:AppStatEnum.ERROR}


      case ProductToProvideActionType.SELECT_PRODUCT_PROVIDE: {
        return {
          ...productToProvideStat,
          stat: AppStatEnum.LOADED,
          selectedProductToProvide: (<ProductToProvideAction>action).payload
        }
      }
      /* Autre*/
      default :return {...productToProvideStat}
    }



  }
}
