import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDomainDetails() {
    return this.http.get<any>('http://localhost:3000/domainList');
  }

  addDomainDetails(data: any) {
    return this.http.post<any>('http://localhost:3000/domainList', data);
  }
}
