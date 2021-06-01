import { Component } from '@angular/core';
import { ActivatedRoute , NavigationExtras} from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  id:string;

  name:string = "";
  age:string = "N/A";
  bio:string = "";
  major:string = "N/A";
  housingStatus:string;
  housingLocation:string;
  coedPref:string;
  peoplePerBedroom:string;
  maxRent:number;
  drugs:string = "N/A";
  alcohol:string = "N/A";
  wake:string = "N/A";
  sleep:string = "N/A";
  chores:string = "N/A";
  pets:string = "N/A";
  interests:string = "N/A";
  gender:string;

  constructor(private storageService:StorageService, private route:ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    if (this.id == null) // no id means it is main user's profile
    {
      this.getUserInfo('0'); // 0 is where main user data is stored
    }
    else{
      this.getUserInfo(this.id);
    }
  }

  getUserInfo(id:string){
    this.storageService.getUser('0').then(res => {
      if (res != null) {
        console.log(res);
        this.name = res.firstName + " " + res.lastName;
        console.log(this.name)
        if (res.birthday != "") {
          this.age = String(Number(new Date().getFullYear()) - Number(new Date(res.birthday).getFullYear())) + " years";
        }
        this.bio = res.bio;
        this.major = res.major;
        this.housingStatus = res.housingStatus;
        this.housingLocation = res.housingLocation;

        if (res.peoplePerBedroom > 1){
          this.peoplePerBedroom = res.peoplePerBedroom+ " people"
        }
        else{
          this.peoplePerBedroom = "1 person"
        }
        this.coedPref = res.coedPref;
        this.maxRent = res.maxRent;
        this.gender = res.gender;
        if (res.drugs != ""){
          this.drugs = res.drugs;
        }
        if (res.alcohol != ""){
          this.alcohol = res.alcohol;
        }
        console.log("wake " + String(res.wake));
        if (res.wake != ""){
          this.wake = this.getTimeIn12HourFormat(res.wake);
        }
        if (res.sleep != ""){
          this.sleep = this.getTimeIn12HourFormat(res.sleep);
        }
        if (res.chores != ""){
          this.chores = res.chores;
        }
        if (res.pets != ""){
          this.pets = res.pets;
        }
        this.interests = "";
        let interestsList = res.interests.split(',');
        let i = 0;
        for (i=0; i<interestsList.length-1; i++){
          this.interests += interestsList[i] + " • ";
        }
        this.interests += interestsList[interestsList.length-1];
        this.gender = res.gender;

        console.log(res);
      }
    }).catch(e => {
      console.log('error: ', e);
    });
  }

  getTimeIn12HourFormat(date:string){
    var hours = new Date(date).getHours() > 12 ? new Date(date).getHours()- 12 : new Date(date).getHours();
    var am_pm = new Date(date).getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? Number("0" + hours) : Number(hours);
    var minutes = new Date(date).getMinutes() < 10 ? "0" + new Date(date).getMinutes() : new Date(date).getMinutes();
    return hours + ":" + minutes + " " + am_pm;
  }

}
