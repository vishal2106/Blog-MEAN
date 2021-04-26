import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

readonly ROOT_URL;

constructor(private http: HttpClient) {
  this.ROOT_URL = 'http://localhost:3000';
}

get(uri: string) {
  return this.http.get(`${this.ROOT_URL}/${uri}`);
}

getOne(uri: string) {
  return this.http.get(`${this.ROOT_URL}/${uri}`);
}

post(uri: string, payload: Object) {
  console.log('Inside web request')
  return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
}

put(uri: string, payload: Object) {
  return this.http.put(`${this.ROOT_URL}/${uri}`, payload);
}

delete(uri: string) {
  console.log('Inside web service')
  return this.http.delete(`${this.ROOT_URL}/${uri}`);
}

login(email: string, password: string) {
  return this.http.post(`${this.ROOT_URL}/users/login`, {
    email,
    password
  }, {
      observe: 'response'
    });
}

signup(email: string, password: string) {
  return this.http.post(`${this.ROOT_URL}/users`, {
    email,
    password
  }, {
      observe: 'response'
    });
}


}
