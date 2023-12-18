import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HamsterCardComponent } from './hamster-card/hamster-card.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { FriendboxComponent } from './friendbox/friendbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';


import { FormsModule } from '@angular/forms';  // <<<< import it here
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HamsterCardComponent,
    ProposalsComponent,
    ProfileRowComponent,
    FriendboxComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    BrowserModule, 
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
