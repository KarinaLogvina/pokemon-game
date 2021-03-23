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

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);

        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSoket = (cb) => {
        this.database.ref('pokemon').on('value', (snapshot) => {
            cb(snapshot.val())
        })
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val())
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon)
    }

    addPokemon = (data, cb) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(data).this(() => cb());
    }
}



export default Firebase;