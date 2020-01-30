import React from "react";
import ReactDOM from "react-dom";
import App from "./views/app/App.jsx";
import * as firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDLdv_5W5VpKDfTBm2j6tHuLf51dww_LXI",
    authDomain: "dccs-react-starter-kit.firebaseapp.com",
    databaseURL: "https://dccs-react-starter-kit.firebaseio.com",
    projectId: "dccs-react-starter-kit",
    storageBucket: "dccs-react-starter-kit.appspot.com",
    messagingSenderId: "942073650693",
    appId: "1:942073650693:web:a0409adf2fd5e51c94c66c",
    measurementId: "G-8ZG15MY183"
};

firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById("root"));
