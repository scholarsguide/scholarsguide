var auth = firebase.auth();
var storageRef = firebase.storage().ref();

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var file = evt.target.files[0];
    var metadata = {
        'contentType': file.type
    };
    storageRef.child(file.name).put(file, metadata).then(function (snapshot) {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        console.log(snapshot.metadata);
        var url = snapshot.metadata.downloadURLs[0];
        console.log('File available at', url);
        document.getElementById('linkbox').innerHTML = "Uploaded Successfully. Thank You!";
    }).catch(function (error) {
        console.error('Upload failed:', error);
    });
}
window.onload = function () {
    document.getElementById('file').addEventListener('change', handleFileSelect, false);
    document.getElementById('file').disabled = true;
    auth.onAuthStateChanged(function (user) {
        if (user) {
            console.log('Anonymous user signed-in.', user);
            document.getElementById('file').disabled = false;
        }
        else {
            console.log('There was no anonymous session. Creating a new anonymous user.');
            auth.signInAnonymously();
        }
    });
}