//Sets the current date to the top of the
var currentDate = moment().format('dddd, MMMM Do')
$('#currentDay').text(currentDate)

var currentHour = parseInt(moment().format('HH'))
var officeHour = $('.office-hour')

for (i = 0; i < officeHour.length; i++) {
  if (parseInt($(officeHour[i]).attr('data-hour')) == currentHour) {
    var inputField = $(officeHour[i]).siblings().find('.event-input')
    inputField.css('background-color', 'red')
    inputField.attr('placeholder', 'Current Hour')
  } else if (parseInt($(officeHour[i]).attr('data-hour')) > currentHour) {
    var inputField = $(officeHour[i]).siblings().find('.event-input')
    inputField.css('background-color', 'green')
  }
}

$('.save-button').click(function () {
  var populatedField = $(this).parent().siblings().find('.event-input').val()
  var officeHour = $(this).parent().siblings('.office-hour').attr('data-hour')
  console.log(officeHour)
  localStorage.setItem(officeHour, populatedField)
})

// $(document).ready(function () {
//   console.log('ready!')
// })
