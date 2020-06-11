//array keys problem question
const res = [...Array(9).keys()];
console.log(res)

for(let i in res){
  if( i > 5){
    console.log('greater than 5')
  }
  else{
    console.log(i)
  }
}

//egg drop stairs problem

 function randomNum(max,min){
    return Math.floor(Math.random() * (max - min) + min); 
  }

const topFloor = randomNum(1,100)
const eggBroken = false
const eggCount = 2

const stairs = [...Array(101).keys()];
for(let i in stairs){
  if( i == topFloor){
     console.log('an egg has broken on floor' + i)
    break;
  }
  else{
    console.log( 'currently on floor ' + i)
  }

}

///
/*
(weight, cake price )
cake_tuples = [(7, 160), (3, 90), (2, 15)]
capacity    = 20

# Returns 555 (6 of the middle type of cake and 1 of the last type of cake)
max_duffel_bag_value(cake_tuples, capacity)


*/

const bagCap = 20;
const cake_tuples = []
const curWeight = 0;
const curEarn = 0

// iterate through bags looking at weight first 
// if weight + curWeight <=bagCap then 
// 

//practice creating classes


class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

// using objects practice
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar.make + ' ' + myCar.model)


var dude = new Object();
dude.name = 'mike'

console.log(dude.name)


//using 2d arrays or matrixes

let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

// [rows] x [cols]
//evaluationg a specific index of the martirx using []

console.table(activities)
console.log(activities[2][0])


//replacing a value of the matrix using [] == something 
activities[2][0] = 'sleep'
console.table(activities)

/*
Iterate through a 2d matrix with a nested loop

// loop the outer array
for (let i = 0; i < activities.length; i++) {
    // get the size of the inner array
    var innerArrayLength = activities[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}

*/

console.log(activities.length)
