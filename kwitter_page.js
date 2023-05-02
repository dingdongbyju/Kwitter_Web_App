function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         console.log(firebase_message_id);
         console.log(firebase_data);
         var name1 = message_data['name'];
         var message1 = message_data['message'];
         var like1 = message_data['like'];
         name_with_tag = "<h4> "+ name1 +"<img class='user_tick' src='tick.png'> </h4>";
         message_with_tag = "<h4 class='message_h4'>"+ message1 +"</h4>";
         like_button = "<button class='btn btn-warning' id="+ firebase_message_id +" value="+like1+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like1 +"</span></button><hr>";

         row = name_with_tag + message_with + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function updateLike(message_id) {
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}
