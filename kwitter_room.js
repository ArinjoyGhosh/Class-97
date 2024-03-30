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

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Names: ", room_num);
      row = "<div class='room_names' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}

getData();

user_name = localStorage.getItem("User_Name");
document.getElementById("wel").innerHTML = "Welcome, " + user_name + "!";

function addRoom() {
  room_num = document.getElementById("add_room_input").value;
  firebase.database().ref("/").child(room_num).update({
    purpose: "adding room number"
  });
  localStorage.setItem("Room_Number", room_num);
  window.location = "kwitter_chat_page.html";
}

function redirectToRoomName(room_num) {
  console.log(room_num);
  localStorage.setItem("Room_Name", room_num);
  window.location = "kwitter_chat_page.html";
}

function logout() {
  localStorage.removeItem("User_Name");
  localStorage.removeItem("Room_Number");
  window.location = "index.html";
}