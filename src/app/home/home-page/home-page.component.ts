import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{


  userLogin : boolean = false;
  isLoggedIn: string | null= null;

  ngOnInit(): void {
    this.isLoggedIn = window.localStorage.getItem('isLoggedIn')
    console.log(this.isLoggedIn);
    if(this.isLoggedIn !== null && this.isLoggedIn.length > 0) this.userLogin = true;
  }

}
