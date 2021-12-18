
import {AppStatEnum} from "../app.stat-enum";
import {Action} from "@ngrx/store";
import {ProductToSale} from "../../models/product-to-sale";
import {ProductToSaleAction, ProductToSaleActionType} from "./sale.action";




export interface ProductToSaleStat{
  productsToSale : ProductToSale[],
  selectedProductToSale : ProductToSale;
  stat : AppStatEnum,
  error : string
}

export class ProductToSaleReducer{


  public static initProductToSaleStat(): ProductToSaleStat{  return  { productsToSale : [],selectedProductToSale:null,stat:AppStatEnum.INITIAL,error:""}};

  public static productToSaleReducer(productToSaleStat:ProductToSaleStat,action : Action):ProductToSaleStat{

    /*
    Gestion de l'etat d'affechage de collaborateurs
    */

    switch ((<ProductToSaleAction>action).type){
      case ProductToSaleActionType.INIT_PRODUCTS_TO_SALE: return {...productToSaleStat,stat:AppStatEnum.LOADING}
      case ProductToSaleActionType.INIT_PRODUCTS_TO_SALE_SUCCESS : return {...productToSaleStat,stat:AppStatEnum.LOADED,productsToSale:(<ProductToSaleAction>action).payload}
      case ProductToSaleActionType.INIT_PRODUCTS_TO_SALE_ERROR : return {...productToSaleStat,stat:AppStatEnum.ERROR}

      /*
      Gestion de l'etat d'ajout d'un produit au collection
      */

      case ProductToSaleActionType.SELECT_PRODUCT_TO_SALE: return {...productToSaleStat,stat:AppStatEnum.LOADING,selectedProductToSale:(<ProductToSaleAction>action).payload}
      case ProductToSaleActionType.SELECT_PRODUCT_TO_SALE_SUCCESS :{
        let productToSale : ProductToSale=(<ProductToSaleAction>action).payload
        let productList=[...productToSaleStat.productsToSale]
        productList=productList.map((p)=>p.product.id==productToSale.product.id? productToSale:p);
        // productList.push(product);

        return{...productToSaleStat,stat:AppStatEnum.LOADED,productsToSale:productList}
      }




      case ProductToSaleActionType.SELECT_PRODUCT_TO_SALE_ERROR : return {...productToSaleStat,stat:AppStatEnum.ERROR}


      /*
      Gestion de l'etat de supprission de collaborateurs
      */


      case ProductToSaleActionType.UNSELECT_PRODUCT_FROM_SALE: return {...productToSaleStat,stat:AppStatEnum.LOADING,selectedProductToSale:(<ProductToSaleAction>action).payload}
      case ProductToSaleActionType.UNSELECT_PRODUCT_FROM_SALE_SUCCESS :{
        let productToSale : ProductToSale=(<ProductToSaleAction>action).payload
        let productList=[...productToSaleStat.productsToSale]
        productList=productList.map((p)=>p.product.id==productToSale.product.id? productToSale:p);
        return{...productToSaleStat,stat:AppStatEnum.LOADED,productsToSale:productList}
      }
      case ProductToSaleActionType.UNSELECT_PRODUCT_FROM_SALE_ERROR : return {...productToSaleStat,stat:AppStatEnum.ERROR}


      case ProductToSaleActionType.SELECT_PRODUCT_SALE: {
        //console.log("Je sui dans reducer ECT_PRODUCT_SALE"+ (<ProductToSaleAction>action).payload.product.name)
        return {
          ...productToSaleStat,
          stat: AppStatEnum.LOADED,
          selectedProductToSale: (<ProductToSaleAction>action).payload
        }
      }
      /* Autre*/
      default :return {...productToSaleStat}
    }



  }
}
