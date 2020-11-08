//Sets the current date to the top of the
var currentDate = moment().format('dddd, MMMM Do')
$('#currentDay').text(currentDate)

//Variables to compare current time with timeblocks
var currentHour = parseInt(moment().format('HH'))
var officeHour = $('.office-hour')

//Changes colors of the boxes depending on the time of day
for (i = 0; i < officeHour.length; i++) {
  if (parseInt($(officeHour[i]).attr('data-hour')) == currentHour) {
    var inputField = $(officeHour[i]).siblings().find('.event-input')
    inputField.css('background-color', '#ff6961')
    inputField.attr('placeholder', 'Current Hour')
  } else if (parseInt($(officeHour[i]).attr('data-hour')) > currentHour) {
    var inputField = $(officeHour[i]).siblings().find('.event-input')
    inputField.css('background-color', '#77dd77')
  }
}

//Saves input values in the users local storage
$('.save-button').click(function () {
  var populatedField = $(this).parent().siblings().find('.event-input').val()
  var thisOfficeHour = $(this)
    .parent()
    .siblings('.office-hour')
    .attr('data-hour')
  localStorage.setItem(thisOfficeHour, populatedField)
})

//Retrieves stored values from the users local storage
$(document).ready(function () {
  $('.event-input').each(function () {
    $(this).val(
      localStorage.getItem(
        $(this).parent().siblings('.office-hour').attr('data-hour')
      )
    )
  })
})
