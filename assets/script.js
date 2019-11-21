$(function () {


//define current date with moment.format for header and add to header
var m = moment().format('dddd, MMMM Do', true);
$('#currentDay').html(m);

//define current time for header and add to header
var mNow = moment().format('h:mm a');
$('#currentTime').html(mNow);

//create an array 

//define for loop for adding table to page
for (var i = 0; i <= 10; i++) {

    var tRow = $("<tr>");

      // Methods run on jQuery selectors return the selector they we run on
      // This is why we can create and save a reference to a td in the same statement we update its text
      var setHour = $("<td>").text(1);
      var setTextArea = $("<td>").text(1);
      var setbutton = $("<td>").text(1);
        
      // Append the newly created table data to the table row
      tRow.append(setHour, setTextArea, setbutton);
      // Append the table row to the table body
      $(".calBody").append(tRow);

    };
    
});