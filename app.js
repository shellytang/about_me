'use strict';

// The responses in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var response1 = prompt('Does Shelly have any cats?').toLowerCase();

if (response1 === 'yes' || response1 === 'y') {
  alert('Yes, Shelly does have two cats!');
} else if (response1 === 'no' || response1 === 'n') {
  alert("Sorry, you\'re wrong, Shelly has two cats.");
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
