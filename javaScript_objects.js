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

//spread operator -- 