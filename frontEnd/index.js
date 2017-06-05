var question = null, questions = null
var currentQuestion = 0
var questionsRight = 0; questionsWrong = 0
var whatever = 0; true_false = null
var arr14 = [1,2,3,4]; arr12 = [1,2]; arr23 = [2,3]

$(document).ready(function(){
  console.log('Document ready!')
  $('#return_to_main').hide(); $('#final_score').hide()
  hideQuizSection()
  $('#correct_choice').css('background-color', '#0C0')

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/v1/welcome',
    success: function(response){
      questions = response
      quizStartListener()
      choice1Listener(); choice2Listener(); choice3Listener(); choice4Listener()
      enterChoiceListener()
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
      quiz_id: 1,
      question: "array.detect { |x| x > 3 }",
      array: "[3, 4, 5, 6, 7, 8]",
      answer: "4",
      wrong_answer: "3",
      method: "detect",
      quiz_type: "True Or False",
      choices: "[4, 3, 6, null]",
      correct: false},
    success: function(resp){ console.log(resp) }
    })
}

function progressBar() {
  whatever = ((question['id']) * 10)
  $('#progress-bar')[0]['style']['width'] = `${whatever}%`
}
