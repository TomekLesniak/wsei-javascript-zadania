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

Person.prototype.changeCIty = function(newCity) {
    this.city = newCity;
}


let personOne = new Person('person', 'one', 1, 'countryOne', 'cityOne', 'languageOne');
let personTwo = new Person('person', 'two', 1, 'countryOne', 'cityOne', 'languageOne');
let personThree = new Person('person', 'three', 1, 'countryOne', 'cityOne', 'languageOne');
let personFour = new Person('person', 'four', 1, 'countryFour', 'cityFour', 'languageFour');
let personFive = new Person('person', 'five', 1, 'countryFive', 'cityOne', 'language');

// #### Zadanie 2

// Stwórz konstruktor kalkulatora z czterema podstawowymi działaniami. Konstruktor powinien posiadać pamięć operacji oraz metody do odpowiednich działań. Dopisz również metodę wypisującą zawartość pamięci oraz czyszczącą zawartość pamięci kalkulatora. Stwóz na podstawie konstruktora minimum dwa niezależne kalkulatory.


// #### Zadanie 3( gra )

// Stwórz konstruktor z dwoma metodami. Jedna co sekundę ma zminiać zawartość pola typu number na losową liczbę z zakresu 1-10. Druga ma sprawdzać czy liczba jest większa o 5. Jeśli tak to program ma zakończyć działanie. Obie metody muszą być wywołane na różnych obiektach i wymianiać dane przy pomocy pola prototype.