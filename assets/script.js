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
var timeComp = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"];

//set if/then comparison for color-coded time blocks
if ("tr.class#id" > "3:00") {
    $().addClass("past");
}


//define for loop for adding table to page
for (var i = 0; i < 9; i++) {

    //create new row element and add class
    var newRow = $("<tr>").addClass("time-block").attr('id', timeComp[i]).attr('data-index', 'hour');

    //create new elements
    var newHourCol = $("<td>").attr('id', [i]).text(workDay[i]).addClass("hour");
    var newTextCol = $("<td>").append("<textarea>");
    var newButtonCol = $("<td>").append("<button>").addClass("saveBtn");
        
    // Append the newly created table data to the table row
    newRow.append(newHourCol, newTextCol, newButtonCol);
    
    // Append the table row to the table body
    $(".calBody").append(newRow);

    };

    //saving to local storage
    //set variable for the button to be clicked
    var saveBtnGroup = $(".saveBtn")[0];

    saveBtnGroup.addEventListener("click", addLocalStor);

    function addLocalStor () {
        localStorage.setItem('content', input_textarea.value);
    }
    


    //add display workday on 24 hour clock
    // btn24Hour.addEventListener("click", function () {
    //     for (var i = 0; i < 9; i++) {

    //     var newHourCol = $("<td>").text(workDay24[i]).addClass("hour");

    //     newRow.replace(newHourCol);
    //     }
    // })
    //

    // //local storage
    // saveBtn.addEventListener('click', updateOutput);

    // // output_div.textContent = localStorage.getItem('content');
    // // input_textarea.value = localStorage.getItem('content');
    
    // function updateOutput() {
    //     localStorage.setItem('content', input_textarea.value);
        
        // output_div.textContent = input_textarea.value;
    // }
    
});