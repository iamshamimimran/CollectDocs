    function createUserCollection(user) {
    firebase.firestore().collection('users')
    .doc(user.uid)
    .set({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        phone: user.phoneNumber,
        spetiality: '',
        portpolio: '',    });

}

// Function to get user data
async function getUserData(userID) {
    const userDetails = document.getElementById('user-details');
    if (userID) {
            const userInfoSnap = await firebase.firestore().collection('users').doc(userID).get();  
            const userInfo = userInfoSnap.data();
            if (userInfo) {
                userDetails.innerHTML = `
                <p>Name: ${userInfo.name}</p>
                <p>Email: ${userInfo.email}</p>
                <p>Phone: ${userInfo.phone}</p>
                <p>Portfolio: ${userInfo.portpolio}</p>
                <p>Speciality: ${userInfo.spetiality}</p>`
                
            } else {
                userDetails.innerHTML = 'No user data found.';
            }
    } else {
        userDetails.innerHTML = 'No user logged in.';
    }  
}

async function getUserDataRealtime(userID) {
    const userDetails = document.getElementById('user-details');
    const editProfile = document.getElementById('edti-profile-form');
    if (userID) {
            const userInfoSnap = await firebase.firestore().collection('users').doc(userID);  
            userInfoSnap.onSnapshot((doc) => {
                if(doc.exists){
                    const userInfo = doc.data();
                    if (userInfo) {
                        document.getElementById('user-name').innerText = userInfo.name ||'Not Available';
                        document.getElementById('user-email').innerText = userInfo.email;
                        document.getElementById('user-phone').innerText = userInfo.phone ||'Not Available';
                        document.getElementById('user-speciality').innerText = userInfo.spetiality ||'Not Available';
                        var portfolioLink = document.getElementById('user-portfolio');
                        portfolioLink.innerText = userInfo.portpolio ||'Not Available';
                        portfolioLink.href = userInfo.portpolio;
                    }
                    editProfile["email"].value = userInfo.email || '';
                    editProfile["name"].value = userInfo.name || '';
                    editProfile["phone"].value = userInfo.phone || '';
                    editProfile["speciality"].value = userInfo.spetiality || '';
                    editProfile["portfolio"].value = userInfo.portpolio || '';
            }
            }) 
                }else {
                userDetails.innerHTML = 'No user data found.';
            }
  
}

