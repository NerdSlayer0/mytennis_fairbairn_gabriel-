//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyABeXnpvAidXNyWifGQ7saR-BvAkgdDY9w",
    authDomain: "fir-comp1800-f0f91.firebaseapp.com",
    projectId: "fir-comp1800-f0f91",
    storageBucket: "fir-comp1800-f0f91.appspot.com",
    messagingSenderId: "735048606677",
    appId: "1:735048606677:web:acb3570cda8a7b7075935c"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();