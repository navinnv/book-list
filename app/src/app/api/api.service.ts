import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  rootURL

  constructor(private http: HttpClient) {
    this.rootURL = "http://localhost/book-list/server/"
  }


  get(type: any, action: any, data: any) {
    let array = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        action: action,
        datas: data
      },
    }

    if (type == "delete") return this.http.delete(this.rootURL, array)
    else  return this.http.get(this.rootURL, array)
  }

  service(type: any, action: any, data: any) {

    let array:any = {
      action: action,
      datas: data
    }

    if (type == "put") return this.http.put(this.rootURL, array)
    else return this.http.post(this.rootURL, array)
  }
}