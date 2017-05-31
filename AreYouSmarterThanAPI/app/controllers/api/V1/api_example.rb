api = {
    quiz_1: {
      category: "selection",
      type: "all",
      language: "Ruby"
      score: 0,
      questions: {
        question_1:
        { question: "array.select { |x| x >= 1 }",
          array: "[6, 5, 4, 3, 2, 1]",
          answer: "[6, 5, 4, 3, 2, 1]",
          wrong_answer: "[6, 5, 4, 3, 2]",
          method: "select",
          quiz_type: "Multiple Choice"
          choices: "[[], [6, 5, 4, 3, 2], [6, 5, 4, 3, 2, 1], [1]]",
          correct: "nil"
        },
        question_2:
        { question: "array.detect { |x| x > 3 }",
          array: "[3, 4, 5, 6, 7, 8]",
          answer: "4",
          wrong_answer: "3",
          method: "detect",
          quiz_type: "Enter"
          choices: "[4, 3, 6, nil]",
          correct: "nil"
        },
        question_3:
        { question: "array.reject { |x| x <= 2 }",
          array: "[2, 3, 4, 5, 6, 7]",
          answer: "[3, 4, 5, 6, 7]",
          wrong_answer: "[2]",
          method: "reject",
          quiz_type: "True Or False"
          choices: "[[2, 3, 4, 5, 6, 7], [2], [], [3, 4, 5, 6, 7]]",
          correct: "nil"
        },
        question_4:
        { question: "array.delete_if { |x| x < 4 }",
          array: "[7, 6, 5, 4, 3, 2]",
          answer: "[7, 6, 5, 4]",
          wrong_answer: "[4, 3, 2]",
          method: "delete_if",
          quiz_type: "Multiple Choice"
          choices: "[[7, 6, 5, 4], [4, 3, 2], [3, 2], [7, 6, 5]]",
          correct: "nil"
        }
      }
    }
}
