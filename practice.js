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

//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}

