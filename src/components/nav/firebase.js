import firebase from "firebase";

var firebaseapp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCo4JQiYA0rcTtNbxRxlqqSXX_xRnIjz2o",
        authDomain: "wdagency-dc225.firebaseapp.com",
        projectId: "wdagency-dc225",
        storageBucket: "wdagency-dc225.appspot.com",
        messagingSenderId: "241338736037",
        appId: "1:241338736037:web:f7aeeaddad7b33d1955c4c",
        measurementId: "G-9CCP3YERFD"

    }
);

var db = firebaseapp.firestore();

export { db }


