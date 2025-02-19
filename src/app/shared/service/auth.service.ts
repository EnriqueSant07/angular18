import { Injectable } from '@angular/core';
import { UserLogin } from '../../dashboard/page/users/interface/user-login';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://laraback.test/api/';

  loginUser(credenciales: UserLogin) {
    return firstValueFrom(
      this.http.post(`${this.baseUrl}login`, credenciales).pipe(
        tap((res: any) => {
          this.setTokenAccess(res.token);
        })
      )
    );
  }

  setTokenAccess(token: string) {
    return localStorage.setItem('token', token);
  }

  getTokenAccess(): string | null {
    return localStorage.getItem('token');
  }

  verifyToken(): boolean {
    return this.getTokenAccess() != null;
  }

  logoutUser() {
    localStorage.removeItem('token');
  }


  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}users`);
  }
}
