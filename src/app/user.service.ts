import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = '-1';

  constructor() { }

  getUser(): string {
    return this.user;
  }

  login(user: string) {
    this.user = user;
  }
}
