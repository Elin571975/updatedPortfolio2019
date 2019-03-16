//INITIALIZE FIREBASE
var config = {
    apiKey: "AIzaSyA2BdVeQ5EoO_d9t4HU03NQJiG7Wh7m2uo",
    authDomain: "myprofile-cac2b.firebaseapp.com",
    databaseURL: "https://myprofile-cac2b.firebaseio.com",
    projectId: "myprofile-cac2b",
    storageBucket: "myprofile-cac2b.appspot.com",
    messagingSenderId: "681540099629"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// HOME PAGE
$("#enterBtn").on("click", function(event) {
    event.preventDefault(); //prevents page from reloading
    window.location.href = "portfolio.html";

});


// PORTFOLIO PAGE - WHERE SITES ARE PUBLISHED

$("#nightOut").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://ajentd.github.io/Night-out/");

});

$("#psychic").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://elin571975.github.io/psychicGame/");
});

$("#train").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://elin571975.github.io/trainTracker/");
});


$("#moms").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://elin571975.github.io/momsBdayCard/");

});

$("#trivia").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://elin571975.github.io/triviaGame/");

});

$("#crystal").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://elin571975.github.io/crystalCollector/");

});


$("#project2").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://atw80-201903051.herokuapp.com");

});

$("#liri").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://elin571975.github.io/liri-node-app/");

});

// PORTFOLIO CODE PAGE

$("#nightOutCode").on("click", function(event) {
    event.preventDefault(); 
    window.open(" https://github.com/aJentD/Night-out");

});

$("#psychicCode").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://github.com/Elin571975/psychicGame");
});

$("#trainCode").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://github.com/Elin571975/trainTracker");
});


$("#momsCode").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://github.com/Elin571975/momsBdayCard");

});

$("#triviaCode").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://github.com/Elin571975/triviaGame");

});

$("#crystalCode").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://github.com/Elin571975/crystalCollector");

});

$("#projec2Code").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://github.com/aJentD/Project-2.git");

});

$("#liriCode").on("click", function(event) {
    event.preventDefault(); 
    window.open("https://github.com/Elin571975/liri-node-app/");

});





// CONTACT PAGE

$("#contactBtn").on("click", function(event) {
    
    event.preventDefault(); //prevents page from reloading
    
    // Grabs user input
    var userName = $("#inputName").val().trim();   
    var userEmail = $("#inputEmail").val().trim();
    var userMessage = $("#inputMessage").val().trim();  
 
    // Creates local "temporary" object for holding user data-------------------------------------------//
    var newEntry = {
      name: userName,
      email: userEmail,
      message: userMessage,
     };

    // Uploads user data to the database
    database.ref().push(newEntry);
     
    alert("Thank you for your message. We will be in touch shortly!");

    // Clears all of the text-boxes -------------------------------------------------------------------//
    $("#inputName").val("");
    $("#inputEmail").val("");
    $("#inputMessage").val("");

    window.location.href = "index.html";

    });