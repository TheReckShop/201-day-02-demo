var counter = 0;

var res1 = document.getElementById('resultOne');
var res2 = document.getElementById('resultTwo');
var res3 = document.getElementById('resultThree');
var res4 = document.getElementById('resultFour');
var res5 = document.getElementById('resultFive');

var user = prompt('What is your name?');
  console.log('The user\'s name is ' + user);
alert('Hi There, ' + user + ', Imma ax you a few questions.');
// var quesData = [[first ques stuff],[ second ques stuff]];
// var quesData = [[ques, ans1, ans2, right-mess, wrong-mess],[ second ques stuff]];
var questData =
  [
    [
      'this is a yes or no question, so please answer with Y or N. Does David Cole enjoy the musial "CATS"?',
      'n',
      'no',
      ' that\'s right!',
      ' Wrong muthafucka'
    ],
    [
      'Same as before, so please answer with Y or N. Is Cabaret David Cole\'s favorite muscial',
      'y',
      'yes',
      ' Yes! That is my favorite musical.',
      ' DEFINITELY WRONG BIZNITCH! Cabaret is mos def my favorite muscal son.'],
      [
        'One last question (again please answer with Y or N) Is codefellows hella awesome?',
        'y',
      'yes',
      ' Obviously!',
      ' You straight trippin\' son! codefellows is toats hella awesome!']]


function q1() {
  var answer1 = prompt(questData[0][0]);

  console.log('The user answered Question 1: ' + answer1);

  /*make it so that we can accept lower case 'n' or 'N' or 'NO' as an acceptable response*/

  if(answer1.toLowerCase() === questData[0][1] || answer1.toLowerCase() === questData[0][2]) {
    resultOne.textContent = answer1 + questData[0][3];
    resultOne.className = 'right';

    counter += 1;
  } else {
    resultOne.textContent = answer1 + questData[0][4];
    resultOne.className = 'wrong';
  }
}


function q2() {
  var answer2 = prompt(questData[1][0]);

  console.log('The user answered Question 2: ' + answer2);

  if(answer2.toLowerCase() === questData[1][1] || answer2.toLowerCase() === questData[1][2]) {
    resultTwo.textContent = answer2 + questData[1][3];
    resultTwo.className = 'right';
    counter += 1;
  } else {
    resultTwo.textContent = answer2 + questData[1][4];
    resultTwo.className = 'wrong';
  }
}


function q3() {
  var answer3 = prompt(questData[2][0] );

  console.log('The user answered Question 3: ' + answer3);

  if(answer3.toLowerCase() === questData[2][1] || answer3.toLowerCase() === questData[2][2]) {
    resultThree.textContent = answer3 + questData[2][3];
    resultThree.className = 'right';
    counter+=1;
  } else {
    resultThree.textContent = answer3 + questData[2][4];
    resultThree.className = 'wrong';
  }
}
q1();
q2();
q3();


q4();
function q4() {
  var answer4 = prompt(user + ', One last question: Can you guess what number I am thinking of?');

  console.log('The user answered question 4: ' + answer4);

  if(answer4 > 7) {
    resultFour.textContent = answer4 + ' TOO HIGH!';
  } else if(answer4 < 7) {
    resultFour.textContent = answer4 + ' TOO LOW';
  } else if(answer4 == 7) {
    /* when working with numbers instead of script use == instead of === because it cannot read answer4 === 7 it can only process answer4 == 7 beause they are not the same data type or value */
    resultFour.textContent = answer4 + ' CORRECT';
    counter+=1;
  } else {
    resultFour.textContent = answer4 + ' YOU DID NOT ENTER A NUMBER DUMBASS';
  }
}

alert('You got ' + counter + ' answers correct!! Great Job!!! But there\'s one last question');

var dog = 'cat';
q5();
function q5() {
  while (dog === 'cat') {
    var answer5 = prompt('What is my favorite number, this time for realzies?!?!?');
    if (answer5 == 7) {
    resultFive.textContent = answer5 + ' Correct, you the best!';
      dog='dog';
    } else {
    resultFive.textContent = answer5 + ' Nope, try again...';
    }
  }
}
