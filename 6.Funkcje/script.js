//Zadanie 1

say();
function say() {
    console.log('Udało się!');
}


//Zadanie 2

printItem(1);

function printItem(item) {
    console.log(item);
}

//Zadanie 3


function getArray(...array) { // ... - rest operator
    return array;
}
console.log(getArray(1,2,3));

//Zadanie 4

printString('Sentence');

function printString(sentence) {
    if(typeof sentence !== 'string')
        return;
    
    for(let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(sentence);
            if(i == 5)
                console.log('Koniec');
        }, 3000 * i);
    }
}