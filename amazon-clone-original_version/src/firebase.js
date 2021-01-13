import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBylhbcJ1G0wWqQWFXYpn4UiBxpTMVieMc",
    authDomain: "clone-6d2f5.firebaseapp.com",
    databaseURL: "https://clone-6d2f5.firebaseio.com",
    projectId: "clone-6d2f5",
    storageBucket: "clone-6d2f5.appspot.com",
    messagingSenderId: "828021162406",
    appId: "1:828021162406:web:70438965220f911d1d8f67"
});

const auth = firebase.auth();

export { auth };