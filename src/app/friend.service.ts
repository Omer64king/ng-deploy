import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names = [];
  texts = [];
  images = [];

  constructor() { }

  addfriend(name:string, text:string, image:string ){
    this.names.push(name);
    this.texts.push(text);
    this.images.push(image);
  }

  deletefriend (name:string, text:string, image:string ){
    console.log(this.names);
    let i = this.names.indexOf(name);
    this.names.splice(i, 1);
    this.images.splice(i, 1);
    this.texts.splice(i, 1);
  }
}
