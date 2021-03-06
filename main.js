function question(prompt, options, correctAnswer){
  this.prompt=prompt;
  this.options=options;
  this.correctAnswer=correctAnswer;
}
var quiz={
  questions: [],
  playTurn: 1,
  isGameOver: false,
  currentQuestion: 0,
  player1Points: 0,
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
console.log(quiz.questions[0].options[0]);

$('.start').click(function(){
  if(!quiz.isGameOver)
    gameStatus()
})

function gameStatus(){
  if(quiz.currentQuestion<10){
    console.log("ok");
    game()
  }
  else{
    quiz.isGameOver= true
    console.log("over");
    gameOver()
  }
}

function gameOver(){
  // console.log(quiz.player1Points);
  // console.log(quiz.player2Points);
}
function game(){
  if(!quiz.isGameOver){
  $('.quest').text(quiz.questions[quiz.currentQuestion].prompt)
  $('.opt1').text(quiz.questions[quiz.currentQuestion].options[0])
  $('.opt2').text(quiz.questions[quiz.currentQuestion].options[1])
  $('.opt3').text(quiz.questions[quiz.currentQuestion].options[2])
  $('.opt4').text(quiz.questions[quiz.currentQuestion].options[3])
}
}

$('.radio').change(function(){
  if(parseInt(this.id)===quiz.questions[quiz.currentQuestion].correctAnswer){
    if(quiz.playTurn===1){
      quiz.player1Points+=1;
      $('.ply1_score').text("Player 1: "+ quiz.player1Points)
    }
    else{
      quiz.player2Points+=1
      $('.ply2_score').text("Player 2: "+ quiz.player2Points)
    }
  }
  else {
    // console.log("wrong");
  }
  if(quiz.playTurn===1){
    quiz.playTurn=2
  }
  else{
    quiz.playTurn=1
  }
  quiz.currentQuestion+=1
  this.checked=false;
  gameStatus()
})
$('.reset').click(function(){
  quiz.playTurn= 1,
  quiz.isGameOver= false,
  quiz.currentQuestion= 0,
  quiz.player1Points= 0,
  quiz.player2Points= 0
  gameStatus()
})
