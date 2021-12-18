import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {catchError, map, mergeMap} from "rxjs/operators";
import {ProductService} from "../../servises/product.productService";
import {GetAllProductAction} from "../product/product.action";
import {
  InitProductToSaleActionSuccess,
  ProductToSaleAction,
  ProductToSaleActionType, SaveProductToSaleActionError,
  SelectProductToSaleActionSuccess, UnselectProductFromSaleActionSuccess
} from "./sale.action";
import {ProductToSale} from "../../models/product-to-sale";




@Injectable({providedIn:"root"})
export class ProductToSaleEffects {

  constructor(private productService: ProductService, private effectAction: Actions) {

  }

  /*
  Creation le Effects pour la selection de toutes les collaborateurs
   */
  initProductToSaleEffect: Observable<Action> = createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductToSaleActionType.INIT_PRODUCTS_TO_SALE),
      map((action)=>{
        let products=(<ProductToSaleAction>action).payload;
        let productsToSale:ProductToSale[]=[];
         products.forEach((p)=>{
           if(p.quantity>0) {
              productsToSale.push(
                {
                  product: p,
                  requestedQuantity: 0,
                  isSelected: false
                }
              )
            }
           }
         )
        return new InitProductToSaleActionSuccess(productsToSale)
      })
    ));

  /*
Creation le Effects pour la l'ajout
 */
  selectProductToSaleEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductToSaleActionType.SELECT_PRODUCT_TO_SALE),
      map((action)=> new SelectProductToSaleActionSuccess((<ProductToSaleAction>action).payload))
    )
  );


  /* Creation le Effects pour la supprission
 */
  deleteProductEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductToSaleActionType.UNSELECT_PRODUCT_FROM_SALE),
      map((action)=> new UnselectProductFromSaleActionSuccess((<ProductToSaleAction>action).payload))
    )
  );

  /* Creation le Effects pour la modification d'un  collaborateur
*/
  saveProductToSaleEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductToSaleActionType.SAVE_PRODUCT_TO_SALE),
      mergeMap((action)=> {
          return this.productService.saveProductToSale((<ProductToSaleAction>action).payload).pipe(
            map((r)=> new GetAllProductAction({})),
            catchError((err)=>of(new SaveProductToSaleActionError((err.message))))
          )
        }
      )
    )
  );






}
