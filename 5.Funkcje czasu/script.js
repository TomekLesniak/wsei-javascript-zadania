//Zadanie 1:

for(let i = 1; i <= 15; i++) {
    setTimeout(() => {
        console.log(`Cześć po raz ${i}`);
    }, 3000 * i);
}

//Zadanie 2:

const numbers = [1,2,3,4,5];

setTimeout(() => {
    console.log(numbers);
}, 2000);

for(let i = 0; i < numbers.length; i++) {
    setTimeout(() => {
        console.log(numbers[i]);
    }, 3000 * (i + 1));
}