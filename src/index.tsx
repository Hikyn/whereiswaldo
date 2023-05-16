import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import Game from './components/Game';
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './firebase-config';


// SUPER SECRET PRIVATE KEYS
const firebaseAppConfig = getFirebaseConfig();

// Initialize firebase application and add analytics
initializeApp(firebaseAppConfig);
//const analytics = getAnalytics(app);
//const db = getFirestore(app);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <><Game /></>
  
);
