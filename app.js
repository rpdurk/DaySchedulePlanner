$(document).ready(function() {
  // Here we are provided an initial array of letters.
  // Use this array to dynamically create time blocks by the hour - consider making half-hour increments.
  var timeHours = ["5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
  var tasks = [];  
  //  Loop through the timeHours array
    timeHours.forEach(function(timeHours) {
      const $tBody = $('<tbody>');
      // create a table row
      const $tr = $('<tr>');
        // create a th
        // add a Scope called row to the th
      const $th = $('<th>');
      $th.attr('scope','row').text(timeHours);
        // create a td
        // add an input into the td
        // add type = text
        // add class of form-control
        // add placeholder of to accomplish
      const $tdInput = $('<td>');
      $tdInput.append($('<input>').attr('type', 'text').attr('data-index', timeHours).addClass('form-control').attr('placeholder', 'to accomplish'));
// add an id of the value of timeHours to each input box
        // create a td for the save button
        // add button
        // add type = button
        // add class = btn btn-primary btn-rounded
        // add text for save
      const $tdSave = $('<td>');
      $tdSave.append($('<button>').attr('type', 'button').addClass('btn btn-primary btn-rounded').text('Save'));
        // append the 3 components of the table to the table
      $tr.append($th, $tdInput, $tdSave);
        // append the table row to the table
      $tBody.append($tr);
        // append the new Tbody to the table itself
      $('table').append($tBody);
    });

  // ATTACH ON-submit EVENTS TO input blocks to save input to local storage
    //Local storage of Tasks
  function renderTasks() {
    // Make sure the tasks are empty
    // $('.tasks').html('');
    // Render a new text for each task
    for (let i = 0; i < tasks.length; i++) {
      const $tdInput = $('<td>');
      $tdInput.text(tasks[i]);
      $tdInput.attr('data-index', i);
      $('.').append($tdInput);
    }
  }

  // on page load get tasks from local storage.
  function init() {
    // Write code here to check if there are tasks in localStorage
    if (localStorage.getItem("tasks")) {
      const savedTasks = JSON.parse(localStorage.getItem("tasks"))
      tasks.push(...savedTasks);
    }
    // Render tasks to the DOM
    renderTasks();
  }

  function storeTasks() {
    // Add code here to stringify the tasks array and save it to the "tasks" key in localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // When a new tasks is submitted.
  $('.table-striped').on("submit", function(event) {
    event.preventDefault();
    const userTaskInput = $('.taskInput').val();
    if (userTaskInput === "") {
      return;
    }
    tasks.push(userTasksInput);
    // Store updated tasks in localStorage, re-render the list
    storeTasks();
    renderTasks();
  });
  // Use an "on-click" event attached to the "#clear" button id to remove plans and create new ones.
  // $('#clear').on('click', function() {
  //   $('#display').empty();
  // });
});
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist