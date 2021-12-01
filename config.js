import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA-XUxCiGGUD2rtqC1ZY3BrW4WHxHCsbU8",
    authDomain: "rider-app-eb8ba.firebaseapp.com",
    projectId: "rider-app-eb8ba",
    storageBucket: "rider-app-eb8ba.appspot.com",
    messagingSenderId: "901019310827",
    appId: "1:901019310827:web:71b7ea431c0a7d9febfcae"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


