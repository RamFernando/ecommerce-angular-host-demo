import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import {ResponseModel} from '../../services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  myUser: any;

  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.userData$
    .pipe(
      map(user => {
        if(user instanceof SocialUser){
          return {
            email : 'test@test.com',
            ...user
          };
        }else{
          return user;
        }
      })
    )
    .subscribe((data : ResponseModel | SocialUser) : void => {
      this.myUser = data;
    });
  }

  logout():void{
    this.userService.logout();
  }

}
