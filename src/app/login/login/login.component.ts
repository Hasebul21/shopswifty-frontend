import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/dto/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usermail?: string;
  password?: string;

  allUser: User[] = [];
  constructor(private http: HttpClient,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.get<{ [key: string]: User }>('https://shop-hub-user-default-rtdb.firebaseio.com/user.json')
      .subscribe((data) => {
        console.log(data);
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const value: User = data[key];
            value.id = key;
            this.allUser.push(value);
          }
        }
        this.isLoggedin();
      })
  }

  isLoggedin() {
    this.allUser.forEach((data) => {
      if (data.username === this.usermail && data.password === this.password) {
        const name: string | null = data.id ?? '';
        window.localStorage.setItem('isLoggedIn', name);
        this.router.navigate(['/']);
      }
    })

    console.log('login failed');

  }



}
