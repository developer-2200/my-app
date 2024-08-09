import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials={
    email:'',
    password:''
  }
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    if((this.credentials.email!=''&& this .credentials.password!='')&&(this.credentials.email!=null && this.credentials.password!=null)){
      console.log("WE Have to fill Detais properly");

      this.loginService.generateToken(this.credentials).subscribe(     
        (response:any)=>{
          // if sucess
          this.loginService.loginUser(response.jwtToken)
          console.log("jwtToken:"+response.jwtToken);

          window.location.href="/dashboard";
        },
        error=>{
          //if error
          console.log(error);
        }
      )
      
    }else{
      console.log("form is submitted");
    }
  }

}
