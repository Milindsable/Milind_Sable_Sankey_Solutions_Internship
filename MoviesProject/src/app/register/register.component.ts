import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls:[ './register.component.css']
})
export class RegisterComponent 
{
  user = {
    email: '',
    password: '',
  };
  username: string='';
  confirmpassword: string='';

  registerUser(form: any) 
  {
    
      if(this.username=="" || this.user.email=="" || this.user.password=="" || this.confirmpassword=="")
      {
        alert("All fields are mandatory. Please check the fields.");
        return;
      }
      
        var pattern1 = /^[a-zA-Z]+[!@#$%&*()]{1}[0-9]+/;
        if(!(pattern1.test(this.username)))
        {
          alert("Username should contain letters, symbols and numbers in it!!");
          return;
        }

        var pattern2 = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if(!(pattern2.test(this.user.email)))
        {
          alert("E-mail is incorrect!!");
          return;
        }

        if(this.user.password != this.confirmpassword)
        {
          alert("Password dosent match !!");
          return;
        }
        
        alert("Registraion Successful !!");
        localStorage.setItem(this.username,JSON.stringify(this.user));
    } 
  }

