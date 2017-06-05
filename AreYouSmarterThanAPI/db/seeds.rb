Quiz.create({
  username: "TestUser",
  category: "all",
  quiz_type: "all",
  language: "Ruby",
  score: 0
})

Question.create({
  quiz_id: 1,
  question: "array.select { |x| x >= 1 }",
  array: "[6, 5, 4, 3, 2, 1]",
  answer: "[6, 5, 4, 3, 2, 1]",
  wrong_answer: "[6, 5, 4, 3, 2]",
  method: "select",
  quiz_type: "Multiple Choice",
  choices: "[[], [6, 5, 4, 3, 2], [6, 5, 4, 3, 2, 1], [1]]",
  correct: false
})

Question.create({
  quiz_id: 1,
  question: "array.detect { |x| x > 3 }",
  array: "[3, 4, 5, 6, 7, 8]",
  answer: "4",
  wrong_answer: "3",
  method: "detect",
  quiz_type: "True Or False",
  choices: "[4, 3, 6, null]",
  correct: false
})

Question.create({
  quiz_id: 1,
  question: "array.find { |x| x > 5 }",
  array: "[3, 4, 5, 6, 7, 8]",
  answer: "6",
  wrong_answer: "7",
  method: "find",
  quiz_type: "Enter",
  choices: "[6, 4, 5, 8]",
  correct: false
})

Question.create({
  quiz_id: 1,
  question: "array.pop #=> ?",
  array: "[4, 5, 6, 7, 8, 9]",
  answer: "9",
  wrong_answer: "4",
  method: "pop",
  quiz_type: "Enter",
  choices: "[[5, 6, 7, 8, 9], 4, [4, 5, 6, 7, 8], 9]",
  correct: false
})

Question.create({
  quiz_id: 1,
  question: "array.shift<br><br>array #=> ?",
  array: "[9, 8, 7, 6, 5, 4]",
  answer: "[8, 7, 6, 5, 4]",
  wrong_answer: "[9]",
  method: "shift",
  quiz_type: "Multiple Choice",
  choices: "[[4], [9, 8, 7, 6, 5], [9], [8, 7, 6, 5, 4]]",
  correct: false
})


Question.create({
  quiz_id: 1,
  question: "array.reject { |x| x <= 2 }",
  array: "[2, 3, 4, 5, 6, 7]",
  answer: "[3, 4, 5, 6, 7]",
  wrong_answer: "[2]",
  method: "reject",
  quiz_type: "True Or False",
  choices: "[[2, 3, 4, 5, 6, 7], [2], [], [3, 4, 5, 6, 7]]",
  correct: false
})

Question.create({
 quiz_id: 1,
 question: "array.push(7,6)",
 array: "[7, 6, 5, 4]",
 answer: "[7, 6, 5, 4, 7, 6]",
 wrong_answer: "[7, 6, 5, 4, 6, 7]",
 method: "push",
 quiz_type: "Multiple Choice",
 choices: "[[7, 6, 5, 4, 7, 6], [7, 6, 5, 4, 6, 7], [7, 6, 7, 6, 5, 4], [6, 7, 7, 6, 5, 4]]",
 correct: false
})

Question.create({
  quiz_id: 1,
  question: "array.delete_if { |x| x < 4 }",
  array: "[7, 6, 5, 4, 3, 2]",
  answer: "[7, 6, 5, 4]",
  wrong_answer: "[4, 3, 2]",
  method: "delete_if",
  quiz_type: "Multiple Choice",
  choices: "[[7, 6, 5, 4], [4, 3, 2], [3, 2], [7, 6, 5]]",
  correct: false
})

Question.create({
  quiz_id: 1,
  question: "array.unshift(4,3)",
  array: "[9, 8, 7, 6]",
  answer: "[4, 3, 9, 8, 7, 6]",
  wrong_answer: "[3, 4, 9, 8, 7, 6]",
  method: "unshift",
  quiz_type: "Multiple Choice",
  choices: "[[3, 4, 9, 8, 7, 6], [9, 8, 7, 6, 4, 3], [4, 3, 9, 8, 7, 6], [9, 8, 7, 6, 3, 4]]",
  correct: false
})


Question.create({
  quiz_id: 1,
  question: "array.insert(2,0)",
  array: "[9, 8, 7, 6, 5, 4]",
  answer: "[9, 8, 0, 7, 6, 5, 4]",
  wrong_answer: "[9, 0, 8, 7, 6, 5, 4]",
  method: "insert",
  quiz_type: "Multiple Choice",
  choices: "[[9, 0, 8, 7, 6, 5, 4], [2, 9, 8, 7, 6, 5, 4], [9, 8, 0, 7, 6, 5, 4], [9, 8, 2, 7, 6, 5, 4]]",
  correct: false
})
