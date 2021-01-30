import { Person } from './../../_model/person';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  person: Person={email:"",password:""};
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onLogin() {
    this.authService.login(this.person).subscribe(
      (response) => {
        localStorage.setItem("token",response["token"])
       },
      (err) => {
        console.log(err);
        
       },
      () => { },
    )
  }
}
