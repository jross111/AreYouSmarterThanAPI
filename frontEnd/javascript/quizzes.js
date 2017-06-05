function quiz_mc() {
  $('#type_of_question').html("What would the the following method return?")
  $('#array').html(`array = ${question['array']}`)
  $('#ask_question').html(question['question'])
  $('#array_output').hide(); $('#enter_choice').hide()
  $('#choice1').show(); $('#choice2').show(); $('#choice3').show(); $('#choice4').show()

  arr14.forEach( (x,i) =>
      // surround only arrays with []
      { if ( `${typeof eval(question["choices"])[i]}` === "object" &&
                  `${eval(question["choices"])[i]}` !== "null" )
        { $(`#choice${x}`).html(`[${eval(question["choices"])[i]}]`) }
      else
        { $(`#choice${x}`).html(`${eval(question["choices"])[i]}`) }
    })
}

function quiz_tf() {
  $('#type_of_question').html("True Or False?")
  $('#array').html(`array = ${question['array']}`)
  $('#ask_question').html(question['question'])
  $('#choice1').show().html("True"); $('#choice2').show().html("False");
  $('#choice3').hide(); $('#choice4').hide(); $('#enter_choice').hide()

  tf = [true,false]
  true_false = tf[Math.floor(Math.random()*tf.length)]

  $('#array_output').show().html(`#=> ${true_false ? question['answer'] : question['wrong_answer']}` )

}

function quiz_enter() {
  $('#type_of_question').html("Enter the right answer")
  $('#array').html(`array = ${question['array']}`)
  $('#ask_question').html(question['question'])
  $('#array_output').hide()
  $('#choice1').hide(); $('#choice2').hide(); $('#choice3').hide(); $('#choice4').hide()
  $('#enter_choice').show().val("").attr("readonly", false).focus()
}
