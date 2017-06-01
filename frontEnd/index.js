var question = null

$(document).ready(function(){
  console.log('Document ready!')

  const url = 'http://localhost:3000/api/v1/welcome'

  $.ajax({
    method: 'GET',
    url: url,
    success: function(response){
      question = response[0]

      thisIsOurListener()
      }
  })


})


function thisIsOurListener() {
  $('#start').on('click', (e) => {
    $('#ask_question').html(question['question'])
  })
}
