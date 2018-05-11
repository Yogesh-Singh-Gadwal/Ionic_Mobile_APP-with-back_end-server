import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers} from '@angular/http';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  

  constructor( public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  login(user)
  {
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http
    .post('http://localhost:8080/user/login',user,{headers:headers})
    .map(res=>res.json())


  }

  signup(user)
  {

    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http
    .post('http://localhost:8080/user',user,{headers:headers})
    .map(res=>res.json())

    


  }
  localstorage(a)
  {
    localStorage.setItem('userinfo',a);

  }
 
}
