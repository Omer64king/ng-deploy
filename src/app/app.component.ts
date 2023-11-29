import { Component } from '@angular/core';

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

  images = [
    './assets/img/hamster/1.jpg',
    './assets/img/hamster/2.jpg',
    './assets/img/hamster/3.jpg',
    './assets/img/hamster/4.jpg'
  ]; 

  buttonClicked() {
    alert("hallo wie geht es dir");
  }
}
