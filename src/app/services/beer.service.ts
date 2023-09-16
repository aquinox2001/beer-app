import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPVALUES } from '../shared/global';
import { Beer } from '../models/Beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  baseUrl = HTTPVALUES.baseUrl
  headers = HTTPVALUES.headers



  constructor(private http: HttpClient) { }

  getAllBeers() {
    return this.http.get<Beer[]>(this.baseUrl + 'beers', { 'headers': this.headers })
  }
}
