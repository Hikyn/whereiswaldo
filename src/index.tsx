import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import Game from './components/Game';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getFirebaseConfig } from './firebase-config';
import { doc, setDoc } from "firebase/firestore"; 
import checkSecretCode from './checkSecretCode';

// SUPER SECRET PRIVATE KEYS
const firebaseAppConfig = getFirebaseConfig();

// Initialize firebase application and add analytics
const app = initializeApp(firebaseAppConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

let getRandomInt: (max: number) => number;
getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

let writeScoreToDB: (name: string, score: number, usedSecretCode: string) => void;
writeScoreToDB = async (name, score, usedSecretCode) => {
  if (await !checkSecretCode(usedSecretCode)) {
    return
  }
  let randomInt = getRandomInt(10000000000);
  // Add a new document in collection "cities"
  await setDoc(doc(db, 'scores', `${randomInt}`), {
    name: name,
    time: score,
    usedSecretCode: usedSecretCode
});
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <><Game writeScoreToDB={writeScoreToDB}/></>
  
);
