import { createApp } from 'vue'
import firebase from './credentials/firebase.config.js';
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: firebase.FIREBASE_API_KEY,
  authDomain: firebase.FIREBASE_AUTH_DOMAIN,
  databaseURL: firebase.FIREBASE_DATABASE_URL,
  projectId: firebase.FIREBASE_PROJECT_ID,
  storageBucket: firebase.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: firebase.FIREBASE_MESSAGING_SENDER_ID,
  appId: firebase.FIREBASE_APP_ID,
  measurementId: firebase.FIREBASE_MEASUREMENT_ID
};

initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app');
