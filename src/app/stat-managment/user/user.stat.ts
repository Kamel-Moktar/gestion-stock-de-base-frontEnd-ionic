import {AppUser} from "../../models/AppUser";
import {AppStatEnum} from "../app.stat-enum";
import {Action} from "@ngrx/store";
import {UserAction, UserActionType} from "./user.actions";

export interface UserStat{
  users : AppUser[],
  selectedUser : AppUser;
  stat : AppStatEnum,
  error : string
  currentUser : AppUser;
}

export class UserReducer{


  public static initUserStat():UserStat{  return  { users : [],selectedUser:null,stat:AppStatEnum.INITIAL,error:"",currentUser:null}};

  public static userReducer(userStat:UserStat,action : Action):UserStat{

  /*
  Gestion de l'etat d'affechage de collaborateurs
  */

  switch ((<UserAction>action).type){
    case UserActionType.GET_ALL_USER : return {...userStat,stat:AppStatEnum.LOADING}
    case UserActionType.GET_ALL_USER_SUCCESS : return {...userStat,stat:AppStatEnum.LOADED,users:(<UserAction>action).payload}
    case UserActionType.GET_ALL_USER_ERROR : return {...userStat,stat:AppStatEnum.ERROR,users:(<UserAction>action).payload}




  /*
  Gestion de l'etat d'ajout de collaborateurs
  */


    case UserActionType.ADD_USER : return {...userStat,stat:AppStatEnum.LOADING,selectedUser:(<UserAction>action).payload}
    case UserActionType.ADD_USER_SUCCESS :{
      let user : AppUser=(<UserAction>action).payload
      let users=userStat.users;
      let userList=[...userStat.users]
      userList.push(user);
      return{...userStat,stat:AppStatEnum.LOADED,users:userList}
    }
    case UserActionType.ADD_USER_ERROR : return {...userStat,stat:AppStatEnum.ERROR,users:(<UserAction>action).payload}


    /*
 Gestion de l'etat de supprission de collaborateurs
 */


    case UserActionType.DELETE_USER : return {...userStat,stat:AppStatEnum.LOADING}
    case UserActionType.DELETE_USER_SUCCESS :{
      let user1 : AppUser=(<UserAction>action).payload
      let userList1=[...userStat.users]
      let index=userList1.indexOf(user1);
      userList1.splice(index,1);
      return {...userStat,stat:AppStatEnum.LOADED,users:userList1}
    }
    case UserActionType.DELETE_USER_ERROR : return {...userStat,stat:AppStatEnum.ERROR,users:(<UserAction>action).payload}


    /*
Gestion de l'etat de la modification de collaborateurs
*/
    case UserActionType.UPDATE_USER : return{...userStat,stat:AppStatEnum.LOADING}
    case UserActionType.UPDATE_USER_SUCCESS :{
      let user2 : AppUser=(<UserAction>action).payload
      let userList2=[...userStat.users]
      userList2=userList2.map((p)=>p.id==user2.id? user2:p);
      return {...userStat,stat:AppStatEnum.LOADED,users:userList2}    }
    case UserActionType.UPDATE_USER_ERROR : return {...userStat,stat:AppStatEnum.ERROR,users:(<UserAction>action).payload}

    /*Selection d'un utilisateur */
    case UserActionType.SELECT_USER_SUCCESS : return{...userStat,selectedUser:(<UserAction>action).payload}

    /*
    Gestion de l'etat de la modification de mot de passe collaborateurs
    */
    case UserActionType.RINIT_PASSWORD : return{...userStat,stat:AppStatEnum.LOADING}
    case UserActionType.RINIT_PASSWORD_SUCCESS : return   {...userStat,stat:AppStatEnum.LOADED,selectedUser:(<UserAction>action).payload}
    case UserActionType.RINIT_PASSWORD_ERROR : return {...userStat,stat:AppStatEnum.ERROR,users:(<UserAction>action).payload}

    case UserActionType.PUT_CURRENT_USER : {

      return{...userStat,currentUser:(<UserAction>action).payload}
    }


    /* Autre*/
    default :return {...userStat}
  }



}
}
