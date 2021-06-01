//TODO: Handle Rent Range Input to be only numbers
//TODO: Handle 
//TODO: Has Housing shall has a different set of questions


import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { MinLengthValidator } from '@angular/forms';

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
  majorList = ["Computer Science","Game Design and Interactive Media","Data Science","Business Information Management","Informatics"]
  recommendationList =[]
  personList=[]

  search_location:string
  search_gender:string
  search_Major:string
  search_rent_min:number
  search_rent_max:number
  search_move_in:Date

  number_of_users:number = 6;

  constructor(private platform: Platform, private router : Router, private storageService: StorageService) {
    this.displaySearch = false;
    this.state ="recommendation"

    let i = 1; 
    this.countResults = 0;
    for (i = 1; i <= this.number_of_users; i++){
      this.storageService.getUser(String(i)).then(res => {
        this.personList.push(res)
        if(res["housingStatus"]=="Have housing"){
          let recObj = res
          recObj["bio"] = this.shortenBio(recObj["bio"])
          this.recommendationList.push(recObj)
          this.countResults++
        }
        console.log(res)
      }).catch(e => {
        console.log('error: ', e);
      });
    }
  }
  shortenBio(bio:String){
    let wordArray = bio.split(' ')
    let result = ""
    for(let i = 0 ; i < Math.min(wordArray.length, 10);i++){
      result+=wordArray[i]+" "
    }
    result=result.substr(0,result.length-1)
    if(result.endsWith(".")){
      result=result.substr(0,result.length-1)
    }
    result+="..."
    return result
  }
  clickHasHousing(){
    this.hasHousingFill = "solid"
    this.needHousingFill = "outline"

    let userGender = ""
    this.storageService.getUser('0').then(res =>{
      userGender = res.gender
    }).catch(e => {
      console.log('error: ', e);
    });

    this.countResults = 0;
    this.recommendationList=[]
    for (let i = 0; i < this.personList.length; i++){
      if(this.personList[i]["housingLocation"] !== this.search_location && this.search_location !== undefined){
        continue
      }
      if(this.personList[i]["coedPref"]!== this.search_gender && this.search_gender !== undefined){
        continue
      }
      if(this.personList[i]["major"]!== this.search_Major && this.search_Major !== undefined){
        continue
      }
      if(Number(this.search_rent_min) > this.personList[i]["maxRent"] && this.search_rent_min !==undefined){
        continue
      }
      if(this.hasHousingFill === "solid" && this.personList[i]["housingStatus"]=="Do not have housing"){
        continue
      }
      if(this.hasHousingFill === "outline" && this.personList[i]["housingStatus"]=="Have housing"){
        continue
      }
      let recObj = this.personList[i]
      recObj["bio"] = this.shortenBio(recObj["bio"])
      this.recommendationList.push(recObj)
      this.countResults++
    }
    
  }

  clickNeedHousing(){
    this.needHousingFill = "solid"
    this.hasHousingFill = "outline"

    let userGender = ""
    this.storageService.getUser('0').then(res =>{
      userGender = res.gender
    }).catch(e => {
      console.log('error: ', e);
    });

    this.countResults = 0;
    this.recommendationList=[]
    for (let i = 0; i < this.personList.length; i++){
      if(this.personList[i]["housingLocation"] !== this.search_location && this.search_location !== undefined){
        continue
      }
      if(this.personList[i]["coedPref"]!== this.search_gender && this.search_gender !== undefined){
        continue
      }
      if(this.personList[i]["major"]!== this.search_Major && this.search_Major !== undefined){
        continue
      }
      if(Number(this.search_rent_min) > this.personList[i]["maxRent"] && this.search_rent_min !==undefined){
        continue
      }
      if(this.hasHousingFill === "solid" && this.personList[i]["housingStatus"]=="Do not have housing"){
        continue
      }
      if(this.hasHousingFill === "outline" && this.personList[i]["housingStatus"]=="Have housing"){
        continue
      }
      let recObj = this.personList[i]
      recObj["bio"] = this.shortenBio(recObj["bio"])
      this.recommendationList.push(recObj)
      this.countResults++
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

    let userGender = ""
    this.storageService.getUser('0').then(res =>{
      userGender = res.gender
    }).catch(e => {
      console.log('error: ', e);
    });

    this.countResults = 0;
    this.recommendationList=[]
    for (let i = 0; i < this.personList.length; i++){
      if(this.personList[i]["housingLocation"] !== this.search_location && this.search_location !== undefined){
        continue
      }
      if(this.personList[i]["coedPref"]!== this.search_gender && this.search_gender !== undefined){
        continue
      }
      if(this.personList[i]["major"]!== this.search_Major && this.search_Major !== undefined){
        continue
      }
      if(Number(this.search_rent_min) > this.personList[i]["maxRent"] && this.search_rent_min !==undefined){
        continue
      }
      if(this.hasHousingFill === "solid" && this.personList[i]["housingStatus"]=="Do not have housing"){
        continue
      }
      if(this.hasHousingFill === "outline" && this.personList[i]["housingStatus"]=="Have housing"){
        continue
      }
      let recObj = this.personList[i]
      recObj["bio"] = this.shortenBio(recObj["bio"])
      this.recommendationList.push(recObj)
      this.countResults++
    }
  }
  clearSearch(){
    this.search_location=undefined
    this.search_gender=undefined
    this.search_Major=undefined
    this.search_rent_min=undefined
    this.search_rent_max=undefined
    this.search_move_in=undefined
    this.applySearch()
  }
  onCardClick(person:any){
    this.router.navigateByUrl('tabs/profile/' + person.id);
  }
}
