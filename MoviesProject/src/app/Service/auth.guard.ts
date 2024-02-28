import { CanActivateFn, Router } from '@angular/router';
import { Inject, inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => 
{
  const router = inject(Router);
  const data = sessionStorage.getItem("User");

  if(data != null)
  {
    return true;
  } 
  else
  {
    router.navigateByUrl("/login");
    return false;
  }
};
