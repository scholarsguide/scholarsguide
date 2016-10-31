function toggleSignIn() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut();
    }
    else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            }
            else {
                alert(errorMessage);
            }
            console.log(error);
        });
    }
}

function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        }
        else {
            alert(errorMessage);
        }
        console.log(error);
    });
}

function sendEmailVerification() {
    firebase.auth().currentUser.sendEmailVerification().then(function () {
        alert('Email Verification Sent!');
    });
}

function sendPasswordReset() {
    var email = document.getElementById('email').value;
    firebase.auth().sendPasswordResetEmail(email).then(function () {
        alert('Password Reset Email Sent!');
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
        }
        else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
        }
        console.log(error);
    });
}

function initApp() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            document.getElementById('signinstatus').textContent = 'Signed in';
            document.getElementById('signin').textContent = 'SIGN OUT';
            if (!emailVerified) {}
        }
        else {
            document.getElementById('signinstatus').textContent = 'Signed out';
            document.getElementById('signin').textContent = 'SIGN IN';
        }
    });
    document.getElementById('signin').addEventListener('click', toggleSignIn, false);
    document.getElementById('signup').addEventListener('click', handleSignUp, false);
    document.getElementById('verifyemail').addEventListener('click', sendEmailVerification, false);
    document.getElementById('resetpassword').addEventListener('click', sendPasswordReset, false);
}
window.onload = function () {
    initApp();
};