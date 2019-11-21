$(function () {

//define current date with moment.format for header and add to header
var toDay = moment().format('dddd, MMMM Do', true);
$('#currentDay').html(toDay);

//define current time for header and add to header
var mNow = moment().format('h:mm a');
$('#currentTime').html(mNow);

//create an array for the hours of the workday
var workDay = ["9 A.M.", "10 A.M.", "11 A.M.", "12 NOON", "1 P.M.", "2 P.M.", "3 P.M.", "4 P.M.", "5 P.M."]
var workDay24 = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]


//define for loop for adding table to page
for (var i = 0; i < 9; i++) {

    //create new row element and add class
    var newRow = $("<tr>").addClass("time-block");

    //create new elements
    var newHourCol = $("<td>").attr('id', [i]).text(workDay[i]).addClass("hour");
    var newTextCol = $("<td>").append("<textarea>");
    var newButtonCol = $("<td>").append("<button>").addClass("saveBtn");
        
    // Append the newly created table data to the table row
    newRow.append(newHourCol, newTextCol, newButtonCol);
    
    // Append the table row to the table body
    $(".calBody").append(newRow);

    };


    //add display workday on 24 hour clock
    // btn24Hour.addEventListener("click", function () {
    //     for (var i = 0; i < 9; i++) {

    //     var newHourCol = $("<td>").text(workDay24[i]).addClass("hour");

    //     newRow.replace(newHourCol);
    //     }
    // })
    //
    
});