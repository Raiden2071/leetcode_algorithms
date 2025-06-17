import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type User = {
  id: string;
  email: string;
  permissions: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpClient = inject(HttpClient);
  user = signal<User | null>(null);

  constructor() { }

  public getCurrentUser() {
    this.httpClient.get<User>('assets/data/user.json').subscribe(v => {
      console.log('Данные пользователя:', v);
      this.user.set(v);
    });
  }
}
