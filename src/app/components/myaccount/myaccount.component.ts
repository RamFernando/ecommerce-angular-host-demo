import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from 'src/app/services/user-registration.service';

@Component({
  selector: 'mg-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {

  constructor(private service: UserRegistrationService) { }

  ngOnInit(): void {
  }

}
