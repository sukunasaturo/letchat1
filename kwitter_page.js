function send(){
    msg = document.getElementById("msg").Value;
    firebase.database().ref(room_page).push({
        name:user_name,
        message:msg,
        like:0
    })
    document.getElementById("msg").Value = "";
}
