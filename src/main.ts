import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAp5jHyiv-mHdm85iApkTwlFTYzu0Z8QxQ",
  authDomain: "angularjs-200f4.firebaseapp.com",
  projectId: "angularjs-200f4",
  storageBucket: "angularjs-200f4.appspot.com",
  messagingSenderId: "881833412565",
  appId: "1:881833412565:web:cb5165cc7ca8259c361f5c",
  measurementId: "G-PBNRRG0T1E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, user => {
  if(user != null) 
  {
    console.log("logged in");
  }
  else
  {
    console.log("no user"); 
  }
});


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
