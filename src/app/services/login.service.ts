import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='http://localhost:9080';


  constructor(private http:HttpClient) { }
  //calling the bserver to generate  token
  generateToken(credentials:any){
    return this.http.post(`${this.url}/auth/login`,credentials)
  }

  loginUser(jwtToken){
    localStorage.setItem("jwtToken",jwtToken)
    return true;

  }
  isLoggedIn()
  {
    let jwtToken =localStorage.getItem("jwtToken");
    if(jwtToken==undefined ||jwtToken==='' || jwtToken == null){
      
        return false;
      }else{
        return true;
      }

   }
   //for logout the user
   logout(){
    localStorage.removeItem('jwtToken');
    return true;
   }

   //for getting the token
   getToken()
   {
    return localStorage.getItem('jwtToken');
  }
  }

