'use strict';

var response1 = prompt('Does Shelly have any cats?').toLowerCase();

if (response1 === 'yes' || response1 === 'y') {
  alert('Yes, Shelly does have two cats!');
} else if (response1 === 'no' || response1 === 'n') {
  alert('Sorry, you\'re wrong, Shelly has two cats.');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}

var response2 = prompt('Does Shelly have any dogs?').toLowerCase();

if (response2 === 'yes' || response2 === 'y') {
  alert('Sorry, you\'re wrong, Shelly does not have any dogs.')
} else if (response2 === 'no' || response2 === 'n') {
  alert('Correct, she does not have any dogs, but she wants one!');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}

var response3 = prompt('Does Shelly have any siblings?').toLowerCase();

if (response3 === 'yes' || response3 === 'y') {
  alert('Yes, Shelly has a sister.');
} else if (response3 === 'no' || response3 === 'n') {
  alert('Sorry, you\'re wrong, she has a sister.');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}

var response4 = prompt('Has Shelly been to Iceland?').toLowerCase();

if (response4 === 'yes' || response4 === 'y') {
  alert('Sorry, you\'re wrong, she has never visited Iceland.');
} else if (response4 === 'no' || response4 === 'n') {
  alert('Correct, she has never been, but she wants to go one day!');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}

var response5 = prompt('Has Shelly been to Asia?').toLowerCase();

if (response5 === 'yes' || response5 === 'y') {
  alert('You\'re right, she has visited Japan and China.');
} else if (response5 === 'no' || response5 === 'n') {
  alert('Sorry, you are wrong, she has visited Japan and China.');
}
