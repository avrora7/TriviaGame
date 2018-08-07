const correctAnswers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let countdown = 0;
var numCorrAnsw = 3;
var numIncorrAnsw = 5;

function display() {
    $('#correct').html(numCorrAnsw);
    $('#incorrect').html(numIncorrAnsw);
    $('#unanswered').html(correctAnswers.length - numCorrAnsw - numIncorrAnsw);
}

function displayTimeRem() {
    $('#timeRem').html(countdown);
}

function handleDone() {
        $('#intro').hide()
        $('#questions').hide()
        $('#summary').show()
        display();
}


$(document).ready(function () {

    $('#start, #restart').on('click', function () {
        $('#intro').hide()
        $('#questions').show()
        $('#summary').hide()
        displayTimeRem();
        setTimeout(handleDone, 10*1000);
    })
    $('#done').on('click', function () {
       handleDone();
    })
    

});



