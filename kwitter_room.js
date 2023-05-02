

const firebaseConfig = {
      apiKey: "AIzaSyALy1PMwvDDbCSO3RJa0Nnc51iM3YX02YY",
      authDomain: "kwitter-app-33ea9.firebaseapp.com",
      databaseURL: "https://kwitter-app-33ea9-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-33ea9",
      storageBucket: "kwitter-app-33ea9.appspot.com",
      messagingSenderId: "1034135208333",
      appId: "1:1034135208333:web:d3c54dc6304a1766637dc4"
    };

const app = initializeApp(firebaseConfig);

function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
            purpose : "adding user"
      });
}

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.database.setItem("room_name", room_name);

      window.location = "index.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "index.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id='Room_names+' onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
