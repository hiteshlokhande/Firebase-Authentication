//You will find the following details in FIrbase console under project settings
var firebaseConfig = {

    apiKey: "",

    authDomain: "",

    databaseURL: "",

    projectId: "",

    storageBucket: "",

    messagingSenderId: "",

    appId: "",

    measurementId: ""

};


var nx = localStorage.getItem("storageName");
document.getElementById('nm').innerHTML = nx;

//Sign Out Function
function signOut() {
    firebase.auth().signOut().then(() => {
        location.replace("index.html");
    })
}