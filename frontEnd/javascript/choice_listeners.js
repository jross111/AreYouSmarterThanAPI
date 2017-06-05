function choice1Listener() {
  $('#choice1').on('click', e => {
    e.preventDefault()
    if ( question["quiz_type"] === "True Or False" ) {
       if (true_false === true)
        { $('#choice1').css('background-color', '#0C0'); questionsRight++ }
        else
        { $('#choice1').css('background-color', '#C00'); questionsWrong++
          $('#choice2').html(`The real answer is: ${question["answer"]}`)
          $('#choice2').css('background-color', '#0C0') }
      }
    else
        { if
        ( `[${eval(question["choices"])[0]}]` === question['answer'].replace(/ /g,"") ||
          `${eval(question["choices"])[0]}` === question['answer'].replace(/ /g,"") )
        { $('#choice1').css('background-color', '#0C0'); questionsRight++ }
      else
        { $('#choice1').css('background-color', '#C00'); questionsWrong++; check() }}
    $('#next').show()
    stopListening()
  })
}

function choice2Listener() {
  $('#choice2').on('click', e => {
    e.preventDefault()
    if ( question["quiz_type"] === "True Or False" )
      { if (true_false === false)
        { $('#choice2').css('background-color', '#0C0'); questionsRight++
          $('#choice2').html(`The real answer is: ${question["answer"]}`)}
        else
        { $('#choice2').css('background-color', '#C00'); questionsWrong++
          $('#choice1').css('background-color', '#0C0') }
      }
    else
      {if ( `[${eval(question["choices"])[1]}]` === question['answer'].replace(/ /g,"") ||
            `${eval(question["choices"])[1]}` === question['answer'].replace(/ /g,"") )
        { $('#choice2').css('background-color', '#0C0'); questionsRight++ }
      else
        { $('#choice2').css('background-color', '#C00'); questionsWrong++; check() }}
    $('#next').show()
    stopListening()
  })
}

function choice3Listener() {
  $('#choice3').on('click', e => {
    e.preventDefault()
    if ( `[${eval(question["choices"])[2]}]` === question['answer'].replace(/ /g,"") ||
         `${eval(question["choices"])[2]}` === question['answer'].replace(/ /g,""))
      { $('#choice3').css('background-color', '#0C0'); questionsRight++ }
    else
      { $('#choice3').css('background-color', '#C00'); questionsWrong++; check() }
    $('#next').show()
    stopListening()
  })
}

function choice4Listener() {
  $('#choice4').on('click', e => {
    e.preventDefault()
    if ( `[${eval(question["choices"])[3]}]` === question['answer'].replace(/ /g,"") ||
         `${eval(question["choices"])[3]}` === question['answer'].replace(/ /g,""))
      { $('#choice4').css('background-color', '#0C0'); questionsRight++ }
    else
      { $('#choice4').css('background-color', '#C00'); questionsWrong++; check() }
    $('#next').show()
    stopListening()
  })
}

function enterChoiceListener() {
  $('#enter_choice').off("keydown").on("keydown", e => {
    if (e.keyCode == 13) {
      if ( $('#enter_choice').val() !== "") {
        if ( $('#enter_choice').val().replace(/ /g,"") ===
                     question['answer'].replace(/ /g,"") )
          { $('#enter_choice').css('background-color', '#0C0'); questionsRight++ }

        else
          { $('#correct_choice').show().html(`The correct answer is: ${question["answer"]}`)
            $('#enter_choice').css('background-color', '#C00'); questionsWrong++ }
      $('#next').show()
      stopListening()
      }
    }
  })
}
