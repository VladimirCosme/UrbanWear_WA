Set Up the Script: In the .js file, create a script to configure Google authentication for
a web app using Firebase. Import the necessary Firebase libraries to initialize the app
and manage authentication. Then, set up the firebaseConfig object with your projectspecific credentials, initialize Firebase, and retrieve the authentication service. Set the
message language to English. Define a Google authentication provider and add an
event listener to the login button in index.html, so when clicked, it opens a popup
allowing the user to sign in with their Google account. If login is successful, the user
info is shown in the console, and they’re redirected to a new page (page-about.html). If
there’s an error, error messages can be handled accordingly.


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA_EBzUFoO0xG3XxgvTWGiPXlgIGm0uoKk",
    authDomain: "urbanwearapp.firebaseapp.com",
    projectId: "urbanwearapp",
    storageBucket: "urbanwearapp.appspot.com",
    messagingSenderId: "474647247488",
    appId: "1:474647247488:web:f1c5c2e8fffe43eead0465"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();
const googleLogin = document.getElementById("login");
googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href = "page-about.html";
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
        });
})