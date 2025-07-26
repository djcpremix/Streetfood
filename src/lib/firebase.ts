import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  "projectId": "streetvendorconnect-szkwb",
  "appId": "1:236972503189:web:85828ae597dd7162ff6b9c",
  "storageBucket": "streetvendorconnect-szkwb.firebasestorage.app",
  "apiKey": "AIzaSyC8DfCUANY0qEd1akN8qycmp_4DjKwmZ9U",
  "authDomain": "streetvendorconnect-szkwb.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "236972503189"
};

// Initialize Firebase for SSR
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
