import * as firebase from "firebase"
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBOpXStsqdrTN97mNPrBgjz0qfVKqSFM38",
    authDomain: "signal-clone-33d14.firebaseapp.com",
    projectId: "signal-clone-33d14",
    storageBucket: "signal-clone-33d14.appspot.com",
    messagingSenderId: "44800056977",
    appId: "1:44800056977:web:3cf3d4455e5adb400ea930"
};
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);

} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };