import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage{
  displaySearch:boolean
  countResults:number
  state:string
  hasHousingFill:String = "outline"
  needHousingFill:String = "solid"
  iconButton = "arrowDown"
  majorList = ["Computer Science","Informatics","Art","Philosophy"]


  search_location:string
  search_gender:string
  search_Major:string
  search_rent_min:number
  search_rent_max:number
  search_move_in:Date

  constructor() {
    this.displaySearch = false;
    this.countResults = 3;
    this.state ="recommendation"
  }

  clickHasHousing(){
    this.hasHousingFill = "solid"
    this.needHousingFill = "outline"
  }

  clickNeedHousing(){
    this.needHousingFill = "solid"
    this.hasHousingFill = "outline"
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
