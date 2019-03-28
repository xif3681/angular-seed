import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router, CanActivateChild, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  // 这个 ActivatedRouteSnapshot 包含了即将被激活的路由，而 RouterStateSnapshot 包含了该应用即将到达的状态。 你应该通过守卫进行检查。
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // CanActivate 这种类型的 Guard用来控制是否允许进入当前的路径
    const url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // CanActivateChild 这种类型的 Guard用来控制是否允许进入当前路径的所有子路径
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    // CanLoad 用于控制一个异步加载的子模块是否允许被加载。
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }


  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
  // checkLogin(url) {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     return true;
  //   }
  //   return false;
  // }
}
