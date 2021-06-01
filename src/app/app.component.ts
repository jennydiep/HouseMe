import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  users = [{"id":"1", "image":"../../../assets/images/jenny.jpg", "firstName":"Jenny","lastName":"Diep","birthday":"11/23/1999","major":"Computer Science","gender":"Female","housingStatus":"Have housing","housingLocation":"On Campus",
  "peoplePerBedroom":"1","coedPref":"All Genders","maxRent":1000,"drugs":"Never","alcohol":"Never","wake":"2021-05-29T12:00:30.022-07:00","sleep":"2021-05-29T01:00:30.023-07:00",
  "chores":"Equal","pets":"No","interests":"Apex Legends, Boba, Anime, Piano, Drawing",
  "bio":"Hello~ I'm a fourth year computer science major who's graduting this year. I'm looking for roomates who are clean. Please feel free to message me if interested!"},

  {"id":"2", "image":"../../../assets/images/crystal.png","firstName":"Crystal","lastName":"Lee","birthday":"11/05/2000","major":"Computer Science","gender":"Female","housingStatus":"Have housing","housingLocation":"Off Campus",
  "peoplePerBedroom":"1","coedPref":"Similar Only","maxRent":1100,"drugs":"Never","alcohol":"Never","wake":"2021-05-30T09:00:27.768-07:00","sleep":"2021-05-30T23:30:27.769-07:00",
  "chores":"Equal","pets":"No","interests":"Boba, matcha, dance, Netflix, Marvel",
  "bio":"Hello! My name is Crystal and I'm a third year Computer Science and Informatics major. I'm looking for two more roommates to fill a VDCN floor plan :)"},

  {"id":"3", "image":'../../../assets/images/person.png', "firstName":"Melody","lastName":"Chen","birthday":"02/02/1998","major":"Game Design and Interactive Media","gender":"Female","housingStatus":"Do not have housing","housingLocation":"Off Campus",
  "peoplePerBedroom":"2","coedPref":"Similar Only","maxRent":1000,"drugs":"Sometimes","alcohol":"Sometimes","wake":"2021-05-30T10:00:53.558-07:00","sleep":"2021-05-30T03:00:53.558-07:00",
  "chores":"Equal","pets":"Yes","interests":"PC Gaming, houseplants, thrifting","bio":"Hey! Looking for a nice place with a well-furnished kitchen to meal prep in."},

  {"id":"4", "image":'../../../assets/images/person.png', "firstName":"Alex","lastName":"Davis","birthday":"10/20/2000","major":"Data Science","gender":"Male","housingStatus":"Have housing","housingLocation":"On Campus",
  "peoplePerBedroom":"4","coedPref":"All Genders","maxRent":800,"drugs":"Never","alcohol":"Frequently","wake":"2021-05-30T11:00:25.482-07:00","sleep":"2021-05-30T02:00:25.482-07:00",
  "chores":"No Assignment","pets":"No","interests":"Games, my frat, going to the beach","bio":"Sup, new to the area and looking for fun housemates."},

  {"id":"5", "image":'../../../assets/images/person.png', "firstName":"Junny","lastName":"Lewis","birthday":"05/10/2000","major":"Business Information Management","gender":"Non-Binary","housingStatus":"Have housing","housingLocation":"Off Campus",
  "peoplePerBedroom":"3","coedPref":"All Genders","maxRent":1000,"drugs":"Never","alcohol":"Never","wake":"2021-05-30T08:00:09.997-07:00","sleep":"2021-05-30T23:00:09.998-07:00",
  "chores":"Equal","pets":"Yes","interests":"Netflix, plants, online shopping","bio":"Seeking something affordable! I am introverted so avoiding party houses."},

  {"id":"6", "image":"../../../assets/images/kaeley.jpg", "firstName":"Kaeley","lastName":"Lenard","birthday":"2000-09-01T03:11:47.702-07:00","major":"Informatics","gender":"Female","housingStatus":"Do not have housing","housingLocation":"Off Campus","peoplePerBedroom":"2","coedPref":"All Genders","maxRent":900,"drugs":"Never","alcohol":"Sometimes","wake":"2021-06-01T09:00:47.703-07:00","sleep":"2021-06-01T01:00:47.703-07:00","chores":"Equal","pets":"No","interests":"Design, Drums, Stardew Valley, Netflix, Shabu Shabu","bio":"Hello! I am a third year Informatics major from Orange County looking for housing, preferably a place with a parking space"}



]

  constructor(private platform: Platform, private router : Router, private storageService: StorageService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('accountaccess');
    });

    // add default users into db
    this.addUsers();

  }

  addUsers(){
    var i = 0
    for (i=0; i<this.users.length; i++){
      this.storageService.addUser(String(i+1), this.users[i]);
    }
  }
}
