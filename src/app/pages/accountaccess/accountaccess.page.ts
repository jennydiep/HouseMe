import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountaccess',
  templateUrl: './accountaccess.page.html',
  styleUrls: ['./accountaccess.page.scss'],
})
export class AccountaccessPage implements OnInit {

  constructor(private platform: Platform, private router : Router) { }

  ngOnInit() {
  }

  navigateTo(page:string){
    this.platform.ready().then(() => {
      this.router.navigateByUrl(page);
    });
  }

}
