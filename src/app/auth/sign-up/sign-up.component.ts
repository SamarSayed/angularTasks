import { Person } from './../../_model/person';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  person: Person = {email:"",password:"",repeatedPassword:""}
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onRegister() {
    console.log(this.person)
    this.authService.register(this.person).subscribe(
      (response) => {
        console.log(response);
       },
      (err) => {
        console.log(err);
       },
      () => { },
    )
  }
}
