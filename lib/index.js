// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAnalytics } =require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGMoiPErhcdDmvgQqoriLI334i_ilGzBQ",
  authDomain: "deliverypickupportal.firebaseapp.com",
  projectId: "deliverypickupportal",
  storageBucket: "deliverypickupportal.appspot.com",
  messagingSenderId: "830271115490",
  appId: "1:830271115490:web:9042713180c139c085cebb",
  measurementId: "G-H4J9T65BBJ"
    //...deliverypickupportal DPPProject
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);