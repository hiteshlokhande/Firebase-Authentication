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

firebase.initializeApp(firebaseConfig);

firebase.analytics();

//Sign Up Function 
function signUp() {

    const name2 = document.getElementById("name2").value;
    const email2 = document.getElementById("email2").value;
    const password2 = document.getElementById("password2").value;
    var uid = "scsc";


    firebase.auth().createUserWithEmailAndPassword(email2, password2).then((user) => {
        uid = firebase.auth().currentUser.uid;
        writeUserData();

    }).catch((error) => {
        document.getElementById("error2").innerHTML = error.message
    })


    var database = firebase.database();


    function writeUserData() {
        firebase.database().ref('users/' + uid).set({
            Name: name2,
            Email: email2,
            Password: password2
        }).then(() => {

            var name = "abc";
            uid = firebase.auth().currentUser.uid;


            const dbRef = firebase.database().ref();
            dbRef.child("users").child(uid).get().then((snapshot) => {
                    if (snapshot.exists()) {

                        name = snapshot.val().Name;
                        localStorage.setItem("storageName", name);
                        location.replace("landing.html");


                    }


                }


            );


        }).catch((error) => {
            document.getElementById("error2").innerHTML = error.message
        });


    }

}

//Sign In Function 
function signIn() {
    const email = document.getElementById("email1").value;
    const password = document.getElementById("password1").value;
    var uid = "scsc";
    var name = "abc";
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {

            uid = firebase.auth().currentUser.uid;


            const dbRef = firebase.database().ref();
            dbRef.child("users").child(uid).get().then((snapshot) => {
                    if (snapshot.exists()) {

                        name = snapshot.val().Name;
                        localStorage.setItem("storageName", name);
                        location.replace("landing.html");
                    }

                }


            );


        })
        .catch((error) => {
            document.getElementById("error1").innerHTML = error.message
        });
}


//Forgot Password Function 
function forgotPass() {
    const email = document.getElementById("email1").value;
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            swal("An email has been sent to " + email + " from where you can reset your password.", " ", "success");

        })
        .catch((error) => {
            document.getElementById("error1").innerHTML = error.message
        });
}