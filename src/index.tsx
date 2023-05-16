import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import App from './components/App';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
import { getFirebaseConfig } from './firebase-config';


// SUPER SECRET PRIVATE KEYS
const firebaseAppConfig = getFirebaseConfig();

// Initialize firebase application and add analytics
const app = initializeApp(firebaseAppConfig);
//const analytics = getAnalytics(app);
//const db = getFirestore(app);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
