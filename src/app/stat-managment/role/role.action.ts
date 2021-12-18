import {AppUser} from "../../models/AppUser";
import {AppRole} from "../../models/AppRole";

export enum RoleActionType{

  /*
   Action pour selectionner le utilisateur (les collaborateur en pecherie)
   */

  GET_ALL_ROLE="[Role] get all user",
  GET_ALL_ROLE_SUCCESS="[Role] get all user success",
  GET_ALL_ROLE_ERROR="[Role] get all user error"
}


export class GetAllRoleAction{
  type : RoleActionType= RoleActionType.GET_ALL_ROLE;
  constructor(public payload : any) {
  }
}
export class GetAllRoleActionSuccess {
  type: RoleActionType= RoleActionType.GET_ALL_ROLE_SUCCESS ;
  constructor(public payload: AppRole[]) {
  }
}

export class GetAllRoleActionError {
  type:RoleActionType= RoleActionType.GET_ALL_ROLE_ERROR ;
  constructor(public payload: string ) {
  }



}


export type RoleAction=
  GetAllRoleAction|GetAllRoleActionSuccess|GetAllRoleActionError;
