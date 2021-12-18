import {Injectable} from "@angular/core";
import {AuthenticationService} from "../../servises/authentication.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  AddUserActionError,
  AddUserActionSuccess,
  DeleteUserActionError,
  DeleteUserActionSuccess,
  GetAllUserActionError,
  GetAllUserActionSuccess, RinitPasswordActionError, RinitPasswordActionSuccess,
  SelectUserActionError,
  SelectUserActionSuccess,
  UpdateUserActionError,
  UpdateUserActionSuccess,
  UserAction,
  UserActionType
} from "./user.actions";
import {catchError, map, mergeMap} from "rxjs/operators";


@Injectable({providedIn:"root"})
export class UserEffects{

  constructor(private auth:AuthenticationService,private effectAction :Actions) {
  }

  /*
  Creation le Effects pour la selection de toutes les collaborateurs
   */
  getAllUserEffect : Observable<Action>=createEffect(
  ()=>this.effectAction.pipe(
    ofType(UserActionType.GET_ALL_USER),
    mergeMap((action)=> {return this.auth.getAllUser().pipe(
      map((r)=> new GetAllUserActionSuccess(r)),
      catchError((err)=>of(new GetAllUserActionError(err.message)))
    )
    }
  )
  )
  );

  /*
Creation le Effects pour la l'ajout d'un  collaborateur
 */
  addUserEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(UserActionType.ADD_USER),
      mergeMap((action)=> {

        return this.auth.addUser((<UserAction>action).payload).pipe(
          map((r)=> new AddUserActionSuccess((<UserAction>action).payload)),
          catchError((err)=>of(new AddUserActionError(err.message)))
        )
        }
      )
    )
  );

 /* Creation le Effects pour la supprission d'un  collaborateur
*/
  deleteUserEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(UserActionType.DELETE_USER),
      mergeMap((action)=> { return this.auth.deleteUser((<UserAction>action).payload).pipe(
          map((r)=> new DeleteUserActionSuccess((<UserAction>action).payload)),
          catchError((err)=>of(new DeleteUserActionError(err.message)))
        )
        }
      )
    )
  );

  /* Creation le Effects pour la modification d'un  collaborateur
*/
  updateUserEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(UserActionType.UPDATE_USER),
      mergeMap((action)=> { return this.auth.updateUser((<UserAction>action).payload).pipe(
          map((r)=> new UpdateUserActionSuccess(r)),
          catchError((err)=>of(new UpdateUserActionError(err.message)))
        )
        }
      )
    )
  );


  /* Creation le Effects pour selectionner collaborateur
 */
  selectUser : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(UserActionType.SELECT_USER),
      mergeMap((action)=> { return this.auth.getUserByname((<UserAction>action).payload).pipe(
          map((r)=> new SelectUserActionSuccess(r)),
          catchError((err)=>of(new SelectUserActionError(err.message)))
        )
        }
      )
    )
  );

  /* Creation le Effects pour la modification mot de passe d'un  collaborateur
*/
  rinitPassworde : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(UserActionType.RINIT_PASSWORD),
      mergeMap((action)=> { return this.auth.rintPassword((<UserAction>action).payload).pipe(
          map((r)=> new RinitPasswordActionSuccess(r)),
          catchError((err)=>of(new RinitPasswordActionError(err.message)))
        )
        }
      )
    )
  );



}
