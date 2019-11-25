
//create table header elements and details that includes the current date, and append
var trHeader = $('.trheader');
var currentTimeTh = $('<th scope=col id=current-time>' + '</th>');
var hourStatusTh = $('<th scope=col>' + '<span class=lead>' + 'Today is ' + '</span>' + '<span id=currentDay class=lead>' + '</span>' + '</th>');
var lastSavedTh = $('<th scope=col id=last-saved>' + 'Save' +'</th>');
trHeader.append(currentTimeTh, hourStatusTh, lastSavedTh);

//define current date with moment.format for table header
var toDay = moment().format('dddd, MMMM Do', true);
$('#currentDay').html(toDay);

//create color code key append to span
var buttonKey = $("#button-color");
var color1 = $('<button id=color1>' + 'Past' + '</button>').css('background-color', '#dbccff');
var color2 = $('<button id=color2>' + 'Present' + '</button>').css('background-color', '#fff4cc');
var color3 = $('<button id=color3>' + 'Future' + '</button>').css('background-color', '#ffccd7');
buttonKey.append(color1, color2, color3);


//create an array for the hours of the workday, which gets appended to the newly created newHourCol
var workDay = ["8 A.M.", "9", "10", "11", "12 P.M.", "1", "2", "3", "4", "5 P.M."];

//24 hour array that will match against the current time (moment HH) applying css colors representing past, present and future hours of the day
var workDay24 = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17"];

//define for loop for adding table elements to page
for (var i = 0; i < workDay.length; i++) {

    //create new row element and add class
    var newRow = $("<tr>").addClass("time-block").attr('data-hour', workDay24[i]);

    //create planner elements

    //create element that will represent hours of the day
    var newHourCol = $("<td>").attr('id', 'left-hour').addClass("hour").text(workDay[i]);

    //create textarea for user inputs, which will be stored on save
    var newtextArea = $("<textarea>").attr('id', [i]).attr('class', 'todo');

    //create element that will contain textarea user inputs
    var newTextCol = $("<td>").append(newtextArea).attr('id', [i]);

    //create div that will contain save button
    var newButtonCol = $("<td>").addClass("saveBtn").append("<button class='saveBtn'>" + "<i class='far fa-address-book'>" + "</i>" + "</button>").attr('id', 'right-button');

        
    // Append the newly created table data to the table row
    newRow.append(newHourCol, newTextCol, newButtonCol);
    
    // Append the table row to the table body
    $(".calBody").append(newRow);

    };

    //set variable moment to compare against the data-hour attribute
    var mNowHH = moment().format('HH');
    console.log("This is the current time" + mNowHH);

  
    //for each table row, if a row id - which represents an hour - matches the current time hour, add color-coding class to this particular row 
    $("tr").each( function(i) {

        var rowHour = $(this).data('hour');
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
    //define current time for header and add to store in local storage with user inputs
    var mNow = moment().format('h:mm a');

    // when save button is clicked, run AddInputArray function to create array of user inputs
    $(".saveBtn").on( "click", addInputArray);

    //on click, call function which processes through each text area, grabs the value, and pushes it to the array
    function addInputArray () {
        todaysList = [];

        $(this).css('border-left', '1px solid blue');

        $("textarea").each( function() {
           var t = $(this).val()
           todaysList.push({input: t, time: mNow});
           console.log("value of t is " + t);
        })

        

        //run saveToLocal function below
        saveToLocal();
    }
    
    //save list of inputs to localStorage
    function saveToLocal () {     
        var str = JSON.stringify(todaysList);
        localStorage.setItem('appts', str);
        
    }
    
    //pull all items from local storage to display user appointment inputs at startup
    function getFromLocal () {

        var str = localStorage.getItem('appts');
        todaysList = JSON.parse(str);
        console.log(str);
      
            $("textarea").each( function(i) {
                if (todaysList !== null) {
                    var userInput = todaysList[i].input;
                    $(this).val(userInput);
                }
                })
        
    }

    //run function right away to get existing user inputs from localStorage
    getFromLocal ();
