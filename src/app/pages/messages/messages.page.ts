import {Component, OnInit} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-messages',
  templateUrl: 'messages.page.html',
  styleUrls: ['messages.page.scss']
})
export class MessagesPage implements OnInit{
  private personList = [];
  private isHidden = false;
  constructor(private platform: Platform, private router: Router) {


    const person1 = {firstName: 'Yang',lastName:'Li',housingStatus:'Has',major:'Software Engineering',last_message:'Hello, I am new to the area and would like to live with people with similar interests such as coding',img:'assets/images/yang.JPG'};
    const person2 = {firstName: 'Jenny',lastName:'Diep',housingStatus:'Has',major:'Computer Science',last_message:'Hello, I am new to the area and would like to live with people with similar interests such as coding',img:'assets/images/jenny.jpg'};
    const person3 = {firstName: 'Kaeley',lastName:'Lenard',housingStatus:'Need',major:'Computer Science',last_message:'Hello, I am new to the area and would like to live with people with similar interests such as coding',img:'assets/images/kaeley.jpg'};
    const person4 = {firstName: 'Crystal',lastName:'Lee',housingStatus:'Need',major:'Informatics',last_message:'Hello, I am new to the area and would like to live with people with similar interests such as coding',img:'assets/images/crystal.png'};
    const person5 = {firstName: 'Hao',lastName:'Rong',housingStatus:'Has',major:'Computer Science',last_message:'Hello, I am new to the area and would like to live with people with similar interests such as coding',img:'assets/images/person.png'};
    this.personList.push(person1);
    this.personList.push(person2);
    this.personList.push(person3);
    this.personList.push(person4);
    this.personList.push(person5);


  }


  ngOnInit() {
  }

  navigateTo(page: string){
    this.platform.ready().then(() => {
      this.router.navigateByUrl(page);
    });
  }

  show_message_list_block() {
    document.getElementById('message_list_block').style.display = 'block';
    document.getElementById('chat_block').style.display = 'none';
    document.getElementById('input_box').style.display = 'none';
  }

  show_chat_block(){

    document.getElementById('message_list_block').style.display = 'none';
    document.getElementById('chat_block').style.display = 'block';
    document.getElementById('input_box').style.display = 'block';
  }
}
