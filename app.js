'use strict';

alert('Welcome! We are going to play a guessing game, where you will learn more about me.');

var counter = 0;

function question1(){
  var cats = prompt('Does Shelly have any cats?').toLowerCase();
  if (cats === 'yes' || cats === 'y') {
    alert('Yes, Shelly does have two cats!');
    counter += 1;
  } else if (cats === 'no' || cats === 'n') {
    alert('Sorry, you\'re wrong, Shelly has two cats.');
  } else {
    alert('Try to answer with a yes/y or no/n next time.');
  }
  console.log('Does Shelly have any cats? The user answered: ' + cats);
}
question1();

function question2(){
  var dogs = prompt('Does Shelly have any dogs?').toLowerCase();
  if (dogs === 'yes' || dogs === 'y') {
    alert('Sorry, you\'re wrong, Shelly does not have any dogs.')
  } else if (dogs === 'no' || dogs === 'n') {
    alert('Correct, she does not have any dogs, but she wants one!');
    counter += 1;
  } else {
    alert('Try to answer with a yes/y or no/n next time.');
  }
  console.log('Does Shelly have any dogs? The user answered: ' + dogs);
}
question2();

function question3(){
  var siblings = prompt('Does Shelly have any siblings?').toLowerCase();
  if (siblings === 'yes' || siblings === 'y') {
    alert('Yes, Shelly has a sister.');
    counter += 1;
  } else if (siblings === 'no' || siblings === 'n') {
    alert('Sorry, you\'re wrong, she has a sister.');
  } else {
    alert('Try to answer with a yes/y or no/n next time.');
  }
  console.log('Does Shelly have any siblings? The user answered: ' + siblings);
}
question3();

function question4(){
  var iceland = prompt('Has Shelly been to Iceland?').toLowerCase();
  if (iceland === 'yes' || iceland === 'y') {
    alert('Sorry, you\'re wrong, she has never visited Iceland.');
  } else if (iceland === 'no' || iceland === 'n') {
    alert('Correct, she has never been, but she wants to go one day!');
    counter += 1;
  } else {
    alert('Try to answer with a yes/y or no/n next time.');
  }
  console.log('Has Shelly been to Iceland? The user answered: ' + iceland);
}
question4();

function question5(){
  var asia = prompt('Has Shelly been to Asia?').toLowerCase();
  if (asia === 'yes' || asia === 'y') {
    alert('You\'re right, she has visited Japan and China.');
    counter += 1;
  } else if (asia === 'no' || asia === 'n') {
    alert('Sorry, you are wrong, she has visited Japan and China.');
  }
  console.log('Has Shelly been to Asia? The user answered: ' + asia);
}
question5();

function question6(){
  var myBusNumber = 8;

  for (var i = 0; i < 4; i++) {
    var bus = parseInt(prompt('What bus did Shelly take to class today?'));
    if (bus > myBusNumber) {
      alert('You guessed too high!');
    } else if (bus < myBusNumber) {
      alert('You guessed too low!');
    } else if (isNaN(bus)) {
      alert('That is not a number');
    } else {
      alert('Good job!');
      counter += 1;
      break;
    }
  }
  console.log('What bus did Shelly take today? The user answered: ' + bus);
}
question6();

function question7(){
  var myFavFoods = ['sushi','tacos','queso','pastries'];
  var attempts = 0;
  var favFoodCorrect = false;
  var favFoodResult;

  while (attempts < 6 && favFoodCorrect === false) {

    var favFoodGuess = prompt('What are some of my favorite foods?').toLowerCase();

    for (var i = 0; i < myFavFoods.length; i++) {
      if (favFoodGuess === myFavFoods[i]) {
        alert('You are right! I like to eat ' + myFavFoods);
        counter += 1;
        attempts = 6;
        favFoodCorrect = true;
        favFoodResult = myFavFoods[i];
      }
    }
    if (favFoodGuess !== favFoodResult) {
      alert('Sorry, that is not correct!');
      attempts += 1;
    }
    if (attempts > 5 && favFoodCorrect === false) {
      alert('Sorry, you ran out of guesses. My favorite foods are ' + myFavFoods);
    }
  }
}
question7();

if (4 > counter){
  alert('Looks like you only got ' + counter + ' out of 7 correct. Good try!');
} else {
  alert('Looks like you got ' + counter + ' out of 7 correct. Good job!')
}
