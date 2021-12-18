import { AppRole } from "src/app/models/AppRole";
import {AppStatEnum} from "../app.stat-enum";
import {Action} from "@ngrx/store";
import {RoleAction, RoleActionType} from "./role.action";


export interface RoleStat{
  roles : AppRole[],
  stat : AppStatEnum,
  error : string
}

export class RoleReducer {


  public static initRoleStat(): RoleStat {
    return {roles: [], stat: AppStatEnum.INITIAL, error: ""}
  };

  public static roleReducer(userStat: RoleStat, action: Action): RoleStat {

    /*
    Gestion de l'etat d'affechage de collaborateurs
    */

    switch ((<RoleAction>action).type) {
      case RoleActionType.GET_ALL_ROLE :
        return {...userStat, stat: AppStatEnum.LOADING}
      case RoleActionType.GET_ALL_ROLE_SUCCESS :
        return {...userStat, stat: AppStatEnum.LOADED, roles: (<RoleAction>action).payload}
      case RoleActionType.GET_ALL_ROLE_ERROR :
        return {...userStat, stat: AppStatEnum.ERROR, roles: (<RoleAction>action).payload}
      default: return {...userStat}
    }
  }
}
