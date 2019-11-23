$(function () {

//define current date with moment.format for header and add to header
var toDay = moment().format('dddd, MMMM Do', true);
$('#currentDay').html(toDay);

//define current time for header and add to header
var mNow = moment().format('h:mm a');
$('#currentTime').html(mNow);


//create an array for the hours of the workday, which gets appended to the newly created newHourCol
var workDay = ["8 A.M.", "9 A.M.", "10", "11", "12 P.M.", "1", "2", "3", "4", "5 P.M."]

//24 hour array for optional toggle
var workDay24 = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17"]

//array to be used as a comparison to a moment() variable for determining what colors the rows need to be to represent past, present and future
var timeComp = ["9:00 am", "10:00 am", "11:00 pm", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"];

JSON.parse(localStorage.getItem('content'));


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


    //saving to local storage
    //set variable for the button to be clicked
    var saveBtnGroup = $(".saveBtn")[0];
    var toDoClass = $(".todo");
    console.log(toDoClass);
    
    saveBtnGroup.addEventListener("click", addLocalStor);
    

    function addLocalStor () {
        localStorage.setItem('content', JSON.stringify(toDoClass));
    }

    console.log(localStorage);

    
    
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