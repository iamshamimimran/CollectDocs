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
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4187028754.
auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      user.sendEmailVerification();
      M.toast({html: 'Verification email sent to ' + user.email + ', please verify your email', classes: 'rounded green'});
      createUserCollection(user);
      signupForm.reset();
    })
    .catch((error) => {
      console.log(error);
      M.toast({html: 'This email already exist', classes: 'rounded red'});
    });


});


    // Reference to the authentication form
    const authForm = document.getElementById('auth-form');

    // Form submit event listener
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get user email and password
        const email = authForm['email'].value;
        const password = authForm['password'].value;

        // Sign in the user
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        var user = userCredential.user;
        console.log('User logged in:', user);
        if (user.emailVerified) {
            M.toast({
                html: 'Please wait, verifying your account...',
                classes: 'rounded purple accent-3',
                displayLength: 5000 // Duration of the toast in milliseconds
            });

            // Redirect after the toast disappears
            setTimeout(function() {
                window.location.href = "home.html";
            }, 5000); // Delay in milliseconds
        } else {
            M.toast({
                html: 'Please verify your email before logging in.',
                classes: 'rounded red accent-3',
                displayLength: 5000 // Duration of the toast in milliseconds
            });
            auth.signOut().then(() => {
                console.log('User signed out due to unverified email.');
            }).catch((error) => {
                console.log('Sign out error:', error);
            });
        }
    })
    .catch((err) => {
        console.log('Error:', err.message);

        M.toast({
            html: 'Oops! Invalid credentials',
            classes: 'rounded purple accent-3',
            displayLength: 5000 // Duration of the toast in milliseconds
        });
    });

    });

const googleButton = document.getElementById('lwg');

googleButton.addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then((result) => {
      // User is signed in with Google
        var user = result.user;
        console.log('logged in with Google:',user ); 

      M.toast({ 
        html: 'Welcome : ' + user.displayName, 
        classes: 'rounded green lighten-2',
        displayLength: 5000 // Duration of the toast in milliseconds
      });
      createUserCollection(result.user);
      M.toast({ 
        html: 'You are logged in with : ' + user.email, 
        classes: 'rounded grey darken-2',
        displayLength: 5000 // Duration of the toast in milliseconds
      });
      // Redirect after the toast disappears
      setTimeout(function() {
        window.location.href = "home.html";
      }, 5000); // Delay in milliseconds
    })
    .catch((err) => {
      M.toast({ 
        html: 'Opps ! Invalid credentials', 
        classes: 'rounded  deep-orange darken-3',
        displayLength: 5000 // Duration of the toast in milliseconds
      });
    });
});