import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// // v-- fb init
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDqoX52nqdqjFFZW6dJgo48dR2MW8y7Ep8",
//   authDomain: "baolondon-ae6db.firebaseapp.com",
//   databaseURL: "https://baolondon-ae6db-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "baolondon-ae6db",
//   storageBucket: "baolondon-ae6db.appspot.com",
//   messagingSenderId: "175175266110",
//   appId: "1:175175266110:web:0fb5160bf044d6d47e866f",
//   measurementId: "G-1SHEXEH5LP"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// // ^-- fb init




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
