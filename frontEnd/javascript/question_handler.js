function generateQuestion() {
  question = questions[currentQuestion]
  if (typeof question === "undefined")
    { endOfQuiz () }
  else {
    $('#question_number').html(`Question #${question['id']}`)
    $('#next').hide(); $('#correct_choice').hide()
    progressBar()
    switch(question['quiz_type']) {
      case "True Or False": return quiz_tf()
      case "Multiple Choice": return quiz_mc()
      case "Enter": return quiz_enter()
    }
  }
}

function check() {
  arr14.forEach( (x,i) =>
    { if (`[${eval(question["choices"])[i]}]` === question['answer'].replace(/ /g,"") ||
        `${eval(question["choices"])[i]}` === question['answer'].replace(/ /g,"") )
     {$(`#choice${x}`).css('background-color', '#0C0')} }
  )
}

function startListening() {
  choice1Listener(); choice2Listener(); choice3Listener(); choice4Listener()
  enterChoiceListener()
}

function stopListening() {
  arr14.forEach(x => $(`#choice${x}`).off('click') )
  $('#questions_right').html(`right: ${questionsRight}`)
  $('#questions_wrong').html(`wrong: ${questionsWrong}`)
  $('#enter_choice').attr("readonly", true).unbind("keydown")
}

function resetColors() {
  arr14.forEach(x => $(`#choice${x}`).css('background-color', '#F39C12') )
  $('#enter_choice').css('background-color', '#F39C12')
}
