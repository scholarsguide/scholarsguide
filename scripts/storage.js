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
            document.getElementById('bannerContent2').innerHTML = "<div style="padding:50px;">
                    <ul>
                        <h3 style="font-size:16px;color:#777;" onclick="location.href='https://drive.google.com/open?id=0B6AJqmAr4REEM25RVzc0YlFtcW8'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#777'">Accounting</h3>
                    <h3 style="font-size:16px;color:#777;" onclick="location.href='https://drive.google.com/open?id=0B6AJqmAr4REEWXlMSnBtMjJ2a1k'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#777'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#aaa'">Biology</h3>
                    <h3 style="font-size:16px;color:#777;" onclick="location.href='https://drive.google.com/open?id=0B6AJqmAr4REEcTJsWXVMQ3hxMWs'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#777'">Business</h3>
                    <h3 style="font-size:16px;color:#777;" onclick="location.href='https://drive.google.com/open?id=0B6AJqmAr4REEb3RfbERKbERjUlU'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#777'">Chemistry</h3>
                    <h3 style="font-size:16px;color:#777;" onclick="location.href='https://drive.google.com/open?id=0B6AJqmAr4REEbWg0WVM2R0FZMGM'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#777'">Computer Science</h3>
                    <h3 style="font-size:16px;color:#777;" onclick="location.href='https://drive.google.com/open?id=0B6AJqmAr4REEVlp6RlBuTFZiZms'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#777'">Economics</h3>
                    <h3 style="font-size:16px;color:#777;" onclick="location.href='https://drive.google.com/open?id=0B6AJqmAr4REEQ09yc09uYXI5ZUU'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#777'">English Language</h3>
                    <h3 style="font-size:16px;color:#777;" onclick="location.href='https://drive.google.com/open?id=0B6AJqmAr4REETXpoV3hEVW9EYjQ'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#777'">English Literature</h3>
                    <h3 style="font-size:16px;color:#777;" onclick="location.href='https://drive.google.com/open?id=0B6AJqmAr4REENGkyOG9BV243Rjg'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#777'">French</h3>
                    <h3 style="font-size:16px;color:#777;" onclick="location.href='https://drive.google.com/open?id=0B6AJqmAr4REEMVZQREVMaEJRc0k'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#777'">Global Perspectives</h3>
                    <h3 style="font-size:16px;color:#777;" onclick="location.href='https://drive.google.com/open?id=0B6AJqmAr4REEM0Z3eUNKUDM2ak0'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#777'">Hindi</h3>
                    <h3 style="font-size:16px;color:#777;" onclick="location.href='https://drive.google.com/open?id=0B6AJqmAr4REERGRMSkFQTkc4T0U'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#777'">Mathematics (Additional and Extended)</h3>
                    <h3 style="font-size:16px;color:#777;" onclick="location.href='https://drive.google.com/open?id=0B6AJqmAr4REEaTUtYXZ5WkEwSkE'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#777'">Physics</h3>
                    <h3 style="font-size:16px;color:#777;" onclick="location.href='https://drive.google.com/open?id=0B6AJqmAr4REET1JRbHhoNU9RTGM'" onmouseover="this.style.color = '#fff'" onmouseout="this.style.color = '#777'">Tamil</h3> </ul>
                </div>"
        }
        else {
            console.log('There was no anonymous session. Creating a new anonymous user.');
            auth.signInAnonymously();
        }
    });
}