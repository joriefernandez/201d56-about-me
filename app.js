"use strict";
// Input Name
do{
  var userName = prompt('What is your name?');
  if (userName == ""){
    alert("Please enter a valid name!");
  }
  console.log('User entered ' + userName);
}while (userName == "");

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

// Yes/ No questions to ask
var question1 = 'Do I know you?';
var question2 = 'Do I like foods?';
var question3 = 'Do I like hiking?';
var question4 = 'Have I visited other states?';
var question5 = 'Did I do something for the first time recently?';

// Display questions
var questions = [question1, question2, question3, question4, question5];
var score = 0;

for (var index = 0; index < questions.length; index++){
  var answer = prompt(questions[index]);
  answer = answer.toUpperCase();
  console.log('For question ' + questions[index] + ' the user entered ' + answer);

  if(answer === 'Y' || answer === 'YES' ){
    alert('So glad we are the same!');
    score++;
  } else if (answer === 'N' || answer === 'NO'){
    alert('Everyone is different and I am fine with that!');
  } else {
    alert('It\'s understandable if you have no answer yet. You can get back to me later!');
  } 
}

var percent = (score/5) * 100;
alert("We have " + percent + " % similarity.");

