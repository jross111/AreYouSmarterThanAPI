// put in timer
// start timer when thisIsOurListener
// endOfQuiz currently triggers if there's not a question (under generateQuestion)
// trigger endOfQuiz when timer reaches 0

var question = null, questions = null
var currentQuestion = 0
var questionsRight = 0, questionsWrong = 0

$(document).ready(function(){
  console.log('Document ready!')
  $('#return_to_main').hide()
  $('#timer').hide(); $('#question_number').hide(); $('#next').hide()
  $('#type_of_question').hide(); $('#array').hide(); $('#ask_question').hide(); $('#array_output').hide()
  $('#main_well').hide()
  $('#final_score').hide()
  $('#questions_right').hide(); $('#questions_wrong').hide()
  $('#choice1').hide(); $('#choice2').hide(); $('#choice3').hide(); $('#choice4').hide()

  const url = 'http://localhost:3000/api/v1/welcome'

  $.ajax({
    method: 'GET',
    url: url,
    success: function(response){
      questions = response
      thisIsOurListener()
      choice1Listener(); choice2Listener(); choice3Listener(); choice4Listener()
      next(); return_to_main();
      }
  })
})

function createQuizFromAjax() {
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/api/v1/quiz/create',
    data: {
        username: "TestUser",
  			category: "all",
  			quiz_type: "all",
  			language: "Ruby",
  			score: 0},
    success: function(resp){ console.log(resp) }
    })

}

function createQuestionFromAjax() {
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/api/v1/question/create',
    data: {
        username: "TestUser",
  			category: "all",
  			quiz_type: "all",
  			language: "Ruby",
  			score: 0},
    success: function(resp){ console.log(resp) }
    })

}

function generateQuestion() {
  question = questions[currentQuestion]
  if (typeof question === "undefined")
    { endOfQuiz () }
  else {
    $('#question_number').html(`Question #${question['id']}`)
    if (question['quiz_type'] === "True Or False") { quiz_tf() }
    if (question['quiz_type'] === "Multiple Choice") { quiz_mc() }
    $('#next').hide()
  }
}

function thisIsOurListener() {
  $('#start').on('click', e => {
    e.preventDefault()
    $('#start').hide()
    currentQuestion = 0; questionsRight = 0, questionsWrong = 0
    $('#main_well').show(); $('#question_number').show()
    $('#questions_right').show(); $('#questions_wrong').show()
    $('#questions_right').html(`right: ${questionsRight}`)
    $('#questions_wrong').html(`wrong: ${questionsWrong}`)
    $('#type_of_question').show(); $('#array').show(); $('#ask_question').show()
    generateQuestion()
  })
}

function check() {
  if (`[${eval(question["choices"])[0]}]` === question['answer'].replace(/ /g,"") ||
      `${eval(question["choices"])[0]}` === question['answer'].replace(/ /g,"") )
   {$('#choice1').css('background-color', '#0C0')}
  if (`[${eval(question["choices"])[1]}]` === question['answer'].replace(/ /g,"") ||
      `${eval(question["choices"])[1]}` === question['answer'].replace(/ /g,"") )
   {$('#choice2').css('background-color', '#0C0')}
  if (`[${eval(question["choices"])[2]}]` === question['answer'].replace(/ /g,"") ||
      `${eval(question["choices"])[2]}` === question['answer'].replace(/ /g,"") )
   {$('#choice3').css('background-color', '#0C0')}
  if (`[${eval(question["choices"])[3]}]` === question['answer'].replace(/ /g,"") ||
      `${eval(question["choices"])[3]}` === question['answer'].replace(/ /g,"") )
   {$('#choice4').css('background-color', '#0C0')}
}

function stopListening() {
  $('#choice1').off('click'); $('#choice2').off('click')
  $('#choice3').off('click'); $('#choice4').off('click')
  $('#questions_right').html(`right: ${questionsRight}`)
  $('#questions_wrong').html(`wrong: ${questionsWrong}`)
}

