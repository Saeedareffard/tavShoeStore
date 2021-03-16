import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Favourites } from '../models/favourits';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Favourites>(environment.api + '/favourits ');
  }
  post(model: Favourites) {
    return this.http.post(environment.api + '/favourits ', model);
  }
  put(model: Favourites) {
    return this.http.put(environment.api + `/favourits /${model.id}`, model);
  }
  delete(id: string) {
    return this.http.delete(environment.api + `/favourits /${id}`);
  }
}
