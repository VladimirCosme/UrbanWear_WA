

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