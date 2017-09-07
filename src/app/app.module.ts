import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD
import { Routes } from '@angular/router';
=======
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCwhEoejP6TabjaYOOOp512BeHxF76tV0I",
  authDomain: "angular-soccer.firebaseapp.com",
  databaseURL: "https://angular-soccer.firebaseio.com",
  projectId: "angular-soccer",
  storageBucket: "angular-soccer.appspot.com",
  messagingSenderId: "1079019454546"
};
>>>>>>> 82ed474b659bcfac4571cc0649715a2e363de383

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
