import {Product} from "../../models/product";
import {ProductToSale} from "../../models/product-to-sale";



export enum ProductToSaleActionType{
  /*
   Action pour initialiser  les produits pour aprovisionnement  (les collaborateur en pecherie)
   */
  INIT_PRODUCTS_TO_SALE="[Sale] get all ",
  INIT_PRODUCTS_TO_SALE_SUCCESS="[Sale] get all  success",
  INIT_PRODUCTS_TO_SALE_ERROR="[Sale] get all error",

  /*
   Action pour deselectionner  un produit de la liste a approvisionner
   */
  UNSELECT_PRODUCT_FROM_SALE="[Sale] delete ",
  UNSELECT_PRODUCT_FROM_SALE_SUCCESS="[Sale] delete  success",
  UNSELECT_PRODUCT_FROM_SALE_ERROR="[Sale] delete  error",


  /*SAction pour selectionner  un produit dans la liste a approvisionner  */
  SELECT_PRODUCT_TO_SALE="[Sale] select ",
  SELECT_PRODUCT_TO_SALE_SUCCESS="[Sale] select success",
  SELECT_PRODUCT_TO_SALE_ERROR="[Sale] select   error",


  /*Enregister tous les produits selectionneés a approvisionnés*/

  SAVE_PRODUCT_TO_SALE="[Sale] save",
  SAVE_PRODUCT_TO_SALE_SUCCESS="[Sale] save success",
  SAVE_PRODUCT_TO_SALE_ERROR="[Sale] save   error",

  /*Enregister tous les produits selectionneés a approvisionnés*/

  SELECT_PRODUCT_SALE="[Sale] selectionner un produit pour traittment ",


}


/*
 L'action de selection de produit pour approvisionnemt
* */
export class InitProductToSaleAction{
  type : ProductToSaleActionType= ProductToSaleActionType.INIT_PRODUCTS_TO_SALE;
  constructor(public payload : Product[]) {
  }
}
export class InitProductToSaleActionSuccess {
  type: ProductToSaleActionType= ProductToSaleActionType.INIT_PRODUCTS_TO_SALE_SUCCESS ;
  constructor(public payload: ProductToSale[]){
  }
}

export class InitProductToSaleActionError {
  type:ProductToSaleActionType= ProductToSaleActionType.INIT_PRODUCTS_TO_SALE_ERROR ;
  constructor(public payload: any ) {
  }
}


/*
L'action de d'engegistrement de produit a approvisionner
* */
export class SaveProductToSaleAction{
  type : ProductToSaleActionType=  ProductToSaleActionType.SAVE_PRODUCT_TO_SALE;
  constructor(public payload : Product[]) {

  }
}
export class SaveProductToSaleActionSuccess {
  type:ProductToSaleActionType= ProductToSaleActionType.SAVE_PRODUCT_TO_SALE_SUCCESS ;
  constructor(public payload: Product[]) {
  }
}

export class SaveProductToSaleActionError {
  type: ProductToSaleActionType= ProductToSaleActionType.SAVE_PRODUCT_TO_SALE_ERROR ;
  constructor(public payload: String ) {
  }
}
/*
Action de deselectionner un produit de la liste
* */
export class UnselectProductFromSaleAction{
  type : ProductToSaleActionType= ProductToSaleActionType.UNSELECT_PRODUCT_FROM_SALE;
  constructor(public payload : ProductToSale) {
  }
}
export class UnselectProductFromSaleActionSuccess {
  type: ProductToSaleActionType= ProductToSaleActionType.UNSELECT_PRODUCT_FROM_SALE_SUCCESS ;
  constructor(public payload: ProductToSale) {
  }
}

export class UnselectProductFromSaleActionError {
  type: ProductToSaleActionType= ProductToSaleActionType.UNSELECT_PRODUCT_FROM_SALE_ERROR ;
  constructor(public payload: String ) {
  }

}

/*
* selectionner un produit pour approvisionner  */
export class SelectProductToSaleAction {
  type: ProductToSaleActionType = ProductToSaleActionType.SELECT_PRODUCT_TO_SALE;

  constructor(public payload: ProductToSale) {
  }
}
export class SelectProductToSaleActionSuccess {
  type: ProductToSaleActionType = ProductToSaleActionType.SELECT_PRODUCT_TO_SALE_SUCCESS;

  constructor(public payload: Product) {
  }

}
export class SelectProductToSaleActionError {
  type: ProductToSaleActionType = ProductToSaleActionType.SELECT_PRODUCT_TO_SALE_ERROR;

  constructor(public payload: string) {
  }
}

/*Type d'action qui nous permettre de selectionner un produit pour traittement */
export class SelectProductSaleAction {
  type: ProductToSaleActionType = ProductToSaleActionType.SELECT_PRODUCT_SALE;
  constructor(public payload: ProductToSale) {
  }
}

export type ProductToSaleAction=
  InitProductToSaleAction|InitProductToSaleActionSuccess|InitProductToSaleActionError|
  SaveProductToSaleAction|SaveProductToSaleActionSuccess|SaveProductToSaleActionError|
  UnselectProductFromSaleAction|UnselectProductFromSaleActionSuccess|UnselectProductFromSaleActionError|
  SelectProductToSaleAction|SelectProductToSaleActionSuccess|SelectProductToSaleActionError
  |SelectProductSaleAction;
