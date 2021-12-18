import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {ProductService} from "../../servises/product.productService";
import {
  AddProductActionError,
  AddProductActionSuccess,
  DeleteProductActionError,
  DeleteProductActionSuccess,
  GetAllProductActionError,
  GetAllProductActionSuccess,
  ProductAction,
  ProductActionType,
  SelectProductActionError,
  SelectProductActionSuccess,
  UpdateProductActionError,
  UpdateProductActionSuccess
} from "./product.action";
import {catchError, map, mergeMap} from "rxjs/operators";


@Injectable({providedIn:"root"})
export class ProductEffects{

  constructor(private productService :ProductService,private effectAction :Actions) {
  }

  /*
  Creation le Effects pour la selection de toutes les collaborateurs
   */
  getAllProductEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionType.GET_ALL_PRODUCT),
      mergeMap((action)=> {return this.productService.getAllProduct().pipe(
          map((r)=> new GetAllProductActionSuccess(r)),
          catchError((err)=>of(new GetAllProductActionError(err.message)))
        )
        }
      )
    )
  );

  /*
Creation le Effects pour la l'ajout d'un  collaborateur
 */
  addProductEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionType.ADD_PRODUCT),
      mergeMap((action)=> {

          return this.productService.addProduct((<ProductAction>action).payload).pipe(
            map((r)=> new AddProductActionSuccess((<ProductAction>action).payload)),
            catchError((err)=>of(new AddProductActionError(err.message)))
          )
        }
      )
    )
  );

  /* Creation le Effects pour la supprission d'un  collaborateur
 */
  deleteProductEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionType.DELETE_PRODUCT),
      mergeMap((action)=> { return this.productService.deleteProduct((<ProductAction>action).payload).pipe(
          map((r)=> new DeleteProductActionSuccess((<ProductAction>action).payload)),
          catchError((err)=>of(new DeleteProductActionError(err.message)))
        )
        }
      )
    )
  );

  /* Creation le Effects pour la modification d'un  collaborateur
*/
  updateProductEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionType.UPDATE_PRODUCT),
      mergeMap((action)=> { return this.productService.updateProduct((<ProductAction>action).payload).pipe(
          map((r)=> new UpdateProductActionSuccess(r)),
          catchError((err)=>of(new UpdateProductActionError(err.message)))
        )
        }
      )
    )
  );


  /* Creation le Effects pour selectionner collaborateur
 */
  selectProduct : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionType.SELECT_PRODUCT),
      mergeMap((action)=> { return this.productService.getProductByname((<ProductAction>action).payload).pipe(
          map((r)=> new SelectProductActionSuccess(r)),
          catchError((err)=>of(new SelectProductActionError(err.message)))
        )
        }
      )
    )
  );





}
