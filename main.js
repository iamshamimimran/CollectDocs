// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUtEfoq1PN3-etYB5c6pFC_muKXHIfBQQ",
    authDomain: "collectdocs-cdb60.firebaseapp.com",
    projectId: "collectdocs-cdb60",
    storageBucket: "collectdocs-cdb60.appspot.com",
    messagingSenderId: "881885483292",
    appId: "1:881885483292:web:37e2caa499e4439613ead9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Reference to the signup form
const signupForm = document.getElementById('signup-form');

// Form submit event listener
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user email and password
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;

    // Sign up the user
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('User signed up:', user);
            alert('User signed up successfully!');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Error:', errorCode, errorMessage);
            alert('Error: ' + errorMessage);
        });
});
