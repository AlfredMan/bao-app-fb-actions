// https://medium.com/geekculture/fixing-the-firebaseapp-name-already-exists-error-f556ce2f7d67
// import firebase from "firebase/app";
import ENV from "../env/env";
// import firebase from "firebase/app";
// import "firebase/auth";
import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import "firebase/auth";
// import "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: ENV.firebase_config.apiKey,
  authDomain: ENV.firebase_config.authDomain,
  projectId: ENV.firebase_config.projectId,
  storageBucket: ENV.firebase_config.storageBucket,
  messagingSenderId: ENV.firebase_config.messagingSenderId,
  appId: ENV.firebase_config.appId,
  measurementId: ENV.firebase_config.measurementId,
};
// Initialize Firebase
// export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();
export const auth = getAuth();
// export const analytics =
//   typeof window !== "undefined" ? getAnalytics(firebaseApp) : null;
