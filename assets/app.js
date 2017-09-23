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


//calling fullData function will fill the "Current Train Schedule" be


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

// //Moment js stuff
// // var randomDate = "09/20/2017";
// // var randomFormat = "MM/DD/YYYY";
// // var convertedDate = moment(randomDate, randomFormat);
// // Using scripts from moment.js write code below to complete each of the following.
// // Console.log to confirm the code changes you made worked.
// // 1 ...to convert the randomDate into three other date formats
// console.log(moment(convertedDate).format("MM/DD/YY"));
// console.log(moment(convertedDate).format("MMM Do, YYYY hh:mm:ss"));
// console.log(moment(convertedDate).format("X"));
// console.log("----------------------------------------");
// // 2 ...to determine the time in years, months, days between today and the randomDate
// console.log(moment(convertedDate).toNow());
// console.log(moment(convertedDate).diff(moment(), "years"));
// console.log(moment(convertedDate).diff(moment(), "months"));
// console.log(moment(convertedDate).diff(moment(), "days"));
// console.log("----------------------------------------");
// // 3 ...to determine the number of days between the randomDate and 02/14/2001
// var newDate = moment("02/14/2001", randomFormat);
// console.log(moment(convertedDate).diff(moment(newDate), "days"));
// // 4 ...to convert the randomDate to unix time (be sure to look up what unix time even is!!!)
// console.log(moment(convertedDate).format("X"));
// console.log("----------------------------------------");
// // 5 ...to determine what day of the week and what week of the year this randomDate falls on.
// console.log(moment(convertedDate).format("DDD"));
// console.log(moment(convertedDate).format("dddd"));

var today = moment();
today.isBefore('23:30', 'hh:mm');
var tomorrow = moment();

console.log(today.isBefore('23:30', "hh:mm"));

var hours = 4;
var minutes = 30;
console.log(moment("09/21/2017 4:00 AM").format());
var newTime = moment().add(hours, 'h').add(minutes, 'm').format();
console.log(newTime);