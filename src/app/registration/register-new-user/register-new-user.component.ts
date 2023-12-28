import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/dto/registrationApiResponse.model';


@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.css']
})
export class RegisterNewUserComponent implements OnInit {

    username ?: string;
    password ?: string;
    useremail ?: string;


    constructor(private http : HttpClient,
               private router : Router){}

    ngOnInit(): void {

    }

    onSubmit(){
      console.log(this.username, this.useremail, this.password);
       this.http.post<ApiResponse>('https://shop-hub-user-default-rtdb.firebaseio.com/user.json', {
         username : this.username,
         useremail : this.useremail,
         password : this.password
       }).subscribe((data : ApiResponse)=>{
           console.log(data);
           const { name } = data;
           window.localStorage.setItem('isLoggedIn', name);
           this.router.navigate(['/']);
       })
    }

}
