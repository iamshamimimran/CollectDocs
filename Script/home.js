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

// Function to check if the user is logged in
auth.onAuthStateChanged((user) => {
    if (!user) {
        // User is not logged in, redirect to login page
        // getUserData(null)
        window.location.href = "index.html"; // Change to your login page
    }else{
        // User is logged in, fetch user details
        getUserDataRealtime(user.uid)
        console.log(user.uid);
    }
});

// Function to log out the user
function logout() {
    auth.signOut().then(() => {
        window.location.href = "index.html"; // Redirect to login page
    }).catch((error) => {
        
        M.toast({html: 'An error occurred during logout', classes: 'rounded red'});
    });
}


function updateUserProfile(e) {
    e.preventDefault();
    const editProfile = document.getElementById('edti-profile-form');
    const userDocRef = firebase.firestore()
    .collection('users')
    .doc(firebase.auth().currentUser.uid)
    
    userDocRef.update({
        name:editProfile["name"].value,
        email:editProfile["email"].value,
        phone:editProfile["phone"].value,
        portpolio:editProfile["portfolio"].value,
        spetiality:editProfile["speciality"].value

    })
    // M.Modal.getInstance(editProfile).close();
    M.toast({html: 'Profile updated successfully', classes: 'rounded green'});

}