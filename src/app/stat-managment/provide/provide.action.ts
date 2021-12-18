import {Product} from "../../models/product";
import {ProductToProvide} from "../../models/product-to-provide";


export enum ProductToProvideActionType{
  /*
   Action pour initialiser  les produits pour aprovisionnement  (les collaborateur en pecherie)
   */
  INIT_PRODUCTS_TO_PROVIDE="[Provide] get all ",
  INIT_PRODUCTS_TO_PROVIDE_SUCCESS="[Provide] get all  success",
  INIT_PRODUCTS_TO_PROVIDE_ERROR="[Provide] get all error",

  /*
   Action pour deselectionner  un produit de la liste a approvisionner
   */
  UNSELECT_PRODUCT_FROM_PROVIDE="[Provide] delete ",
  UNSELECT_PRODUCT_FROM_PROVIDE_SUCCESS="[Provide] delete  success",
  UNSELECT_PRODUCT_FROM_PROVIDE_ERROR="[Provide] delete  error",


  /*SAction pour selectionner  un produit dans la liste a approvisionner  */
  SELECT_PRODUCT_TO_PROVIDE="[Provide] select ",
  SELECT_PRODUCT_TO_PROVIDE_SUCCESS="[Provide] select success",
  SELECT_PRODUCT_TO_PROVIDE_ERROR="[Provide] select   error",


  /*Enregister tous les produits selectionneés a approvisionnés*/

  SAVE_PRODUCT_TO_PROVIDE="[Provide] save",
  SAVE_PRODUCT_TO_PROVIDE_SUCCESS="[Provide] save success",
  SAVE_PRODUCT_TO_PROVIDE_ERROR="[Provide] save   error",

  /*Enregister tous les produits selectionneés a approvisionnés*/

  SELECT_PRODUCT_PROVIDE="[Provide] selectionner un produit pour traittment ",


}


/*
 L'action de selection de produit pour approvisionnemt
* */
export class InitProductToProvideAction{
  type : ProductToProvideActionType= ProductToProvideActionType.INIT_PRODUCTS_TO_PROVIDE;
  constructor(public payload : Product[]) {
  }
}
export class InitProductToProvideActionSuccess {
  type: ProductToProvideActionType= ProductToProvideActionType.INIT_PRODUCTS_TO_PROVIDE_SUCCESS ;
  constructor(public payload: ProductToProvide[]){
  }
}

export class InitProductToProvideActionError {
  type:ProductToProvideActionType= ProductToProvideActionType.INIT_PRODUCTS_TO_PROVIDE_ERROR ;
  constructor(public payload: any ) {
  }
}


/*
L'action de d'engegistrement de produit a approvisionner
* */
export class SaveProductToProvideAction{
  type : ProductToProvideActionType=  ProductToProvideActionType.SAVE_PRODUCT_TO_PROVIDE;
  constructor(public payload : Product[]) {

  }
}
export class SaveProductToProvideActionSuccess {
  type:ProductToProvideActionType= ProductToProvideActionType.SAVE_PRODUCT_TO_PROVIDE_SUCCESS ;
  constructor(public payload: Product[]) {
  }
}

export class SaveProductToProvideActionError {
  type: ProductToProvideActionType= ProductToProvideActionType.SAVE_PRODUCT_TO_PROVIDE_ERROR ;
  constructor(public payload: String ) {
  }
}
/*
Action de deselectionner un produit de la liste
* */
export class UnselectProductFromProvideAction{
  type : ProductToProvideActionType= ProductToProvideActionType.UNSELECT_PRODUCT_FROM_PROVIDE;
  constructor(public payload : ProductToProvide) {
  }
}
export class UnselectProductFromProvideActionSuccess {
  type: ProductToProvideActionType= ProductToProvideActionType.UNSELECT_PRODUCT_FROM_PROVIDE_SUCCESS ;
  constructor(public payload: ProductToProvide) {
  }
}

export class UnselectProductFromProvideActionError {
  type: ProductToProvideActionType= ProductToProvideActionType.UNSELECT_PRODUCT_FROM_PROVIDE_ERROR ;
  constructor(public payload: String ) {
  }

}

/*
* selectionner un produit pour approvisionner  */
export class SelectProductToProvideAction {
  type: ProductToProvideActionType = ProductToProvideActionType.SELECT_PRODUCT_TO_PROVIDE;

  constructor(public payload: ProductToProvide) {
  }
}
export class SelectProductToProvideActionSuccess {
  type: ProductToProvideActionType = ProductToProvideActionType.SELECT_PRODUCT_TO_PROVIDE_SUCCESS;

  constructor(public payload: Product) {
  }

}
export class SelectProductToProvideActionError {
  type: ProductToProvideActionType = ProductToProvideActionType.SELECT_PRODUCT_TO_PROVIDE_ERROR;

  constructor(public payload: string) {
  }
}

/*Type d'action qui nous permettre de selectionner un produit pour traittement */
export class SelectProductProvideAction {
  type: ProductToProvideActionType = ProductToProvideActionType.SELECT_PRODUCT_PROVIDE;
  constructor(public payload: ProductToProvide) {
  }
}

export type ProductToProvideAction=
  InitProductToProvideAction|InitProductToProvideActionSuccess|InitProductToProvideActionError|
  SaveProductToProvideAction|SaveProductToProvideActionSuccess|SaveProductToProvideActionError|
  UnselectProductFromProvideAction|UnselectProductFromProvideActionSuccess|UnselectProductFromProvideActionError|
  SelectProductToProvideAction|SelectProductToProvideActionSuccess|SelectProductToProvideActionError
  |SelectProductProvideAction;
