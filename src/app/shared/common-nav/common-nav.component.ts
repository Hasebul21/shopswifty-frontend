import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-nav',
  templateUrl: './common-nav.component.html',
  styleUrls: ['./common-nav.component.css'],
})
export class CommonNavComponent implements OnInit {
  @Input()
  isLoggedin: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    const log = window.localStorage.getItem('isLoggedIn');
    if (log !== null && log.length > 0) this.isLoggedin = true;
  }

  logout() {
    console.log('Logout');
    window.localStorage.setItem('isLoggedIn', '');
    this.router.navigate(['/']);
    window.location.reload();
  }

  addNewProduct() {
    this.router.navigate(['/add-new-product']);
  }

  nagivateCart(){
     this.router.navigate(['/cart']);
  }
}
