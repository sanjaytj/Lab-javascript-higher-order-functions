// var script = document.createElement("script");
// script.src = "http://path/to/underscor.js";
// document.body.appendChild(script);

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

//--------function #1-------//
// let arr = foods.splice(0,1);
// let arr2 = arr.splice(4,1);

// console.log(foods);

//--------function #2-------//

let modifiedFood = foods.splice(2, 0, "noodles","icecream");
console.log(foods)

//--------function #3-------//

const numberArray = [12,324,213,4,2,3,45,4234];
isPrime = (numberArray) => {
    let arr1 = numberArray.filter((num) => {
        for(var i = 2; i<=Math.sqrt(num); i++){
            if(num % i === 0 )
            {
                return false;
            }
            
        }
        
        return true;
    }); console.log(arr1);
} 

isPrime(numberArray)
//--------function #4-------//

// var notPrime = _.reject(numberArray, fuction(value, index, originalList){
//     return value%index==0
// });
// console.log(notPrime)

//--------function #6-------//

const myArray = [11, 34, 20, 5, 53, 16];
console.log(myArray.map((x) => Math.pow(x, 2)));

//--------function #7-------//

const myArray2 = [2,3,5,10];
multiply = (myArray2) => {
    let mul = myArray2.reduce(function(initial, item){
        return initial*item;
    });
    console.log(mul);
}
multiply(myArray2)