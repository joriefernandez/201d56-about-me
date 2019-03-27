'use strict';

// Input Name

do{
  var userName = prompt('What is your name?');
  if (!userName){
    alert('Please enter a valid name!');
  }
  console.log('User entered ' + userName);
}while (userName === '');




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
var question1 = 'Do I know you?';
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
var noAns = 'N';
var yesAns = 'Y';
var numDogs = 4;
var placeToVisit = ['JAPAN', 'KOREA', 'ROME'];

// Answer bank
var answers = [noAns, yesAns, yesAns, yesAns, yesAns, numDogs, placeToVisit];


//Number of limits for question 6
var ques6Limit = 4;
//Number of limit for question 7
var ques7Limit = 6;


var score = 0;

for (var index = 0; index < questions.length; index++){
  var userAns = prompt(questions[index]);

  if (userAns){
    //var modAns = userAns.toUpperCase();

    let verify = 'For question ' + questions[index] + ' you entered ' + userAns;
    console.log(verify);

    //Execute for questions 6
    if (index === 5 || (index === 6)){
      var numTry = 1;
      var ansDesc;
      var maxLimit;
      var correctAlert = 'The correct answer is ' + answers[index];

      if(index === 5){
        maxLimit = ques6Limit;
      } else{
        maxLimit === ques7Limit;
      }

      while (numTry <= maxLimit && answers[index] !== userAns){
        if(index === 5){
          if(isNaN(userAns)){
            ansDesc = ' is not a number!';
          } else{
            if(userAns < answers[index]){
              ansDesc = ' is too low!';
            } else if(userAns > answers[index]){
              ansDesc = ' is too high!';
            } else{
              alert(correctAlert + '. Good job!');
              score++;
              break;
            }
          }
        }

        if (index === 6){
          if(!answers[index].includes(userAns.toUpperCase())){
            alert('Your answer ' + userAns + ' is not in the possible answers.');
          } else{
            alert(correctAlert + '.');
            score++;
            break;
          }
        }




        numTry++;
        userAns = prompt(questions[index]);
        alert('You entered ' + userAns + ' for question ' + questions[index] + '.');

      }

      if(answers[index] !== userAns && numTry > maxLimit){
        alert(correctAlert + '. Better luck next time!');
      }

    } else{
      if(userAns.toUpperCase() === answers[index]){
        alert(verify + '. You are correct!');
        score++;
      } else {
        alert(verify + '. Sorry, you are wrong but you can ask me about it later!');
      }
    }

  }
}



alert('You got ' + ((answers.length - score)) + ' out of ' + answers.length +
'. Thank you for playing. Please enjoy my portfolio!');

