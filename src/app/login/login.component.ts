import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FriendService } from '../friend.service';
import fetch from 'node-fetch';
import { Client } from 'pg';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {Request, Response} from 'express'; 
import { get } from 'http';
import { json } from 'stream/consumers';




var cors = require('cors')

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
 
})



export class LoginComponent {      
 

  i: any; 
  passwordright: boolean; 
  emailright: boolean;
  passwordright2: boolean; 
  emailright2: boolean;

  
  jsonsting: any; 
  checkarray: any; 
  email: any; 
  password: any; 
  getvalue: any; 
  Jsondata: any; 
  templateInJsonFormat: any;
 

  constructor(public fs: FriendService, private http: HttpClient) {} 


  ngOnInit(): void {
    
  }
  Authentication() {
    this.http.get('http://localhost:7300/credentials').subscribe((data) => {
    this.passwordright = false; 
    this.emailright = false; 
      //console.log(Object.values(data));
        this.jsonsting = JSON.stringify(data);

        this.templateInJsonFormat = JSON.parse(this.jsonsting);


        this.checkarray = this.templateInJsonFormat.password1
        console.log(this.templateInJsonFormat.countries[0].emaillogin);


        for (this.i = 0; this.i < this.templateInJsonFormat.countries.length; this.i++) {
          if (this.templateInJsonFormat.countries[this.i].emaillogin == this.email) {
            console.log("ye"); 
            return this.emailright = true;
          }
          if (this.templateInJsonFormat.countries[this.i].passwordlogin == this.password) {
            return this.passwordright = true;
          }
            
        }
        return false;
    });
  }

  Registration() {
    this.http.get('http://localhost:7300/credentials').subscribe((data) => {
      this.passwordright2 = false; 
      this.emailright2 = false; 
        //console.log(Object.values(data));
          this.jsonsting = JSON.stringify(data);
  
          this.templateInJsonFormat = JSON.parse(this.jsonsting);
  
  
          this.checkarray = this.templateInJsonFormat.password1
          console.log(this.templateInJsonFormat.countries[0].emaillogin);
  
  
          for (this.i = 0; this.i < this.templateInJsonFormat.countries.length; this.i++) {
            if (this.templateInJsonFormat.countries[this.i].emaillogin == this.email && this.templateInJsonFormat.countries[this.i].passwordlogin == this.password) {
              console.log("ye"); 
              this.emailright2 = true;
              this.passwordright2 = true;
              return; 
            }
            if (this.passwordright2 == false && this.emailright2 == false)
            {
              this.passwordright2 = false;
              this.emailright2 = false;
            }
          }
          const body = { emaillogin: this.email, passwordlogin: this.password}; 

          console.log(this.passwordright2); 
          if (this.passwordright2 == false && this.emailright2 == false)
          {
            this.http.post('http://localhost:7300/credentials', body, ).subscribe((data) => {
              console.log(body);
            });
          }
      });
     
  }

  

  
}

