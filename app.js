
  var user = prompt('What is your name?');

  alert('Hi There, ' + user + ', Imma ax you a few questions.');

  console.log('The user\'s name is ' + user);

  var answer1 = prompt(user + ', this is a yes or no question, so please answer with Y or N. Does David Cole enjoy the musial "CATS"?');

  console.log('The user answered Question 1: ' + answer1);

  /*make it so that we can accept lower case 'n' or 'N' or 'NO' as an acceptable response*/

  if(answer1.toLowerCase() === 'N' || answer1.toLowerCase() === 'n' || answer1.toLowerCase() === 'NO' || answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'No') {
    alert('Damn Straight! That musical if fucking aweful');
  } else {
    alert('WRONG: YOU LOSE');
  }

  var answer2 = prompt(user + ', Same as before, so please answer with Y or N. Is Cabaret David Cole\'s favorite muscial');

  console.log('The user answered Question 2: ' + answer2);

  if(answer2.toLowerCase() === 'Y' || answer2.toLowerCase() ==='y' || answer2.toLowerCase() ==='YES' || answer2.toLowerCase() ==='yes' || answer2.toLowerCase() === 'Yes') {
    alert('Damn straight son! Cabaret is totally my favorite musical!');
  } else {
    alert('DEFINITELY WRONG BIZNITCH! Cabaret is mos def my favorite muscal son.')
  }

  var answer3 = prompt(user + 'One last question (again please answer with Y or N) Is codefellows hella awesome?' );

  console.log('The user answered Question 3: ' + answer3);

  if(answer3.toLowerCase() === 'Y' || answer3.toLowerCase() === 'y' || answer3.toLowerCase() === 'YES' || answer3.toLowerCase() === 'yes' || answer3.toLowerCase() ==='Yes') {
    alert('Obviously!');
  } else {
    alert('You straight trippin\' son! codefellows is toats hella awesome!');
  }

  var answer4 = prompt(user + ', One last question: Can you guess what number I am thinking of?');

  console.log('The user answered question 4: ' + answer4)

  if(answer4 > 7) {
    alert('TOO HIGH!');
  } else if(answer4 < 7) {
    alert('TOO LOW');
} else if(answer4 == 7) {
  alert('CORRECT')
} else {
  alert('YOU DID NOT ENTER A NUMBER DUMBASS')
}
