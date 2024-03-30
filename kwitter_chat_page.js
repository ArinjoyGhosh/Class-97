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

function sendMsg() {
    message = document.getElementById("message").value;
    localStorage.setItem("Message: ", message);
    firebase.database().ref(room_name).push({
        name: user_name,
        message_sent: message,
        room_name: room_name,
        like: 0
    })
    document.getElementById("message").innerHTML = "";
}


user_name = localStorage.getItem("User_Name");
room_name = localStorage.getItem("Room_Name");


function logout() {
    localStorage.removeItem("User_Name");
    localStorage.removeItem("Room_Number");
    window.location = "index.html";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message_sent'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

   row = name_with_tag + message_with_tag +like_button + span_with_tag;       
   document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}
