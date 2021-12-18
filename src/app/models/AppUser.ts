import {AppRole} from "./AppRole";

export interface AppUser{
  id : number;
  userName : string,
  password : string;
  roles : AppRole[];
}
