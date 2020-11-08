// #### Zadanie 1
// Stwórz obiekt car i dopisz do niego różne właściwości. Wypisz właściwości w konsoli

let car = {
    brand: 'BMW',
    age: 18,
    hp: 200,

    display: function () {
        console.log(this.brand, this.age, this.hp, ' object car');
    }
}

console.log(car);
car.display();

// #### Zadanie 2
// Na podstawie obiektu z zadania 1 dopisz do niego metodę zmieniającą jego nazwę na podstawie parametru przekazanego z wywołania metody.

car.changeBrand = function (newBrand) {
    this.brand = newBrand;
}

car.changeBrand('Audi');
car.display();
console.log(car);

// #### Zadanie 3

// Stwórz obiekt z metodą sumującą wszystkie liczby z tablicy podanej w parametrze w wywołaniu tej metody. Następnie metoda ta powinna zapisywać wynik we właściwości sum tego obiektu. Na koniec wypisz właściwość sum w konsoli.

let mathHelper = {
    sum: 0,

    sumAll: function (...numbers) {
        this.sum = numbers.reduce((previous, current) => previous += current);
    }
}

mathHelper.sumAll(1, 2, 3);
console.log(mathHelper.sum);
// #### Zadanie 4

// Stwórz obiekt car. Następnie wypisz w konsoli informacje na jego temat na podany poniżej wzór:

const anotherCar = {
    name: 'BMW',
    age: 12,
    hp: 150,
    color: 'Black'
}

for (const key in anotherCar) {
    if (anotherCar.hasOwnProperty(key)) {
        console.log(key, ':', anotherCar[key]);
    }
}


// #### Zadanie 5

// Stwórz dowolny obiek w obiekcie car. Następnie wypisz w konsoli jego właściwości.

anotherCar.wheels = {
    size: 'size',
    owner: 'company',
}

console.log(anotherCar['wheels']);

// #### Zadanie 6

// Do obiektu car dodaj dowolną właściwość oraz metodę wypisującą w konsoli napis "Hello". Zrób to poza ciałem obiektu.

anotherCar.isValid = true;
anotherCar.sayHello = function () { console.log('Hello'); }

console.log(anotherCar);
anotherCar.sayHello();