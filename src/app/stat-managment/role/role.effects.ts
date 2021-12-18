import {Injectable} from "@angular/core";
import {AuthenticationService} from "../../servises/authentication.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {GetAllUserActionError, GetAllUserActionSuccess, UserActionType} from "../user/user.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {GetAllRoleActionError, GetAllRoleActionSuccess, RoleActionType} from "./role.action";




@Injectable({providedIn:"root"})
export class RoleEffects {

  constructor(private auth: AuthenticationService, private effectAction: Actions) {
  }


  getAllRoleEffect : Observable<Action>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(RoleActionType.GET_ALL_ROLE),
      mergeMap((action)=> {return this.auth.getAllRole().pipe(
          map((r)=> new GetAllRoleActionSuccess(r)),
          catchError((err)=>of(new GetAllRoleActionError(err.message)))
        )
        }
      )
    )
  );


}
