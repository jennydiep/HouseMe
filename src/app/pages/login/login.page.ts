import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private platform: Platform, private router : Router) { }

  ngOnInit() {
  }

  navigateTo(page:string){
    this.platform.ready().then(() => {
      this.router.navigateByUrl(page);
    });
  }

  navigateToAccountAccess() {
    this.router.navigateByUrl('accountaccess');
  }

}
