import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'angularx-social-login';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'mg-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.scss']
})
export class NewloginComponent implements OnInit {

  email:string;
  password:string;

  constructor(private authService : AuthService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.userService.authState$.subscribe(authState => {
      if(authState){
        this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl'] || '/profile');

      }else{
        this.router.navigateByUrl('/login');
      }
    });
  }

  signInWithGoogle(): void{
    this.userService.googleLogin();
  }
  
  login(form : NgForm) : void{
    const email: string = this.email;
    const password : string = this.password;

    if(form.invalid){
      return;
    }

    form.reset();
    this.userService.loginUser(email,password);
  }
}
