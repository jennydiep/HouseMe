import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  majors: any = true;
  isHousingClick: number = 0;
  isLocationClick: number = 0;
  isCoedClick: number = 0;
  isBedroomClick: number = 0;
  isGenderClick: number = 0;

  firstName: string = "";
  lastName: string = "";
  birthday: string = "";
  major:string = "";
  gender: string = "";
  housingStatus: string = "Have housing";
  housingLocation: string = "On Campus";
  peoplePerBedroom: string = "1";
  coedPref: string = "All Genders";
  maxRent: string = "";

  // personality page variables
  drugs: string = "";
  alcohol: string = "";
  wake: string = "";
  sleep: string = "";
  chores: string = "";
  pets: string = "";
  interests: string = "";
  bio: string = "";

  userData: object = {};

  constructor(private router:Router, public storageService: StorageService) {
    this.majors = [
      'Business Information Management',
      'Game Design and Interactive Media',
      'Computer Science',
      'Computer Science and Engineering',
      'Data Science',
      'Informatics',
      'Software Engineering',
      'Undeclared'
    ];
  }

  ngOnInit() {
  }

  navigateToHome(){
    this.router.navigateByUrl('');
  }

  navigateToAccountAccess() {
    this.router.navigateByUrl('accountaccess');
  }

  onMaleClick() {
    this.gender = "Male";
    this.isGenderClick = 1;
  }

  onFemaleClick() {
    this.gender = "Female";
    this.isGenderClick = 2;
  }

  onNonBinaryClick() {
    this.gender = "Other";
    this.isGenderClick = 3;
  }

  haveHousingClick() {
    this.housingStatus = "Have housing";
    this.isHousingClick = 1;
  }

  noHousingClick() {
    this.housingStatus = "Do not have housing";
    this.isHousingClick = -1;
  }

  onCampusClick() {
    this.housingLocation = "On Campus";
    this.isLocationClick = 1;
  }

  offCampusClick() {
    this.housingLocation = "Off Campus";
    this.isLocationClick = -1;
  }

  bedOneClick() {
    this.peoplePerBedroom = "1";
    this.isBedroomClick = 1;
  }

  bedTwoClick() {
    this.peoplePerBedroom = "2";
    this.isBedroomClick = 2;
  }

  bedThreeClick() {
    this.peoplePerBedroom = "3";
    this.isBedroomClick = 3;
  }

  bedFourClick() {
    this.peoplePerBedroom = "4";
    this.isBedroomClick = 4;
  }

  yesCoedClick() {
    this.coedPref = "All Genders";
    this.isCoedClick = 1;
  }

  noCoedClick() {
    this.coedPref = "Similar Only";
    this.isCoedClick = -1;
  }

  addUserData() {
    this.userData["id"] = '0'; // hard coded for main user
    this.userData["firstName"] = this.firstName;
    this.userData["lastName"] = this.lastName;
    this.userData["birthday"] = this.birthday;
    this.userData["major"] = this.major;
    this.userData["gender"] = this.gender;
    this.userData["housingStatus"] = this.housingStatus;
    this.userData["housingLocation"] = this.housingLocation;
    this.userData["peoplePerBedroom"] = this.peoplePerBedroom;
    this.userData["coedPref"] = this.coedPref;
    this.userData["maxRent"] = this.maxRent;

    this.userData['drugs'] = this.drugs;
    this.userData['alcohol'] = this.alcohol;
    this.userData['wake'] = this.wake;
    this.userData['sleep'] = this.sleep;
    this.userData['chores'] = this.chores;
    this.userData['pets'] = this.pets;
    this.userData['interests'] = this.interests;
    this.userData['bio'] = this.bio;


    this.storageService.addUser('0', this.userData);
    this.storageService.getUser('0').then(res => {
      if (res != null) {
        console.log(res);
      }
    }).catch(e => {
      console.log('error: ', e);
    });
  }

}
