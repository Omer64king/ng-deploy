import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FriendService } from '../friend.service';
import fetch from 'node-fetch';
import { Client } from 'pg';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { get } from 'http';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
 
})



export class LoginComponent {      
 

  
  email: any; 
  password: any; 
  getvalue: any; 
 

  constructor(public fs: FriendService, private http: HttpClient) {} 


  ngOnInit(): void {
    
  }
  Authentication() {
    
  this.http.get('postgresql://postgres:2929@localhost:5432/test').subscribe((data) => {
    console.log(data);
  });

    
  }
 
}

