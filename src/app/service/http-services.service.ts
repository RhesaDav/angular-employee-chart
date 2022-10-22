import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  url = 'https://633156793ea4956cfb5b63a8.mockapi.io/api';

  constructor(
    private http: HttpClient
  ) { }

  get(url: string) {
    return this.http.get(url);
  }

  post(url: string, data: any) {
    return this.http.post(url, data);
  }

  put(url: string, data: any) {
    return this.http.put(url, data);
  }
}
