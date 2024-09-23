//Accessing Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

//Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = 'Spoon';
console.log(utensils);

//The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('a','b');
console.log(chores);

//The .pop() Method
const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop(chores2[5]);
console.log(chores2);

//More Array Methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift(groceryList[0]);
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

//Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
    arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);

function removeElement(newArr) {
    newArr.pop();
}
removeElement(concept);
console.log(concept);

//Nested Arrays
let numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];





