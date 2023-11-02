import { initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyATjFwkxl21nhs9cGSqtxPNIS2tKy-JDXQ",
    authDomain: "fir-auth-ceb.firebaseapp.com",
    projectId: "fir-auth-ceb",
    storageBucket: "fir-auth-ceb.appspot.com",
    messagingSenderId: "620338227309",
    appId: "1:620338227309:web:b711f17f3a80f03540b764",
    measurementId: "G-W18NQNWHZE"
  };
  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)