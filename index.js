// QUESTION 1

/*Mutating array: is basically changing the array itself instead of 
returning a new array with the new changes 

MUMTATING ARRAY EXAMPLES:
array.push(), array.reverse(), array.shift(), array.sort(), 
array.splice() and array.unshift().


(ii) non mutating array: is returning a whole new array which has all the changes.
NON-MUTATING ARRAY EXAMPLES:
array.concat(), array.includes(), array.indexOf, array.join(),
array.lastIndexOf, array.slice(), array.toString()
and array.toLocaleString().
*/


// QUESTION 2

let LANGUAGES = ["C#","JavaScript","Ruby","PHP","Python"]

// QUESTION 2.1 Adding ‘Kotlin’ to the end of the array

let Addkotlin = LANGUAGES.push("kotlin")
console.log(LANGUAGES)

// QUESTION 2.2 Add ‘Java’ after ‘Ruby’

Addjava=LANGUAGES.splice(3,0,"Java");
console.log(LANGUAGES);

// QUESTION 2.3 Remove the first item in the array
console.log(LANGUAGES.shift());
console.log(LANGUAGES)


// QUESTION 2.4 Add ’Scala’ and ‘Swift’ to the beginning of the array

let caddscalaswift= LANGUAGES.unshift("Scala","Swift");
console.log(LANGUAGES);

// QUESTION 2.5 Replace ‘PHP’ with ‘Go’ and ‘Rust’




//QUESTION 3 

let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
let spliceOnchangeFruit=changeFruit(fruit.splice(2,0,'orange'));
console.log(spliceOnchangeFruit)
console.log(fruit)

//QUESTION 4

function maxFromArray(numbers) {
    let max = numbers[0];                      // first item
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {                // take item at index
            max = numbers[i];
        }
    }
    return max;                                // return without parentheses
}

const randomNumbers = [27, 64, 47, 78, 48, 11, 76, 25, 11, 83];
console.log("maximum value is "+ maxFromArray(randomNumbers));

//QUESTION 5

let valTimesIndex=[2,4,5,7,8];
let result=[];
for(i=0;i<valTimesIndex.length; i++){
   let operation= valTimesIndex[i] *i
   result.push(operation);

}
console.log(result)