$(function () {

//define current date with moment.format for header and add to header
var toDay = moment().format('dddd, MMMM Do', true);
$('#currentDay').html(toDay);

//define current time for header and add to header
var mNow = moment().format('h:mm a');
$('#currentTime').html(mNow);


//create an array for the hours of the workday, which gets appended to the newly created newHourCol
var workDay = ["8 A.M.", "9 A.M.", "10", "11", "12 P.M.", "1", "2", "3", "4", "5 P.M."];

//24 hour array for optional toggle
var workDay24 = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17"];

//array to be used as a comparison to a moment() variable for determining what colors the rows need to be to represent past, present and future
var timeComp = ["9:00 am", "10:00 am", "11:00 pm", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"];


//define for loop for adding table elements to page
for (var i = 0; i < workDay.length; i++) {

    //create new row element and add class
    var newRow = $("<tr>").addClass("time-block").attr('id', workDay24[i]);

    //create new <td> elements
    var newHourCol = $("<td>").attr('id', [i]).addClass("hour").text(workDay[i]);
    var newTextCol = $("<td>").append("<textarea class='todo'>").attr('id', workDay24[i]);
    var newButtonCol = $("<td>").addClass("saveBtn").append("<button class='saveBtn'>" + "<i class='far fa-address-book'>" + "</i>" + "</button>").attr('id', [i])
    
        
    // Append the newly created table data to the table row
    newRow.append(newHourCol, newTextCol, newButtonCol);
    
    // Append the table row to the table body
    $(".calBody").append(newRow);
    $("textarea").attr('id', [i]);

    };

    //set variable moment that matches 
    
    var mNowHH = moment().format('HH');
    console.log("This is the current time" + mNowHH);

    //for each tr in the loop, check the current tr. 
    //if the row id - which represents an hour - matches the current time hour, add color-coding class to this particular row 
    $("tr").each( function(i) {

        var rowHour = $('tr').get(i).id;
        console.log(rowHour === mNowHH);
        
        if ( rowHour == mNowHH) {
            $(this).addClass('present');
        }
        else if ( rowHour < mNowHH ) {
            $(this).addClass('past');
        }
        else if ( rowHour > mNowHH ) {
            $(this).addClass('future');
                    }
      });


    //create var that holds values entered into text area
    var todaysList = [];
    console.log(todaysList);
    // saveBtnGroup.addEventListener("click", addLocalStor);
    
    $(".saveBtn").on( "click", addNewToDo);

    //on click, call the addNewToDo function, which processes through each text area, grabs the value, and pushes it to the array
    function addNewToDo () {
        todaysList = [];

        $("textarea").each( function() {
           var t = $(this).val();
           todaysList.push([t, mNow]);
           console.log("value of t is " + t);
        })
        saveTodos();
    }
    
    function saveTodos () {     
        var str = JSON.stringify(todaysList);localStorage.setItem('todos', str);
    }

    function getTodos () {
        
        //pull all items from local storage to display user appointment inputs at startup
        var str = localStorage.getItem('todos');
        todaysList = JSON.parse(str);
        console.log(todaysList);
        if (!todaysList) {
            todaysList = [];
        }
    }

    getTodos();

    function listTodos() {
        var html = "";
        for (var i in todaysList) {
            var todo = todaysList[i];
        }
    }

    //add display workday on 24 hour clock
    // btn24Hour.addEventListener("click", function () {
    //     for (var i = 0; i < 9; i++) {

    //     var newHourCol = $("<td>").text(workDay24[i]).addClass("hour");

    //     newRow.replace(newHourCol);
    //     }
    // })
    //

});