//If...Else Statements
let sale = true;
sale = false;

if (sale) {
    console.log('Time to buy!');
} else {
    console.log('Time to wait for a sale.');
}

//Comparison Operators
let hungerLevel = 7;
if(hungerLevel > 7){
    console.log('Time to eat!');
} else {
    console.log('We can eat later!');
}

//Logical Operators
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('time to sleep');
} else {
    console.log('not bed time yet')
}

//Truthy and Falsy
let wordCount = 0;
wordCount = 1;

if (wordCount) {
    console.log("Great! You've started your work!");
} else {
    console.log('Better get to work!');
}
let favoritePhrase = 'Hello World!';
favoritePhrase = ''; // A string that is falsy has the value of '' or "".

if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
} else {
    console.log('This string is definitely empty.');
}

//Truthy and Falsy Assignment
let tool = '';
tool = 'marker';
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'; // pen은 default

console.log(`The ${writingUtensil} is mightier than the sword.`);

//Ternary Operator 
let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase2 = 'Love That!';
favoritePhrase2 === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//The switch keyword
let athleteFinalPosition = 'first place';
switch(athleteFinalPosition) {
    case 'first place': 
        console.log('You get the gold medal!');
        break;
    case 'second place': 
        console.log('You get the silver medal!');
        break;
    case 'third place': 
        console.log('You get the bronze medal!');
        break;
    default:
        console.log('No medal awarded.');
        break;
}
