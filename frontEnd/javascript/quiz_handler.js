function hideQuizSection() {
  $('#parent-progress-bar').hide()
  $('#timer').hide(); $('#question_number').hide()
  $('#main_well').hide()
  $('#questions_right').hide(); $('#questions_wrong').hide()
  $('#choices_and_next').hide()
}

function quizStartListener() {
  $('#start').on('click', e => {
    e.preventDefault()
    $('#start').hide(); $('#parent-progress-bar').show()
    $('#choices_and_next').show()
    currentQuestion = 0; questionsRight = 0, questionsWrong = 0; whatever = 0
    $('#main_well').show(); $('#question_number').show()
    $('#questions_right').show().html(`right: ${questionsRight}`)
    $('#questions_wrong').show().html(`wrong: ${questionsWrong}`)
    $('#type_of_question').show(); $('#array').show(); $('#ask_question').show()
    generateQuestion()
  })
}

function endOfQuiz() {
  hideQuizSection()
  $('#return_to_main').show(); $('#final_score').show()
  $('#final_right').html("Questions Right: " + questionsRight)
  $('#final_wrong').html("Questions Wrong: " + questionsWrong)
  $('#final_points').html("Total Points: " + (questionsRight - questionsWrong) )
}

function next() {
  $('#next').on('click', e=> {
    e.preventDefault()
    startListening(); resetColors()
    currentQuestion++; generateQuestion()
  })
}

function return_to_main() {
  $('#return_to_main').on('click', e=> {
    e.preventDefault()
    $('#final_score').hide()
    $('#questions_right').hide(); $('#questions_wrong').hide()
    $('#return_to_main').hide()
    $('#start').show()
  })
}
