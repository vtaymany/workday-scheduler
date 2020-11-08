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
  localStorage.setItem(officeHour, populatedField)
})

$(document).ready(function () {
  $('.event-input').each(function () {
    console.log($(this).parent().siblings('.office-hour').attr('data-hour'))
    $(this).val(
      localStorage.getItem(
        $(this).parent().siblings('.office-hour').attr('data-hour')
      )
    )
  })
})
