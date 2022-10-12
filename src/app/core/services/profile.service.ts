import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { UserProfile } from '../../pages/user/profile/interfaces/profile';

const LOCAL_API = environment.LOCAL_API

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(
    private http: HttpClient
  ) { }

  getProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${LOCAL_API}profile`)
  }

  updateProfile(data: any): Observable<any> {
    return  this.http.put<any>(`${LOCAL_API}profile`, data)
  }
}
