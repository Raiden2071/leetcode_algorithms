import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

export type routes = 'layout/dashboard' | 'layout/fag';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private userService = inject(UserService);

  public ngOnInit() {
    this.userService.getCurrentUser();
  }

  public redirectTo(route: routes): void {

  }


}
