$(document).ready(function() {
  // Get the Current Day and Time
  $('.currentDayAndTime').text(moment().format('LLLL'));
  // update time every hour - call function every hour and on page refresh
  function updateTime() {
    moment();
  }
  // setInterval of function every 1000
  updateTime();
  setInterval(updateTime(), 1000)
  // Here we are provided an initial array of letters.
  // Use this array to dynamically create time blocks by the hour - consider making half-hour increments.
  var timeHours = ["5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
  //  Loop through the timeHours array
  for (let i = 0; i < timeHours.length; i++) {
      // create a div that is a row
    let $timeBlocDiv = $('<div>');
      $timeBlocDiv.addClass('row');
      let $hour = $('<div>');
      $hour.addClass('row text-center time col-2').text(timeHours[i]);
      // create a textArea
      // add an input into the td
      // add class of form-control
      // Add class of timeHours for each text area******************************************************
      // add placeholder of to accomplish
    let $textarea = $('<textarea>');
    $textarea.attr('id', timeHours[i]).attr("time-value", (5+i)).addClass('col-8 form-control rounded-0 textarea text-dark');
    // alter the background as based on time.
    if ($textarea.attr("time-value") < moment().hour()) {
      //if the time-value attribute is earlier than the current hour add class of past
      $textarea.addClass("past");
    } else if ($textarea.attr("time-value") > moment().hour()) {
      //if the time-value attribute is later than the current hour add class of future
      $textarea.addClass("future");
    } else {
      //if the time-value attribute is equal to the current hour add class of present
      $textarea.addClass("present");
    }
    // // create a td for the save button
      // add button
      // add type = button
      // add class = btn btn-primary btn-rounded
    let $saveBtn = $('<button>');
    $saveBtn.attr('type', 'button').addClass('col-2 btn btn-primary btn-rounded saveBtn').text('Save');
      // append the 3 components of the children to the parent
  $timeBlocDiv.append($hour, $textarea, $saveBtn);
      // append the new Tbody to the table itself
    $('.container').append($timeBlocDiv);
  }
  //Local storage Second Iteration
  let userTaskObjects = {'5':'', '6':'', '7':'' ,'8':'', '9':'','10':'','11':'','12':'','13':'','14':'','15':'','16':''}
  //  function to call items saved in local storage
  function init () {
    // Write code here to check if there are tasks in localStorage
    let storedUserTasks = JSON.parse(localStorage.getItem('textUserInput'));
    if (storedUserTasks !== null) {
      userTaskObjects = storedUserTasks;
    } 
    // Update the text to local storage if there is local storage
    let $userInputs = Array.from($('.form-control'));
      $userInputs.forEach(element => {
      let timeValue = element.getAttribute('time-value');
      element.textContent = (userTaskObjects[timeValue])
    });
  }
  init ();
  $('.saveBtn').on('click', function(){
    // take the value of the textarea next to the button being clicked
    console.log('hello')
    let textUserInput = $(this).prev()[0].value;
    // obtain the time value attribute of the textarea
    let timeValue = ($(this).prev()[0].getAttribute("time-value"));
    // make the new task apart of the local storage array
    userTaskObjects[timeValue] = textUserInput;
    // send that information to the local storage
    localStorage.setItem('textUserInput', JSON.stringify(userTaskObjects));
  });
});