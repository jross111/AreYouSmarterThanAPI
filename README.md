# Are You Smarter Than a 00110101 Grader

This program is a **dynamically generated question generator** aimed at helping those wishing to master the basics of different coding languages.

While normal quizzes load in a set number of questions and answers manually, this application can create **one of a current 300,000 possible questions** each time, so no two quizzes are ever alike!

#### Questions

Every question creates a randomly generated array, operator type, element, index, and method. The question is then randomly presented as "multiple choice", "true or false", or "enter the correct answer". Finally, multiple choice questions always shuffle the right and wrong answers, and the true false questions will 50/50 present a true or false answer.

#### Answers

It's easy enough to render out a correct answer from the question asked, however every wrong answer generated is specifically designed to make the user think deeply and eventually master the type of question. Like each question, all wrong answers are **also** dynamically generated. Each method has its own unique algorithm to produce a similar enough set of wrong answers that can be believable while not simply changing a number here and there.

#### Interface

The program tells you when you are right or wrong, and lets you know the correct answer if you get it wrong. During a quiz, it keeps track of the questions you have gotten right or wrong, and at the end you are awarded a score based on how well you did.

Try it out and get to learning!

#### Pending Features

* Truly random question generation
  * Currently: this program does use a pre-seeded database with questions stored from a Ruby dynamically generated question generator.
  * Next Step: importing and converting the above system into this application.
    * requires a system to convert to an ajax request.
* Timer system
  * Currently: this program creates a quiz and then gives you 10 questions to answer.
  * Next step: add on: answer as many questions in 60 seconds.
* Unique scoring system
  * Currently: you get a point for each question you get right.
  * Next step: multiplier system based on answering questions correctly in a row.
* Different languages
  * Currently: Ruby only
  * Next step: JS, then others
* Leaderboards
* Can choose type of quiz to take
  * Based on language
  * Based on method
  * TF/MC/enter/Mix rather than a mix of all right now (each increases in difficulty)
* Results show how many of each type of question you were given (method, type)
* Hint button / tutorial version
* Improve visuals / animations
* Fix DOM issue
* Clean up back end code more
* Hosting on Heroku

Made with ♥ in the Flatiron School by
Brian Hopman, James Ross, Mike Merin
