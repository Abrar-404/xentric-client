// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCybK90zQPGWdM0XeegBrmE4ZDm7UOyk40',
  authDomain: 'assignment-12-7a861.firebaseapp.com',
  projectId: 'assignment-12-7a861',
  storageBucket: 'assignment-12-7a861.appspot.com',
  messagingSenderId: '1093516653732',
  appId: '1:1093516653732:web:bf68674c2f1ba759cd2231',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
