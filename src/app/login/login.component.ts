import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}
  user = {
    username: '',
    password: ''
  };

  loginUser(loginForm: any) {
   
    if (loginForm.valid) {
      
      var userInfoString = localStorage.getItem(this.user.username)

      if(userInfoString != null)
      {
        var info = JSON.parse(userInfoString);
        var password = info.password;
        if(password != this.user.password)
        {
          alert("Login failed !!");
        }
        else
        {
          sessionStorage.setItem("User",this.user.username);
          alert("Login Successful !!");
          this.router.navigateByUrl("/mainpage");
        }
      }
      else
      {
        alert("User not found !!")
      }
    }
  }

}
