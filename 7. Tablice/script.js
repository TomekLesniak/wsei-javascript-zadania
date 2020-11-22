//Zadanie 1

const elements = ['a', 1, {name: 'b'}, 3, 2.3]

for(let item of elements) {
    console.log(item);
}

//Zadanie 2

const numbers = [1,2,3,4,5, 'a', 'b', 'c'];

console.log(numbers[0], numbers[1]); // 1st 2st

console.log(numbers[numbers.length - 1]); // last

console.log(numbers); // all

for(let i = 0; i < numbers.length; i++) { // every 2-th
    if(i % 2 === 0)
        console.log(numbers[i]);
}

for(let item of numbers) { //strings 
    if(typeof item === 'string')
        console.log(item);
}

for(let item of numbers) { //integers 
    if(typeof item === 'number')
        console.log(item);
}


//Zadanie 3

const myNumbers = [1,2,3,4,5,6];

let result = 0;
console.log(myNumbers.reduce((number, result) => result += number)); //sum

for(let num of myNumbers) { //substraction
    result -= num;
}
console.log(result);



let sum = myNumbers.reduce((number, result) => result += number); // Average
const avg = sum / myNumbers.length;
console.log(avg);

for(let num of myNumbers) { //Even
    if(num % 2 === 0)
        console.log(`Even: ${num}`);
}

for(let num of myNumbers) { //Odd
    if(num % 2 === 1)
        console.log(`Odd: ${num}`);
}

let max = myNumbers[0];
for(let num of myNumbers) { //max
    if(num > max)
        max = num;
}
console.log(max);

let min = myNumbers[0];
for(let num of myNumbers) { //min
    if(num < min) {
        min = num;
    }
}


console.log(myNumbers.reverse()); // reversed


//Zadanie 4
let x = sumNumbers(myNumbers);
console.log(x);

function sumNumbers(...nums) {
    if(Array.isArray(nums[0]))
        nums = nums[0];

    let sum = 0;
    for(let num of nums) {
        sum += num;
    }
    return sum;
}

//Zadanie 5
multiplyByAvarage(1,2,3);

function multiplyByAvarage(...numbers) {
    if(Array.isArray(numbers[0]))
        numbers = numbers[0];

    const avg = getAvarage(numbers);
    
    for(let num of numbers) {
        console.log(num * avg);
    }
}

function getAvarage(numbers) {
    return sumNumbers(numbers) / numbers.length;
}


//Zadanie 6
console.log(getEvenAverage(myNumbers));

function getEvenAverage(...numbers) {
    if(Array.isArray(numbers[0]))
        numbers = numbers[0];

    let evenCount = 0;
    let sum = 0;
    for(let number of numbers) {
        if(number % 2 === 0) {
            evenCount++;
            sum += number;
        }

    }

    return sum / evenCount;
} 

//Zadanie 7
console.log(sortArray(1,2,10,2,-1,-5));
 
function sortArray(...numbers) {
    if(Array.isArray(numbers[0]))
        numbers = numbers[0];
    
    // bubble sort  O(N^2)
    if(numbers.length === 0)
        return numbers;
    
    let isSorted = true;
    let toSort = numbers.length;

    while(toSort != 1) {
        isSorted = true;
        for(let i = 0; i < numbers.length - 1; i++) {
            if(numbers[i] > numbers[i + 1]) {
                swap(numbers, i, i + 1);
                isSorted = false;
            }
        }

        if(isSorted)
            return numbers;
        
        toSort--;
    }

    return numbers;

}

function swap(numbers, indexFirst, indexSecond) {
    let temp = numbers[indexFirst];
    numbers[indexFirst] = numbers[indexSecond];
    numbers[indexSecond] = temp;
}
// #### Zadanie 8
let exampleArrayA = [7, 6, 3, 4];
let exampleArrayB = [5, 6, 7, 8];

function sumOfArraysIndex(arrayA, arrayB){
    let array = [];
    arrayA.forEach((num, i) =>{
        array.push(num + arrayB[i]);
    });
    return array;
}

console.log(sumOfArraysIndex(exampleArrayA, exampleArrayB));


// #### Zadanie 9

console.log(getArrayWithoutElement([1,2,3], 2))

function getArrayWithoutElement(array, element) {
    const newArray = [];
    newArray.r
    for(let item of array) {
        if(item !== element)
            newArray.push(item);
    }
    return newArray;
}
let x = [1,2,3];
x.

// #### Zadanie 10

console.log(getArrayWithOppositeSigns([1,-2,3]));

function getArrayWithOppositeSigns(array) {
    const result = [];
    for(let num of array) {
        result.push(-num);
    }

    return result;
}
