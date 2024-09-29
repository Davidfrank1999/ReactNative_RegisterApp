// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import ReactNativeAsynStorage from '@react-native-async-storage/async-storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy1suxNVtoB8fE-NrWt47HNIJoWDY7xnQ",
  authDomain: "react-register-demo-7b6fd.firebaseapp.com",
  projectId: "react-register-demo-7b6fd",
  storageBucket: "react-register-demo-7b6fd.appspot.com",
  messagingSenderId: "56708564879",
  appId: "1:56708564879:web:4c9e0ad6907ddb0d7e6dfa"
};

let auth;
if (getApps().length ==0){
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsynStorage)
})
}else {
    auth = getAuth();
}


export default auth;