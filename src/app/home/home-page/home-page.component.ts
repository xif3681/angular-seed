import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService, ) { }

  ngOnInit() {
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
