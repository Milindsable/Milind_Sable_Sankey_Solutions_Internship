import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { authGuard } from './Service/auth.guard';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { 'path':'', component: LoginComponent},
    { 'path':'login', component:LoginComponent},
    { 'path':'register', component: RegisterComponent},
    { 'path':'mainpage', component:MainPageComponent, canActivate:[authGuard]},
    { 'path':'details/:id', component:DetailsComponent, canActivate:[authGuard] },
];

