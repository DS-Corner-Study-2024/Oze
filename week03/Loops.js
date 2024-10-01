// Repeating Tasks Manually
const vacationSpots= ['France', 'UK', 'USA'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// The For Loop
for (let cnt=5; cnt<=10; cnt++){
    console.log(cnt);
}

// Looping in Reverse
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}

// Looping through Arrays
for(let i=0; i<vacationSpots.length; i++) {
    console.log(`I would love to visit ${vacationSpots[i]}`); // 템플릿 리터럴을 사용하려면 백틱(`)을 사용해야 함
}

// Nested Loops
const bobsFollowers = ['a', 'b', 'c', 'd'];
const tinasFollowers = ['e', 'a', 'b'];
const mutualFollowers = [];
for (let i=0; i<bobsFollowers.length; i++){
    for(let j=0; j<tinasFollowers.length; j++){
        if(bobsFollowers[i] === tinasFollowers[j]){
            mutualFollowers[i] = bobsFollowers[i];
        }
    }
}

// The While Loop
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard !== 'spade'){
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}

// Do...While Statements
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {  
    cupsAdded++;
    console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded)

// The break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let i=0; i<rapperArray.length; i++){
    console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.')
        break;
}
console.log("And if you don't know, now you know.");





