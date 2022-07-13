import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAu6W2Pjq6oPO4hvBct4PIYvXdDsFTmFaQ",
  authDomain: "android-camera-api.firebaseapp.com",
  projectId: "android-camera-api",
  storageBucket: "android-camera-api.appspot.com",
  messagingSenderId: "1022298318348",
  appId: "1:1022298318348:web:a592e5ef40a42da5adf029",
  measurementId: "G-Q3LDYC4MSZ"
};

const app = initializeApp(firebaseConfig);

export default app