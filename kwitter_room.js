
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD7KrmYaGudbyN5Fc7w9wFAFPbqVZmAMyE",
      authDomain: "kwitter-eee62.firebaseapp.com",
      databaseURL: "https://kwitter-eee62-default-rtdb.firebaseio.com",
      projectId: "kwitter-eee62",
      storageBucket: "kwitter-eee62.appspot.com",
      messagingSenderId: "1064151030295",
      appId: "1:1064151030295:web:bf3bd103300ab3e5371a52"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
      username=document.getElementById("username").value;
      firebase.database().ref("/").child(username).update({
            purpose:"adding user"
      });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
