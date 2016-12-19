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

var temp = new question("	I ..... tennis every Sunday morning.", ['playing', 'play', 'am playing', 'am play'], 2)
quiz.questions.push(temp)
temp = new question("	Don't make so much noise. Noriko ..... to study for her ESL test!", ['try', 'tries', 'tried', 'is trying'], 4)
quiz.questions.push(temp)
temp = new question("Jun-Sik ..... his teeth before breakfast every morning.", ['will cleaned', 'is cleaning', 'cleans', 'clean'], 3)
quiz.questions.push(temp)
temp = new question("	Sorry, she can't come to the phone. She ..... a bath!", ['is having', 'having', 'have', 'has'], 1)
quiz.questions.push(temp)
temp = new question("..... many times every winter in Frankfurt.", ['It snows', 'It snowed', 'It is snowing', 'It is snow'], 1)
quiz.questions.push(temp)
temp = new question("	How many students in your class ..... from Korea?", ['comes', 'come', 'came', 'are coming'], 3)
quiz.questions.push(temp)
temp = new question("Weather report: 'It's seven o'clock in Frankfurt and ..... .'", ['there is snow', 'it`s snowing', 'it snows', 'it snowed'], 2)
quiz.questions.push(temp)
temp = new question("	Babies ..... when they are hungry.", ['cry', 'cries', '	cried', '	are crying'], 1)
quiz.questions.push(temp)
temp = new question("Jane: 'What ..... in the evenings?' Mary: 'Usually I watch TV or read a book.'", ['you doing', 'you do', 'do you do', 'are you doin'], 3)
quiz.questions.push(temp)
temp = new question("	Jane: 'What ..... ?' Mary: 'I'm trying to fix my calculator.'", ['	you doing', 'you do', 'do you do', 'are you doin'], 4)
quiz.questions.push(temp)

console.log(quiz.questions);
