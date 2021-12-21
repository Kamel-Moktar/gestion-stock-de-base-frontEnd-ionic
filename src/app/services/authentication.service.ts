import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {AppUser} from "../models/AppUser";
import {AppRole} from "../models/AppRole";
import {Store} from "@ngrx/store";



@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  constructor(private http: HttpClient,private store:Store) {
  }

  getAllUser(): Observable<AppUser[]> {
    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;
    return this.http.get<AppUser[]>(host + "/getAllUsers", {
        headers: new HttpHeaders({"Authorization": "" + this.loadToken()}), observe: "body"
      }
    ).pipe();
  }

  getAllRole(): Observable<AppRole[]> {

    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;
    return this.http.get<AppRole[]>(host + "/getroles", {
        headers: new HttpHeaders({"Authorization": "" + this.loadToken()}), observe: "body"
      }
    ).pipe();
  }

  addUser(user: AppUser): Observable<AppUser> {
    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;

    return this.http.post<AppUser>(host + "/addUser", user, {
        headers: new HttpHeaders({"Authorization": "" + this.loadToken()}), observe: "body"
      }
    ).pipe();

  }


  deleteUser(user: AppUser): Observable<any> {
    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;
    return this.http.delete<void>(host + "/deleteUser/" + user.id, {
        headers: new HttpHeaders({"Authorization": "" + this.loadToken()})
      }
    ).pipe();

  }

  getUserByID(id: String): AppUser {
    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;
    let user: AppUser = null;
    this.http.get<AppUser>(host + "/addUser" + id, {
        headers: new HttpHeaders({"Authorization": "" + this.loadToken()}), observe: "body"
      }
    ).subscribe(
      (u) => user = u
    );
    return user;
  }

  getUserByname(name: String): Observable<AppUser>{
    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;
    let user: AppUser = null;
   return  this.http.get<AppUser>(host + "/getUserByName/" + name, {
        headers: new HttpHeaders({"Authorization": "" + this.loadToken()}), observe: "body"
      }
    )
  }


  login(user: AppUser): Observable<AuthStat> {
    let host = environment.backendHost;
    let jwt: string;
    return this.http.post(host + "/login", user, {observe: "response"}).pipe(
      map(response => {
        jwt = response.headers.get("Authorization");
        this.saveToken(jwt);
        return {token: jwt, error: null};
      }),
      catchError(er => of({token: null, error: er.message}))
    );

  }
 /*
 Modifier un collaborateur
  */

  updateUser(user: AppUser) {
    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;
    return this.http.put<AppUser>(host + "/updateUser", user, {
        headers: new HttpHeaders({"Authorization": "" + this.loadToken()}), observe: "body"
      }
     ).pipe();
  }

  /*
   Rinitialiser le mot de passe  un collaborateur
    */

  rintPassword(user: AppUser) {

    let jwt = localStorage.getItem(environment.tokenName);
    let host = environment.backendHost;
    return this.http.put<AppUser>(host + "/update/"+user.id, user.password, {
        headers: new HttpHeaders({"Authorization": "" + this.loadToken()}), observe: "body"
      }
    ).pipe();
  }

getCurrentUser(){
  let jwt = localStorage.getItem(environment.tokenName);
  let host = environment.backendHost;
  return  this.http.get<AppUser>(host + "/getCurrentUser", {
      headers: new HttpHeaders({"Authorization": "" + this.loadToken()}), observe: "body"
    }
  )
}


  saveToken(jwt: string) {
    localStorage.setItem(environment.tokenName, jwt);

  }

  loadToken() {
    return localStorage.getItem(environment.tokenName);
  }

  clearToken() {
    localStorage.removeItem(environment.tokenName);
  }


}

export interface AuthStat {
  token: string;
  error: string;
}
