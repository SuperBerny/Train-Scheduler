// Initialize Firebase
  var config = {
   apiKey: "AIzaSyCuJIzicdXIeHq7ryX2z2r2QqRovQeoD9g",
   authDomain: "train-scheduler-b7ba4.firebaseapp.com",
   databaseURL: "https://train-scheduler-b7ba4.firebaseio.com",
   projectId: "train-scheduler-b7ba4",
   storageBucket: "",
   messagingSenderId: "69857934826"
 };


firebase.initializeApp(config);

 //Assign database to the database variable for later use.
var database = firebase.database();


//fillData function will populate table rows into html and clear out form text
function fillData() {
//Grab <form> and call the .reset() function to clear out form data
$("form")[0].reset();

   //iterate through database rows
   database.ref("/trains").on("child_added", function(snapshot) {
      console.log(snapshot.val());
      
   //Generate html <tr> from database row
   
   var tRow = "<tr>";
      tRow += "<td>" + snapshot.val().trainName + "</td>"; 
      tRow += "<td>" + snapshot.val().destination + "</td>"; 
      tRow += "<td>" + snapshot.val().firstTrain + "</td>"; 
      tRow += "<td>" + snapshot.val().frequency + "</td>"; 
      tRow += "</tr>";
   
   //append tRow variable to the table body
   $("#tableBody").append(tRow);
   }, function(errorObject) {                      // Error handling
      console.log("error: " + errorObject.code);
   });
   };



//on click for the "Add a Train" button to store data into the database.
$("#submit").on("click", function(){
   
//prevent default action of the submit button
event.preventDefault();
//gather input from html form
var trainName = $("#trainName").val().trim();
var destination = $("#destination").val().trim();
var firstTrain = $("#firstTrain").val().trim();
var frequency = $("#frequency").val().trim();

//inserting input into database
database.ref("/trains").push({
   trainName : trainName,
   destination: destination,
   firstTrain: firstTrain,
   frequency: frequency
/***/   
}); //database.ref() function closer
/***/
//call function fillData to populate train schedule table data
fillData();
/***/   
}); //#submit on click function closer
/***/

