// #### Zadanie 1

// Stwórz konstruktor Person z następującymi właściwościami:

// 1. Imię
// 2. Nazwisko
// 3. Wiek
// 4. Kraj
// 5. Miasto
// 6. Język

// Wszystkie te właściwości powinny pochodzić z parametrów przekazanych przez użytkownika w wywołaniu konstruktora. Następnie dopisz metody które będą modyfikować wiek oraz miasto. Pamiętaj o reużywalności kodu i oszczędzaniu pamięci. Wywołaj konstruktor Person na minimum 5 różnych osobach. Następnie zmień im wiek oraz miasto i sprawdź jak zachowują się obiekty.

function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
}

Person.prototype.changeAge = function(newAge) {
    this.age = newAge;
}

Person.prototype.changeCity = function(newCity) {
    this.city = newCity;
}


let personOne = new Person('person', 'one', 1, 'countryOne', 'cityOne', 'languageOne');
let personTwo = new Person('person', 'two', 2, 'countryTwo', 'cityTwo', 'languageTwo');
let personThree = new Person('person', 'three', 3, 'countryThree', 'cityThree', 'languageThree');
let personFour = new Person('person', 'four', 4, 'countryFour', 'cityFour', 'languageFour');
let personFive = new Person('person', 'five', 5, 'countryFive', 'cityFive', 'languageFive');

console.log(personOne);
console.log(personTwo);
console.log(personThree);
console.log(personFour);
console.log(personFive);

personOne.changeAge(111);
personOne.changeCity('newCityOne');

personTwo.changeAge(222);
personTwo.changeCity('newCityTwo');

personThree.changeAge(333);
personThree.changeCity('newCityThree');

personFour.changeAge(444);
personFour.changeCity('newCityFour');

personFive.changeAge(555);
personFive.changeCity('newCityFive');

console.log(personOne);
console.log(personTwo);
console.log(personThree);
console.log(personFour);
console.log(personFive);

// #### Zadanie 2

// Stwórz konstruktor kalkulatora z czterema podstawowymi działaniami. Konstruktor powinien posiadać pamięć operacji oraz metody do odpowiednich działań. Dopisz również metodę wypisującą zawartość pamięci oraz czyszczącą zawartość pamięci kalkulatora. Stwóz na podstawie konstruktora minimum dwa niezależne kalkulatory.

function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b == 0) {
      console.log('Cannot divide by zero!');
      return;
    }
    return a / b;
  }
  
  function Calculator() {
    this.memory = [];
    this.showMemory = () => console.log(this.memory);
    this.resetMemory = () => (this.memory = []);
    this.calculate = (a, b, operation) => {
      this.memory.push(operation(a, b));
      return operation(a, b);
    };
  }
  
  let c1 = new Calculator();
  let c2 = new Calculator();
  
  console.log(c1.calculate(5, 10, add));
  console.log(c1.calculate(5, 23, divide));
  console.log(c1.memory);
  
  console.log(c2.calculate(5.3, 10, multiply));
  console.log(c2.calculate(15, 23, subtract));
  console.log(c2.memory);
  
  c1.showMemory();
  c2.resetMemory();
  console.log(c2.showMemory());

// #### Zadanie 3( gra )

// Stwórz konstruktor z dwoma metodami. Jedna co sekundę ma zminiać zawartość pola typu number na losową liczbę z zakresu 1-10. Druga ma sprawdzać czy liczba jest większa o 5. Jeśli tak to program ma zakończyć działanie.
class Game {
    value = 1;
    constructor() {
        this.changeValue();
    }
    checkValue() {
        if(this.value > 5) return true;
        else return false;
    }

    changeValue() {
        let interval = setInterval(() => {
            this.value = 1 + Math.floor((10 - 1) * Math.random());
            console.log(this.value);
            if(this.checkValue()) clearInterval(interval);
        }, 1000)
    }


}