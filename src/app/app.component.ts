import { Component } from '@angular/core';
import { FriendService } from './friend.service';
import { Client } from 'pg';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';
  postTexts = [
    'Hallo, meine Name ist Frederick! Ich bin hier, um neue Freunde zu treffen!',
    'Hallo zusammen. Freut mich, dass ihr hier seid',
    'wow thats a lotta words to bad im not readin em!',
    'Ich esse gerne Kekse'
  ]; 


  

 
  

  constructor(public fs: FriendService) {} 
  images2 = [
    './assets/img/hamster/1.jpg',
    './assets/img/hamster/2.jpg',
    './assets/img/hamster/3.jpg',
    './assets/img/hamster/4.jpg'
  ]; 

  buttonClicked() {
    alert("hallo wie geht es dir");
  }
}
