

var firebaseConfig = {
  apiKey: "AIzaSyBDqAaFFmWAkdnNNtqPFFVGV0humT-2t7g",
  authDomain: "kwitter-a17e2.firebaseapp.com",
  databaseURL: "https://kwitter-a17e2-default-rtdb.firebaseio.com",
  projectId: "kwitter-a17e2",
  storageBucket: "kwitter-a17e2.appspot.com",
  messagingSenderId: "900063449345",
  appId: "1:900063449345:web:7ecd659ec4bbcebe518b00"
};
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding user"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.js";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
