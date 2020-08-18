//record collection
var collection = {
"2548": {
    "album": "slippery when wit",
    "artist": "Bon Jovi",
    "tracks": [
        "Let It Rock",
        "you give love a Bad Name"
    ]
},
"2468": {
    "album": "1999",
    "artist" : "prince",
    "tracks" : [
        "1999",
        "Little Red Corvette"
    ]
},
"1245" : {
    "artist" : "Robert palmer",
    "tracks" : []
},
"5439" : {
    "album" : "ABBA Gold"
}
};
  
function updateRecords(id, prop, value) {
    if(value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;    }
    return collection;
}
//to make a copy of a object
updateRecords(2468, "tracks", "test");
var collectionCopy = JSON.parse(JSON.stringify(collection));
 console.log(updateRecords(5439,"artist", "ABBA"));

 //random function
  var randomNum0_9 = Math.floor(Math.random() * 10);
   function randomnum(){
       return Math.floor(Math.random() * 10);
   }
    console.log(randomnum());

    //random number with in a range

    function randomRange(ourMin, ourMax) {
        return Math.floor(Math.random() * (ourMax - ourMin +1)) + ourMin;
    }

    console.log(randomRange(1,9));

    //usage of parseInt function
    function convertToInteger(str) {
        return parseInt(str);

    }
    convertToInteger("596");

    //let vs var 
    //var - global scope
    //let- limited to block  
    //const - same as let but, reassignment is not possible
  
 //anonymus functions----we can write as arrow functions

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2], [3,4,5]));

 // function taking function as argument- best practice for arrow funtions
 //filter function------> It returns array of ellements that passes a test(provided as afunction)
 var age=[32,33,18,90];
 function checkVoter(age) {
     return age>=18;
 }
function originalFun(){
    document.getElementById("demo").innerHTML= age.filter(checkVoter);
}
 //map fuction----------->It returns a new array with the result of calling function for each element.
      //for each element in the array gets one call
var numbers = [10, 69, 15, 5];
var newarray = numbers.map(increment)
 
function increment(num) {
    
    return num+1;
    

}
//------look at this
//document.getElementById("mapf").innerHTML=newarray;
 



//array functions


const realNumarry = [4,5,-9,42];
const squarelist = (arr) => {
    const suareIntegers = arr.filter(num => Number.isInteger(num) && num >0).map(x => x * x);
    return suareIntegers;
}
 
const squaredIntegers = squarelist(realNumarry);
console.log(squaredIntegers);

//higher order arrow functions-- default arguments passing
const incrementt =(function() {
    return function increment(number, value = 1) {
        return number + value;
    }
}) ();

console.log(incrementt(5,2));
console.log(incrementt(5));

//reduce function -- executes on each element of the array, resulting single output value
   const array1 = [1,2,3,4];
   function reducer(accumulator, currentValue) {

    return accumulator + currentValue;
   }
   console.log(array1.reduce(reducer));

// reduce with arrow function
const sum = (function () {
    return function sum(x,y,z) {
        const args = [x,y,z];
        return args.reduce((a,b) => a+b,0);
    };
})();
console.log(sum(1,2,3));

//using rest operator-- it works for any number of arguments
const summ = (function() {
    return function summ(...args) {
        return args.reduce((a,b) => a+b, 0);
    };
})();
console.log(summ(1,2,3,4,5));

//spread operator -- used to hold the values of inplace.
const ar1 = ['a','b','c'];
let ar2,ar3;
(function() {
    ar2 = ar1;
    ar3 =[...ar1];
    ar1[0]='d'
})();
console.log(ar2);
console.log(ar3);


/* const key word--It defines a constant reference to a value not,define a const value.
 --let keyword-- we use for redeclaring the variable
--reassignning not possible but,we can change the properties of constant object.
*/

//object destructuring
var aar = {x: 3, y:7, z:6};
var x = aar.x;
var y = aar.y;
var z = aar.z;

// destructuring
const {x: a, y: b, z: c} = aar;

const numObj = {
    present: 10,
    past : 20
};

function getPastnum(numObj) {
const {past : newnum} = numObj;
return newnum;
}

console.log(getPastnum(numObj));

//object destructuring inside the object destructuring -- nested objects
 
const forecast = {
    today : {min: 7, max: 8},
    tomorrow: {min :6, max: 9}
};

function getmin(forecat) {
    const {tomorrow : {min : newmax}}= forecast;
    return newmax;
}

console.log(getmin(forecast));

//object as a functions parameter with object destructuring
//doubt*******************
const sObj = {
    even : 2,
    neg : -1,
    odd : 3,
    zero : 0
};
const half = (function() {
    return function half({even, odd}) {
        return (even + odd) /2.0;
    };
})();
console.log(sObj);
console.log(half(sObj)); 

//creating strings using Template Literals
const result = {
    student1: ["jyothi","89","full time"],
    student2: ["reddy","90","contractor"],
    student3: ["friend","85","contractoe"]
};
function makeList(arr) {
const resultDisplay = [];
for(let i=0; i< arr.length; i++)
{
    resultDisplay.push(`<li class="text-warning"${arr[i]}</li>`)
}
return resultDisplay;
}
const resultDisplay = makeList(result.student2);
console.log(resultDisplay);

//object literals using array functions
//Its taking strings and returning object
const person = (name, age, gender) => ({name, age, gender});
console.log(person("jyothi","89","female"));

//one way to write function with in a object
const student = {
attend: 2,
AVGattendance(NEWattands) {
    "use strict";
    this.attend = NEWattands;
}
};
 
student.AVGattendance(4);
console.log(student.attend);
/*"use script" -- is a literal expression, indicting that code should be 
executed in strict mode. It eliminates some sailent errors by chnaging them to throw errors.
*/
/*------------------------------------------*****---------*/
//use class syntax to define constructor function
class spelling {
    constructr(targetSpelling){
        this.targetSpelling = targetSpelling;
    }
}
//object creation
var spell = new spelling('Jyo Reddy');
console.log(spell.targetSpelling);

//getter and setter methods to control acesses to an object

function makeClass() {
    class Thermostat {
        consructor(temp) {
            this._temp = temp+5;
            //'_' represents that varible is private and local
        }
       
        get temparature() {
            return this._temp;
        }
        set temparature(updatestemp) {
            this._temp=updatestemp;

        }
    }
    return Thermostat;
}

const Thsat = makeClass();
const thmos = new Thsat(70);
let temp = thmos.temparature;
thmos.temparature = 22;
temp = thmos.temparature;
console.log(temp);

/*import vs require
"./xyz" --current directory
 import --: import { function name} from "./path" 
-----'* as uname from "./path"' --we can import everything from that file
export --: export const xname = arg => arg.toupper()    --------(function name)
export { function name}; ---can import from any file

If we want to export only one thing from file we use "default" --fallback
If it is default fallback we dont use '{}' while importing
*/