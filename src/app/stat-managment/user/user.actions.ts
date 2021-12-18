import {AppUser} from "../../models/AppUser";

export enum UserActionType{

   /*
    Action pour selectionner le utilisateur (les collaborateur en pecherie)
    */
  GET_ALL_USER="[User] get all user",
  GET_ALL_USER_SUCCESS="[User] get all user success",
  GET_ALL_USER_ERROR="[User] get all user error",

  /*
   Action pour ajouter un utlisateur  utilisateur (les collaborateur en pecherie)
   */
  ADD_USER="[User] ajouter user",
  ADD_USER_SUCCESS="[User] ajouter user success",
  ADD_USER_ERROR="[User] ajouter user error" ,

  /*
   Action pour supprimer un utilisateur (les collaborateur en pecherie)
   */
  DELETE_USER="[User] delete user",
  DELETE_USER_SUCCESS="[User] delete user success",
  DELETE_USER_ERROR="[User] delete user error",

/*
 Action pour modifier un utilisateur (les collaborateur en pecherie)
 */
  UPDATE_USER="[User] edit user",
  UPDATE_USER_SUCCESS="[User] edit user success",
  UPDATE_USER_ERROR="[User] edit user error",

  /*Selectionner un utilisteur dans le but de le maitre à jour */

  SELECT_USER="[User] select user",
  SELECT_USER_SUCCESS="[User] select user success",
  SELECT_USER_ERROR="[User] select  user error",

  /*
  * Rinsitialiser le mot de passe d'un utilisateeur*/
  RINIT_PASSWORD="[User] rininite password",
  RINIT_PASSWORD_SUCCESS="[User] rinitepassword success",
  RINIT_PASSWORD_ERROR="[User] select  rinitpassword error",

  /*save currente user*/
  PUT_CURRENT_USER="put current user"

}

export class PutCurrentUser{
  type : UserActionType= UserActionType.PUT_CURRENT_USER;
  constructor(public payload : AppUser) {
  }
}
/*
Get all user action
* */
export class GetAllUserAction{
  type : UserActionType= UserActionType.GET_ALL_USER;
  constructor(public payload : any) {
  }
 }
 export class GetAllUserActionSuccess {
    type: UserActionType= UserActionType.GET_ALL_USER_SUCCESS ;
    constructor(public payload: AppUser[]) {
    }
  }

export class GetAllUserActionError {
  type:UserActionType= UserActionType.GET_ALL_USER_ERROR ;
  constructor(public payload: string ) {
  }
}


/*
Add user action
* */
export class AddUserAction{
  type : UserActionType=  UserActionType.ADD_USER;
  constructor(public payload : AppUser) {

  }
}
export class AddUserActionSuccess {
  type:UserActionType= UserActionType.ADD_USER_SUCCESS ;
  constructor(public payload: AppUser) {
  }
}

export class AddUserActionError {
  type: UserActionType= UserActionType.ADD_USER_ERROR ;
  constructor(public payload: string ) {
  }
}

/*
Update user action
* */
export class UpdateUserAction{
  type : UserActionType= UserActionType.UPDATE_USER;
  constructor(public payload : AppUser) {
  }
}
export class UpdateUserActionSuccess {
  type: UserActionType= UserActionType.UPDATE_USER_SUCCESS ;
  constructor(public payload: AppUser) {
  }
}

export class UpdateUserActionError {
  type: UserActionType= UserActionType.UPDATE_USER_ERROR ;
  constructor(public payload: string ) {
  }
}



/*
Delete user action
* */
export class DeleteUserAction{
  type : UserActionType= UserActionType.DELETE_USER;
  constructor(public payload : AppUser) {
  }
}
export class DeleteUserActionSuccess {
  type: UserActionType= UserActionType.DELETE_USER_SUCCESS ;
  constructor(public payload: AppUser) {
  }
}

export class DeleteUserActionError {
  type: UserActionType= UserActionType.DELETE_USER_ERROR ;
  constructor(public payload: string ) {
  }

}

/*
* selectionner un utilisateur */
export class SelectUserAction {
  type: UserActionType = UserActionType.SELECT_USER;

  constructor(public payload: String) {
  }
}
export class SelectUserActionSuccess {
  type: UserActionType = UserActionType.SELECT_USER_SUCCESS;

  constructor(public payload: AppUser) {
  }

}
export class SelectUserActionError {
  type: UserActionType = UserActionType.SELECT_USER_ERROR;

  constructor(public payload: String) {
  }
}

/*
* rinistiolier un mot de passe */

export class RinitPasswordAction {
  type: UserActionType = UserActionType.RINIT_PASSWORD;

  constructor(public payload: AppUser) {
  }
}
export class RinitPasswordActionSuccess {
  type: UserActionType = UserActionType.RINIT_PASSWORD_SUCCESS;

  constructor(public payload: AppUser) {
  }

}
export class RinitPasswordActionError {
  type: UserActionType = UserActionType.RINIT_PASSWORD_ERROR;

  constructor(public payload: String) {
  }
}
export type UserAction=
  GetAllUserAction|GetAllUserActionSuccess|GetAllUserActionError|
  AddUserAction|AddUserActionSuccess|AddUserActionError|
  DeleteUserAction|DeleteUserActionSuccess|DeleteUserActionError|
  UpdateUserAction|UpdateUserActionSuccess|UpdateUserActionError|
  SelectUserAction|SelectUserActionSuccess|SelectUserActionError|
  RinitPasswordAction| RinitPasswordActionSuccess| RinitPasswordActionError;
