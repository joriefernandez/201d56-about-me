'use strict';

// Input Name

do{
  var userName = prompt('What is your name?');
  if (!userName){
    alert('Please enter a valid name!');
  }
  console.log('User entered ' + userName);
}while (!userName);




//Check name
if (userName === 'Jorie'){
  alert('Hey we\'ve got the same name!');
  console.log('Same name? Yes!');
}else if (userName === 'sam'){
  console.log('you must be my teacher');
} else{
  console.log('Welcome to the site ' + userName );
}

alert('Welcome to the site ' + userName + '. Please answer Y for Yes or N for No to the questions.');

// Questions to ask
var question1 = 'Am I good singer?';
var question2 = 'Do I like foods?';
var question3 = 'Do I like hiking?';
var question4 = 'Have I visited other states?';
var question5 = 'Did I do something for the first time recently?';
var question6 = 'How many dogs I had?';
var question7 = 'What are the countries that I want to visit?';

// question array
var questions = [question1, question2, question3, question4,
  question5, question6, question7];

//Possible Answers
var noAns = ['N', 'NO'];
var yesAns = ['Y', 'YES'];
var numDogs = 4;
var placeToVisit = ['JAPAN', 'KOREA', 'ROME'];

// Answer bank
var answers = [noAns, yesAns, yesAns, yesAns, yesAns, numDogs, placeToVisit];

var score = 0;
var correctAlert = 'Your response is correct!';



for (var index = 0; index < questions.length; index++){

  var correctAns = 'The correct answer is ' + answers[index];
  //Ask the user
  var userAns;
  var numTry;
  var initMsg = 'Your answer is ';
  var limit;

  if(index < 5){
    userAns = prompt(questions[index]);
    console.log('User entered ' + userAns + ' for question ' +
        questions[index] );
    if(userAns){
      if(answers[index].includes(userAns.toUpperCase())){
        console.log('User got the right answer');
        alert('You guessed it right!');
        score++;
      } else{
        alert(correctAns + '. Incorrect response.');
      }
    }else{
      alert('Invalid response. Your answer is marked as incorrect.');
    }
  }

  //Numeric input for question 6
  if(index === 5){
    limit = 4;
    for (numTry = 1; numTry <= limit; ++numTry){
      userAns = parseInt(prompt(questions[index]));
      console.log('Try ' + numTry + ': User answered ' + userAns + ' for question ' + questions[index]);
      if(!(isNaN(userAns))){
        console.log('User entered a number');
        if(userAns === answers[index]){
          console.log('User guessed the correct number');
          score++;
          alert(correctAlert);
          break;
        }else if (userAns > answers[index]){
          alert(initMsg + 'too high.');
        } else if (userAns < answers[index]){
          alert(initMsg + 'too low.');
        }
      }else{
        alert(initMsg + 'not a number.');
      }
    }

    //If user reached the max without getting the correct answer
    if(answers[index] !== userAns && numTry > limit){
      alert(correctAns + '. Better luck next time!');
    }
  }
  if(index === 6){
    limit = 6;
    for(numTry = 1; numTry <= limit; numTry++){
      userAns = prompt(questions[index]);
      if(userAns){
        if(answers[index].includes(userAns.toUpperCase())){
          console.log('Try ' + numTry + ': user guessed one of the answers');
          alert(correctAlert);
          score++;
          break;
        } else{
          console.log('Try ' + index + ': user entered ' + userAns);
          alert('Sorry your response is incorrect. Try again!');
        }
      }
    }
    //If user reached the max without getting the correct answer
    if(answers[index] !== userAns && numTry > limit){
      alert(correctAns + '. Better luck next time!');
    }
  }
}

//Show user total number of correct guesses
alert('You got ' + score + ' out of ' + answers.length +
'. \n\nThank you for playing ' + userName + '. You can now see my full portfolio!');



