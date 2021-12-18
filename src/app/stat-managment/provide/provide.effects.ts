import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {catchError, map, mergeMap} from "rxjs/operators";
import {ProductService} from "../../servises/product.productService";
import {
  InitProductToProvideAction,
  InitProductToProvideActionSuccess,
  ProductToProvideAction,
  ProductToProvideActionType,
  SaveProductToProvideAction,
  SaveProductToProvideActionError,
  SaveProductToProvideActionSuccess,
  SelectProductToProvideAction,
  SelectProductToProvideActionSuccess,
  UnselectProductFromProvideActionSuccess
} from "./provide.action";
import {ProductToProvide} from "../../models/product-to-provide";
import {GetAllProductAction} from "../product/product.action";



@Injectable({providedIn:"root"})
export class ProductToProvideEffects {

  constructor(private productService: ProductService, private effectAction: Actions) {

  }

  /*
  Creation le Effects pour la selection de toutes les collaborateurs
   */
  initProductToProvideEffect: Observable<Action> = createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductToProvideActionType.INIT_PRODUCTS_TO_PROVIDE),
      map((action)=>{
        let products=(<ProductToProvideAction>action).payload;
        let productsToProvide:ProductToProvide[]=[];
        products.forEach(p=> productsToProvide.push(
          {
            product:p,
            requestedQuantity:0,
            isSelected:false
          }
        ))
        return new InitProductToProvideActionSuccess(productsToProvide)
      })
  ));

  /*
Creation le Effects pour la l'ajout
 */
  selectProductToProvideEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductToProvideActionType.SELECT_PRODUCT_TO_PROVIDE),
      map((action)=> new SelectProductToProvideActionSuccess((<ProductToProvideAction>action).payload))
    )
  );


  /* Creation le Effects pour la supprission
 */
  deleteProductEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductToProvideActionType.UNSELECT_PRODUCT_FROM_PROVIDE),
      map((action)=> new UnselectProductFromProvideActionSuccess((<ProductToProvideAction>action).payload))
    )
  );

  /* Creation le Effects pour la modification d'un  collaborateur
*/
  saveProductToProvideEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductToProvideActionType.SAVE_PRODUCT_TO_PROVIDE),
      mergeMap((action)=> {
           return this.productService.saveProductToProvide((<ProductToProvideAction>action).payload).pipe(
           map((r)=> new GetAllProductAction({})),
           catchError((err)=>of(new SaveProductToProvideActionError((err.message))))
           )
        }
      )
    )
  );






}