function startListening() {
  choice1Listener(); choice2Listener(); choice3Listener(); choice4Listener()
}

function resetColors() {
  $('#choice1').css('background-color', '#F39C12')
  $('#choice2').css('background-color', '#F39C12')
  $('#choice3').css('background-color', '#F39C12')
  $('#choice4').css('background-color', '#F39C12')
}

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
      {if ( `[${eval(question["choices"])[0]}]` === question['answer'].replace(/ /g,"") )
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
      {if ( `[${eval(question["choices"])[1]}]` === question['answer'].replace(/ /g,"") )
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
    if ( `[${eval(question["choices"])[2]}]` === question['answer'].replace(/ /g,"") )
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
    if ( `[${eval(question["choices"])[3]}]` === question['answer'].replace(/ /g,"") )
      { $('#choice4').css('background-color', '#0C0'); questionsRight++ }
    else
      { $('#choice4').css('background-color', '#C00'); questionsWrong++; check() }
    $('#next').show()
    stopListening()
  })
}

function next() {
  $('#next').on('click', e=> {
    e.preventDefault()
    startListening(); resetColors()
    currentQuestion++; generateQuestion()
  })
}

function endOfQuiz() {
  $('#timer').hide(); $('#question_number').hide(); $('#next').hide()
  $('#return_to_main').show()
  $('#main_well').hide()
  $('#questions_right').hide(); $('#questions_wrong').hide()
  $('#choice1').hide(); $('#choice2').hide(); $('#choice3').hide(); $('#choice4').hide()
  $('#final_score').show()
  $('#final_right').html("Questions Right: " + questionsRight)
  $('#final_wrong').html("Questions Wrong: " + questionsWrong)
  $('#final_points').html("Total Points: " + (questionsRight - questionsWrong) )
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

function quiz_tf() {
  $('#choice1').show(); $('#choice2').show(); $('#choice3').hide(); $('#choice4').hide()
  $('#type_of_question').html("True Or False?")
  $('#ask_question').html(question['question'])
  $('#array_output').html()
  tf = [true,false]
  true_false = tf[Math.floor(Math.random()*tf.length)]
  $('#array_output').show()
  $('#array_output').html(`#=> ${true_false ? question['answer'] : question['wrong_answer']}` )
  $('#array').html(`array = ${question['array']}`)
  $('#choice1').html("true")
  $('#choice2').html("false")
}

function quiz_mc() {
  $('#choice1').show(); $('#choice2').show(); $('#choice3').show(); $('#choice4').show()
  $('#type_of_question').html("What would the the following method return?")
  $('#ask_question').html(question['question'])
  $('#array_output').hide()
  $('#array').html(`array = ${question['array']}`)

  if ( `${typeof eval(question["choices"])[0]}` === "object" &&
        `${eval(question["choices"])[0]}` !== "null" )
    { $('#choice1').html(`[${eval(question["choices"])[0]}]`) }
  else
    { $('#choice1').html(`${eval(question["choices"])[0]}`) }
  if ( `${typeof eval(question["choices"])[1]}` === "object" &&
        `${eval(question["choices"])[1]}` !== "null" )
    { $('#choice2').html(`[${eval(question["choices"])[1]}]`) }
  else
    { $('#choice2').html(`${eval(question["choices"])[1]}`) }
  if ( `${typeof eval(question["choices"])[2]}` === "object" &&
        `${eval(question["choices"])[2]}` !== "null" )
    { $('#choice3').html(`[${eval(question["choices"])[2]}]`) }
  else
    { $('#choice3').html(`${eval(question["choices"])[2]}`) }
  if ( `${typeof eval(question["choices"])[3]}` === "object" &&
        `${eval(question["choices"])[3]}` !== "null" )
    { $('#choice4').html(`[${eval(question["choices"])[3]}]`) }
  else
    { $('#choice4').html(`${eval(question["choices"])[3]}`) }
}
