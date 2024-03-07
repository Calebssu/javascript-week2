//Function Runs on load to get the users age and display it on the page
function landingLoad(){
    let user = prompt("Please enter your name.");

    //Conditional to ensure the user cannot submit an empty prompt
    if(user != "") {
        document.getElementById("userName").innerHTML = "Hey there, " + user;
    } 
}

//Function that redirects to home page
function index(){
    location.href="index.html";
}

//Function that redirects to about page
function about(){
    location.href="about.html";
}

//Function that redirects to contact page
function contact(){
    location.href="contact.html";
}

//Function that runs after the submission
const formHTML = document.getElementById("form")
formHTML.addEventListener("submit", function(){
    //Randomly genning a num
    let randomNum = Math.floor(Math.random() * 9001);

    //Retrieving user input
    const subjectInput = document.getElementById("subject").value;
    const emailInput = document.getElementById("email").value;
    const bodyInput = document.getElementById("message").value;

    //Setting the subject to display the randomNum before user message
    const output = subjectInput + " #" + randomNum;

    //Building the email based on user input
    //Opening the mail app of choice on the users PC/Mobile device
    window.location.href = `mailto:caleb.3than23@gmail.com?subject=${output}&cc=${emailInput}&body=${bodyInput}`;

    //Changing the website after submission
    document.getElementById("adjust").innerHTML = `<button class="conButtons" onclick="index()">Return home</button>`;

    //Auto redirect after 5 seconds
    setTimeout(
        function() {
            location.href="index.html"
        }, 5000);
})