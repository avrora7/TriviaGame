const correctAnswers = ["2", "3", "4", "1", "2", "3", "2", "4", "1"];
let countdown = 0;
let numCorrAnsw = 3;
let numIncorrAnsw = 5;
let countdownInterval = null;

// display results of the questions/answers on the last screen
function displayResults() {
    $('#correct').html(numCorrAnsw);
    $('#incorrect').html(numIncorrAnsw);
    $('#unanswered').html(correctAnswers.length - numCorrAnsw - numIncorrAnsw);
}

// display countdown, decrement countdown, handle Done button when time runs out
function displayTimeRem() {
    $('#timeRem').html(--countdown);
    if (countdown === 0) {
        handleDone();
    }
}

// handle Done button either when Done button is pressed or time runs out - 
// hide 1st and 2nd screens, show last screen, dispaly questions/answers results, clear countdown
function handleDone() {
    matchQandA();
    $('#intro').hide()
    $('#questions').hide()
    $('#summary').show()
    displayResults();
    clearInterval(countdownInterval);
}

// match chosen answer with correct answer - 
// increase number of correct answers if match, increase number of incorrect answers if no match
function matchQandA() {
    for (i = 0; i < correctAnswers.length; i++) {
        let selector = "input[name=q_" + (i+1) + "]:checked"; 
      
        let nextQuestionValue = $(selector).val();
       
        if (nextQuestionValue === correctAnswers[i]) {
            numCorrAnsw++
        }
        else if (nextQuestionValue != null) {
            numIncorrAnsw++
        }
        else {
            
        }
    }
}

// reset game either on start or restart -
// reset correct and incorect answers counter, re/start coutdown
function resetGame() {
    $("form")[0].reset();
    countdown = 120;
    numCorrAnsw = numIncorrAnsw = 0;
    countdownInterval = setInterval(displayTimeRem, 1000);
    $('#timeRem').html(countdown);
}

// attach click handlers to buttons start, done, restart
$(document).ready(function () {
    $('#start, #restart').on('click', function () {
        $('#intro').hide()
        $('#questions').show()
        $('#summary').hide()
        displayTimeRem();
        resetGame();
    })

    $('#done').on('click', function () {
        handleDone();
    })
});



