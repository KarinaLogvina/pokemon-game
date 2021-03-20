import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB0lxbu9S80mdpVZcqLG8Onr-Wjq1CcJj0",
    authDomain: "pokemon-game-6f96a.firebaseapp.com",
    databaseURL: "https://pokemon-game-6f96a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pokemon-game-6f96a",
    storageBucket: "pokemon-game-6f96a.appspot.com",
    messagingSenderId: "304745868968",
    appId: "1:304745868968:web:7371ab1604ef46baf81c9d"
};


firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = firebase.database();

export default database;