import {Product} from "../../models/product";


export enum ProductActionType{

  /*
   Action pour selectionner le produit (les collaborateur en pecherie)
   */
  GET_ALL_PRODUCT="[Product] get all user",
  GET_ALL_PRODUCT_SUCCESS="[Product] get all user success",
  GET_ALL_PRODUCT_ERROR="[Product] get all user error",

  /*
   Action pour ajouter un utlisateur  produit (les collaborateur en pecherie)
   */
  ADD_PRODUCT="[Product] ajouter user",
  ADD_PRODUCT_SUCCESS="[Product] ajouter user success",
  ADD_PRODUCT_ERROR="[Product] ajouter user error" ,

  /*
   Action pour supprimer un produit (les collaborateur en pecherie)
   */
  DELETE_PRODUCT="[Product] delete user",
  DELETE_PRODUCT_SUCCESS="[Product] delete user success",
  DELETE_PRODUCT_ERROR="[Product] delete user error",

  /*
   Action pour modifier un produit (les collaborateur en pecherie)
   */
  UPDATE_PRODUCT="[Product] edit user",
  UPDATE_PRODUCT_SUCCESS="[Product] edit user success",
  UPDATE_PRODUCT_ERROR="[Product] edit user error",

  /*Selectionner un utilisteur dans le but de le maitre à jour */

  SELECT_PRODUCT="[Product] select user",
  SELECT_PRODUCT_SUCCESS="[Product] select user success",
  SELECT_PRODUCT_ERROR="[Product] select  user error",



}


/*
Get all user action
* */
export class GetAllProductAction{
  type : ProductActionType= ProductActionType.GET_ALL_PRODUCT;
  constructor(public payload : any) {
  }
}
export class GetAllProductActionSuccess {
  type: ProductActionType= ProductActionType.GET_ALL_PRODUCT_SUCCESS ;
  constructor(public payload: Product[]) {
  }
}

export class GetAllProductActionError {
  type:ProductActionType= ProductActionType.GET_ALL_PRODUCT_ERROR ;
  constructor(public payload: string ) {
  }
}


/*
Add user action
* */
export class AddProductAction{
  type : ProductActionType=  ProductActionType.ADD_PRODUCT;
  constructor(public payload : Product) {

  }
}
export class AddProductActionSuccess {
  type:ProductActionType= ProductActionType.ADD_PRODUCT_SUCCESS ;
  constructor(public payload: Product) {
  }
}

export class AddProductActionError {
  type: ProductActionType= ProductActionType.ADD_PRODUCT_ERROR ;
  constructor(public payload: string ) {
  }
}

/*
Update user action
* */
export class UpdateProductAction{
  type : ProductActionType= ProductActionType.UPDATE_PRODUCT;
  constructor(public payload : Product) {
  }
}
export class UpdateProductActionSuccess {
  type: ProductActionType= ProductActionType.UPDATE_PRODUCT_SUCCESS ;
  constructor(public payload: Product) {
  }
}

export class UpdateProductActionError {
  type: ProductActionType= ProductActionType.UPDATE_PRODUCT_ERROR ;
  constructor(public payload: string ) {
  }
}



/*
Delete user action
* */
export class DeleteProductAction{
  type : ProductActionType= ProductActionType.DELETE_PRODUCT;
  constructor(public payload : Product) {
  }
}
export class DeleteProductActionSuccess {
  type: ProductActionType= ProductActionType.DELETE_PRODUCT_SUCCESS ;
  constructor(public payload: Product) {
  }
}

export class DeleteProductActionError {
  type: ProductActionType= ProductActionType.DELETE_PRODUCT_ERROR ;
  constructor(public payload: string ) {
  }

}

/*
* selectionner un produit */
export class SelectProductAction {
  type: ProductActionType = ProductActionType.SELECT_PRODUCT;

  constructor(public payload: String) {
  }
}
export class SelectProductActionSuccess {
  type: ProductActionType = ProductActionType.SELECT_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }

}
export class SelectProductActionError {
  type: ProductActionType = ProductActionType.SELECT_PRODUCT_ERROR;

  constructor(public payload: String) {
  }
}


export type ProductAction=
  GetAllProductAction|GetAllProductActionSuccess|GetAllProductActionError|
  AddProductAction|AddProductActionSuccess|AddProductActionError|
  DeleteProductAction|DeleteProductActionSuccess|DeleteProductActionError|
  UpdateProductAction|UpdateProductActionSuccess|UpdateProductActionError|
  SelectProductAction|SelectProductActionSuccess|SelectProductActionError;
