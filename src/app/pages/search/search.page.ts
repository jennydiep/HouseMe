//TODO: Handle Rent Range Input to be only numbers
//TODO: Handle 
//TODO: Has Housing shall has a different set of questions


import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage{
  displaySearch:boolean
  countResults:number = 0
  state:string
  hasHousingFill:String = "solid"
  needHousingFill:String = "outline"
  iconButton = "arrowDown"
  majorList = ["Computer Science","Informatics","Art","Philosophy"]
  recommendationList =[]
  personList=[]

  search_location:string
  search_gender:string
  search_Major:string
  search_rent_min:number
  search_rent_max:number
  search_move_in:Date

  number_of_users:number = 5;

  constructor(private platform: Platform, private router : Router, private storageService: StorageService) {
    this.displaySearch = false;
    this.state ="recommendation"

    let i = 1; 
    for (i = 1; i <= this.number_of_users; i++){
      this.storageService.getUser(String(i)).then(res => {
        this.recommendationList.push(res)
        
      }).catch(e => {
        console.log('error: ', e);
      });
    }
      
    
    
    // let person1 = {firstName: "Hao",lastName:"Rong",housingStatus:"Has",major:"Valorant",bio:"Hello, I am new to the area and would like to live with people with similar interests such as coding",img:""}
    // let person2 = {firstName: "Jenny",lastName:"Diep",housingStatus:"Has",major:"Apex",bio:"Hello, I am new to the area and would like to live with people with similar interests such as coding"}
    // let person3 = {firstName: "Kaeley",lastName:"Lenard",housingStatus:"Need",major:"CS",bio:"Hello, I am new to the area and would like to live with people with similar interests such as coding"}
    // let person4 = {firstName: "Crystal",lastName:"Lee",housingStatus:"Need",major:"Informatics",bio:"Hello, I am new to the area and would like to live with people with similar interests such as coding"}
    // this.personList.push(person1)
    // this.personList.push(person2)
    // this.personList.push(person3)
    // this.personList.push(person4)


  }

  clickHasHousing(){
    this.hasHousingFill = "solid"
    this.needHousingFill = "outline"
    // Do not have housing
    this.recommendationList=[]
    for(let i = 1 ; i<=this.number_of_users; i++){
      this.storageService.getUser(String(i)).then(res => {
        console.log(res)
        if(res["housingStatus"]=="Have housing"){
          this.recommendationList.push(res);
          this.countResults++
        }
      }).catch(e => {
        console.log('error: ', e);
      });
    }
    
  }

  clickNeedHousing(){
    this.needHousingFill = "solid"
    this.hasHousingFill = "outline"

    this.recommendationList=[]
    for(let i = 1 ; i<=this.number_of_users; i++){
      this.storageService.getUser(String(i)).then(res => {
        console.log(res)
        if(res["housingStatus"]=="Do not have housing"){
          this.recommendationList.push(res);
          this.countResults++
        }
      }).catch(e => {
        console.log('error: ', e);
      });
    }
  }

  showAdvanceSearch(){
    if(this.displaySearch==false){
      this.iconButton = "arrowUp"
      this.displaySearch = true;
      return
    }
    this.displaySearch = false;
    this.iconButton = "arrowDown"
  }
  
  applySearch(){
    console.log("Searching:",this.search_location)
    console.log("Searching:",this.search_gender)
    console.log("Searching:",this.search_Major)
    console.log("Searching:",this.search_rent_min)
    console.log("Searching:",this.search_rent_max)
    console.log("Searching:",this.search_move_in)
    this.state = "search"
  }
}
