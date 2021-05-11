import { Injectable } from '@angular/core';
import { AuthService, SocialUser, GoogleLoginProvider } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  auth: boolean = false;
  private SERVER_URL: string;
  private user;
  authState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.auth);
  userData$: BehaviorSubject<SocialUser | ResponseModel> = new BehaviorSubject<SocialUser | ResponseModel>(null);

  constructor(private authService: AuthService,
    private httpClient: HttpClient) {

    authService.authState.subscribe((user: SocialUser) => {
      if (user != null) {
        this.auth = true;
        this.authState$.next(this.auth);
        this.userData$.next(user);
      }
    });
  }

  //login user with email and password
  loginUser(email: string, password: string):void{
    this.httpClient.post(`${this.SERVER_URL}/auth/login`,{email,password})
    .subscribe((data: ResponseModel) => {
      this.auth = data.auth;
      this.authState$.next(this.auth);
        this.userData$.next(data);
    });
  }

  // Google Auth
  googleLogin():void{
    console.log("OK");
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout():void{
    this.authService.signOut();
    this.auth = false;
    this.authState$.next(this.auth);
  }

}

export interface ResponseModel {
  token: string;
  auth: boolean;
  email: string;
  fname: string;
  lname: string;
  photoUrl: string;
  userId: number;
}