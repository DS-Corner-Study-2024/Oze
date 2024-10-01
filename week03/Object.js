// < Creating Object Literals >
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
};


// < Accessing Properties >
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

spaceship.numCrew;
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;


// < Bracket Notation >
let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
};

let propName =  'Active Mission';

let isActive = spaceship2[propName];
console.log(isActive);


// < Property Assignment >
let spaceship3 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship3.color = 'glorious gold';
spaceship3.numEngines = 3;

delete spaceship3['Secret Mission']; // or delete objectName.propName;


// < Methods >
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
    retreat () {
        console.log(retreatMessage);
  }, // ,로 메소드 이어줘야 함
    takeOff () {
        console.log('Spim... Borp... Glix... Blastoff!');
    }
};
alienShip.retreat();
alienShip.takeOff();


// < Nested Objects > 중첩된 객체
let spaceship4 = {
    passengers: [{name: 'haewon'}],
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032 
    },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
    },
    'back-up': {
        battery: "Lithium",
        terabytes: 50
    }
    }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];
let firstPassenger = spaceship.passengers[0];


// < Pass By Reference > 
let spaceship5 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};

let greenEnergy = object => {
    object['Fuel Type'] = 'avocado oil'; // 수정
};

let remotelyDisable = object => {
    object.disabled = true; // 추가
};

greenEnergy(spaceship5);
remotelyDisable(spaceship5);
console.log(spaceship5);


// < Looping Through Objects >
let spaceship6 = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
for(let crewMember in spaceship6.crew) {
    console.log(`${crewMember}: ${spaceship6.crew[crewMember].name}`)
};

for(let crewDegree in spaceship6.crew) {
    console.log(`${spaceship6.crew[crewDegree].name}: ${spaceship6.crew[crewDegree].degree}`)
};


// < The this Keyword >
const robot = {
    model : '1E78V2',
    energyLevel : 100,
    provideInfo () {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};
console.log(robot.provideInfo());


// < Arrow Functions and this >
const robot2 = {
    energyLevel: 100,
    checkEnergy() {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}
robot2.checkEnergy();


// < Privacy >
const robot3 = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};
robot3._energyLevel = 'high';
robot3.recharge();


// < Getters >
const robot4 = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if(typeof(this._energyLevel) === 'number')
            return `My current energy level is ${this._energyLevel}`
        else
            return 'System malfunction: cannot retrieve energy level'
    }
};
console.log(robot4.energyLevel);


// < Setters >
const robot5 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof(num) === 'number' && num >= 0)
        this._numOfSensors = num;
      else
        console.log('Pass in a number that is greater than or equal to 0');
    }
  };
  robot5.numOfSensors = 100;
  console.log(robot5.numOfSensors);
  
  
// < Factory Functions >
const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();


// < Property Value Shorthand >
const robotFactory2 = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  const newRobot = robotFactory2('P-501', false)
  console.log(newRobot.model);
  console.log(newRobot.mobile);


// < Destructured Assignment >
const robot6 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
        console.log('Beep Boop');
    },
        fireLaser() {
        console.log('Pew Pew');
    },
    }
};
const { functionality } = robot6;
functionality.beep();


// < Built-in Object Methods >
const robot7 = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot7);

console.log(robotKeys);

const robotEntries = Object.entries(robot7);

console.log(robotEntries);

const newRobot2 = Object.assign({laserBlaster: true, voiceRecognition: true}, robot7);

console.log(newRobot2);