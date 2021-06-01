import {Component, OnInit} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { StorageService } from 'src/app/storage.service';
import { ActivatedRoute , NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.page.html',
  styleUrls: ['messages.page.scss']
})
export class MessagesPage implements OnInit{
  private personList = [];
  private isHidden = false;
  showBackButton = false;
  image:string;
  name:string;
  messages = [];
  text:string;

  number_of_users:number = 7;
  id:string = '0'

  constructor(private platform: Platform, private route:ActivatedRoute, private router: Router, private location: Location, private storageService: StorageService) {

    this.personList=[]

    let i = 1;
    for (i = 1; i <= this.number_of_users; i++){
      this.storageService.getUser(String(i)).then(res => {
        this.personList.push(res)
        console.log(res)
      }).catch(e => {
        console.log('error: ', e);
      });
    }
  }

  ionViewDidEnter() {
    this.messages = [];
    this.id = this.route.snapshot.paramMap.get('id'); // get id from url

    if (this.id != null){
      console.log('test')
      this.storageService.getUser(this.id).then(res => {
        this.show_chat_block(res)
        console.log('test' + String(res))
      }).catch(e => {
        console.log('error: ', e);
      });
    }
  }


  ngOnInit() {
  }

  navigateTo(){
    this.platform.ready().then(() => {
      this.router.navigateByUrl('tabs/profile/' + this.id);
    });
  }

  show_message_list_block() {
    this.showBackButton = false;
    document.getElementById('message_list_block').style.display = 'block';
    document.getElementById('chat_block').style.display = 'none';
    document.getElementById('input_box').style.display = 'none';
  }

  show_chat_block(person:any){
    this.showBackButton = true;
    console.log("show chat" + person.id)
    this.id = person.id;
    this.image = person.image;
    this.name = person.firstName + " " + person.lastName;

    document.getElementById('message_list_block').style.display = 'none';
    document.getElementById('chat_block').style.display = 'block';
    document.getElementById('input_box').style.display = 'block';
  }

  backButton(){
    this.showBackButton = false;
    console.log("back button");
    let temp = this.route.snapshot.paramMap.get('id');
    if (temp != null){ // came from a profile page
      this.location.back();
    }
    else{
      this.show_message_list_block();
    }
  }

  sendMessage(){
    this.messages.push(this.text)
    this.text = ''; // clear text after
  }

}
