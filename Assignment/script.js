function landingLoad(){
    let user = prompt("Please enter your name.");

    if(user != "") {
        document.getElementById("userName").innerHTML = "Hey there, " + user;
    } 
}

function index(){
    location.href="index.html";
}

function about(){
    location.href="about.html";
}

function contact(){
    location.href="contact.html";
}