import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(user: User): Observable<any> {
    //put in first argument route
    return this.http.post<any>('', user);
  }

  public login(user: User): Observable<string> {
    //put in first argument route
    return this.http.post('', user, { responseType: 'text'});
  }

  public getMe(): Observable<string> {
    //put in first argument route
    return this.http.get('',  { responseType: 'text'});
  }
}
