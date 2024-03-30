// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbs9DOhBeOqVVZgmLMZNuZvVHetJJAIFk",
    authDomain: "kwitter-ee0b2.firebaseapp.com",
    databaseURL: "https://kwitter-ee0b2-default-rtdb.firebaseio.com",
    projectId: "kwitter-ee0b2",
    storageBucket: "kwitter-ee0b2.appspot.com",
    messagingSenderId: "271001348518",
    appId: "1:271001348518:web:695119fb5f9ce9e011c767"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
localStorage.removeItem("User Name");
localStorage.removeItem("Room Name");
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            //End code
        });
    });
}
getData();

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("User_Name", user_name);
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    window.location = "kwitter_room.html";
}