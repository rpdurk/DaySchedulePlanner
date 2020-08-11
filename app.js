$(document).ready(function() {
    // Here we are provided an initial array of letters.
    // Use this array to dynamically create time blocks by the hour - consider making half-hour increments.
    var timeHours = ["5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
    //Use a for-loop to iterate through the timeHours array.
    for (let i = 0; i < timeHours.length; i++) {
      // Create a variable named "timeBlock" equal to $("<div>");
      // Create an input for activities related to the calendar
      // Create a save button for the input to be added to local storage 
      const $timeBlocks = $('<div>');
      $timeBlocks.addClass('letter-button letter letter-button-color');
      $timeBlocks.attr('data-letter', timeHours[i]);
      $timeBlocks.text(timeHours[i]);
      $('#buttons').append($letterBtn);
    }
    // ATTACH ON-submit EVENTS TO input blocks to save input to local storage
 
    // Use an "on-click" event attached to the "#clear" button id to remove plans and create new ones.
    $('#clear').on('click', function() {
      $('#display').empty();
    });
  });
