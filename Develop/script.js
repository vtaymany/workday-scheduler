//Sets the current date to the top of the
var currentDate = moment().format('dddd, MMMM Do')
$('#currentDay').text(currentDate)

console.log(moment().format('HH'))
console.log($('.current-hour').attr('data-hour'))
