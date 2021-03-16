import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<User>(environment.api + '/user');
  }
  post(model: User) {
    return this.http.post(environment.api + '/user', model);
  }
  put(model: User) {
    return this.http.put(environment.api + `/user/${model.id}`, model);
  }
  delete(id: string) {
    return this.http.delete(environment.api + `/user/${id}`);
  }
  login(){
    
  }
}
