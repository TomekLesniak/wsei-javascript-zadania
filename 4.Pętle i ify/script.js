

//Zadanie 1:
let a = 5;
let b = 10;


if(a > b) {
    console.log(a);
} else {
    console.log(b);
}

//same as

console.log(a > b ? a : b);

//Zadanie 2:
let numberOne = 3;
let numberTwo = 5;
let numberThree = 7;

if(numberOne > numberTwo && numberOne > numberThree){
    console.log(numberOne);
} else if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log(numberTwo);
} else {
    console.log(numberThree);
}

//Zadanie 3:

for(let i = 1; i <= 10; i++) {
    console.log("lubie javascript");
}


//Zadanie 4:
let result = 0;

for(let i = 1; i<=10; i++){
    result += i;
}

//Zadanie 5:
var n = 5;

for(let i = 0; i <= n; i++) {
    console.log(i % 2 == 0 ? i + ' - Liczba parzysta' : i + ' - Liczba nieparzysta');
}

//Zadanie 6:

for(let i = 0; i<5; i++) {
    for(let j = 0; j < 5 ; j++) {
        console.log("i = " + i + ", j = " + j);
    }
}

//Zadanie 7:

for(let i = 0; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }

}

//Zadanie 8:
for(let i = 0; i < 5; i++) {
    let result = '';

    for(let j = 0; j < i; j++) {
        result += '*';
    }
    console.log(result);
}

//TODO: finish this

/*

#### Zadanie 8

Narysuj w konsoli:

a)
```
*
**
***
****
*****
```

b)
```
    *
   * *
  * * *
 * * * *
* * * * *
```

c)
```
    *
   ***
  *****
 *******
*********
```

d)
```
*1234
**234
***34
****4
*****
-----
*****
****4
***34
**234
*1234
```

e)
```
    *
   * *
  * * *
 * * * *
* * * * *
    *
    *
    *
```*/