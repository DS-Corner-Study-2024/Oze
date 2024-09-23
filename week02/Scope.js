//Blocks and Scope
const city = 'New York City';
function logCitySkyline() {
    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());

//Global Scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky() {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());

//Block Scope
function logVisibleLightWaves() {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
}
logVisibleLightWaves();
console.log(lightWaves);

//Scope Pollution
const satellite2 = 'The Moon';
const galaxy2 = 'The Milky Way';
let stars2 = 'North Star';

const callMyNightSky = () => {
    stars2 = 'Sirius'
	return 'Night Sky: ' + satellite2 + ', ' + stars2 + ', ' + galaxy2;
};

console.log(callMyNightSky());
console.log(stars2);

//Practice Good Scoping
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    if(region === 'The Arctic') {
        let lightWaves = 'Northern Lights';
        console.log(lightWaves);
    } 
    console.log(lightWaves);
};

logVisibleLightWaves();

