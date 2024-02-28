import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  get isMainPage(): boolean {
    return this.router.url === '/mainpage' || this.router.url.startsWith('/details/'); 
  }

  logout() {
    sessionStorage.clear();
    alert("Logut Successful !!");
    this.router.navigateByUrl("/login");
  }
}
