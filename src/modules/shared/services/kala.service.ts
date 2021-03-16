import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Shoes } from '../models/shoes';

@Injectable({
  providedIn: 'root',
})
export class KalaService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Shoes[]>(environment.api + '/shoes');
  }
  post(model: Shoes) {
    return this.http.post(environment.api + '/shoes', model);
  }
  put(model: Shoes) {
    return this.http.put(environment.api + `/shoes/${model.id}`, model);
  }
  delete(id: string) {
    return this.http.delete(environment.api + `/shoes/${id}`);
  }
}
