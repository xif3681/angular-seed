import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(private http: HttpClient, public router: Router, ) {

  }
 // 虚假登录
  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  // 真实的登录API
  loginR(userName: String, password: String): Observable<any> {
    return this.http.post('/security/login', { 'userName': userName, 'password': password }, { responseType: 'text' })
      .pipe(map((res) => {
        const token = res;
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({ loginName: userName, token: token }));
          localStorage.setItem('token', token);
          this.isLoggedIn = true;
          return true;
        } else {
          this.isLoggedIn = false;
          return false;
        }
      }));
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
