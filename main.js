function question(prompt, options, correctAnswer){
  this.prompt=prompt;
  this.options=options;
  this.correctAnswer=correctAnswer;
}
var quiz={
  questions: [],
  isGameOver: false,
  currentQuestion: 0,
  player1Ppoints: 0,
  player2Points: 0
}

var temp = new question("what is your name", [1,2,3,4], 1)
var temp = new question("	I ..... tennis every Sunday morning.", ['playing', 'play', 'am playing', 'am play'], 2)
var temp = new question("	Don't make so much noise. Noriko ..... to study for her ESL test!", ['try', 'tries', 'tried', 'is trying'], 4)
var temp = new question("Jun-Sik ..... his teeth before breakfast every morning.", ['will cleaned', 'is cleaning', 'cleans', 'clean'], 3)
var temp = new question("	Sorry, she can't come to the phone. She ..... a bath!", ['will cleaned', 'is cleaning', 'cleans', 'clean'], 3)




quiz.questions.push(temp)
console.log(quiz.questions);
