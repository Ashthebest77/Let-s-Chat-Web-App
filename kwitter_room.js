
//ADD YOUR FIREBASE LINKS HERE'
const firebaseConfig = {
      apiKey: "AIzaSyDI3kyBlcsTB1JgxFSeGcLCFxPnpN7GUcE",
      authDomain: "kwitter-51284.firebaseapp.com",
      databaseURL: "https://kwitter-51284-default-rtdb.firebaseio.com",
      projectId: "kwitter-51284",
      storageBucket: "kwitter-51284.appspot.com",
      messagingSenderId: "833728957389",
      appId: "1:833728957389:web:0279ae3e44622fa3f41284",
      measurementId: "G-43H6KMV0Q9"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name --" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName'(this.id)>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
function redirectToRoomName (name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
}
function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("user_name")
      window.location = "kwitter.html"
}
