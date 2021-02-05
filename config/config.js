import firebase from "firebase/app";
// import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.DB_API_KEY,
  authDomain: process.env.DB_AUTH_DOMAIN,
  projectId: process.env.DB_PROJECT_ID,
  storageBucket: process.env.DB_STORAGE_BUCKET,
  messagingSenderId: process.env.DB_MESSAGE_SENDER_ID,
  appId: process.env.DB_APP_ID,
  measurementId: process.env.DB_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // if ("measurementId" in firebaseConfig) firebase.analytics();
}

export default firebase;
