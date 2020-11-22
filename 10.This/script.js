//Zadanie 1
function Person (name,surname,age,country,city){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
}

Person.prototype.showAll = function() {
    console.log(Object.values(this))
}

Person.prototype.addAge = function() {
    this.age++;
}

let tomek = new Person("Tomasz", "Lesniak", 21, "Poland", "Krakow");
let test = new Person("Test", "Test", 40, "Unknown", "English")

tomek.showAll();
tomek.addAge();
tomek.showAll();


//zadanie 2
tomek.favoriteMeals = [];
tomek.addMeal = function(mealName) {
    this.favoriteMeals.push(mealName);
}
tomek.addMeal("warzywa");


//zad 3
const calculator = {
    setNumbers(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    },
    
    sum() {
        console.log(this.num1 + this.num2);
    },

    substract() {
        console.log(this.num1 - this.num2);
    },

    multiply() {
        console.log(this.num1 * this.num2);
    },
    
    divide() {
        if(this.num2 === 0) {
            console.log("Nie mozna dzielic przez 0");
            return;
        }
        console.log(this.num1 / this.num2);
    }
   
}

calculator.setNumbers(10, 5);
calculator.sum();
calculator.substract();
calculator.multiply();
calculator.divide();

//zad 4
function Drabina(steps){
    this.position = 0;
    this.height = steps;

    this.getOn = function(){
        
        if(this.height <=0){
            throw new Error("Drabina mniej lub 0")
        } else {
            this.position =1;
            console.log(`Twoja startowa pozycja to ${this.position}`)
        }
    }
    this.checkIfFinished =function(){
        if(this.position === this.height){
            console.log("Udalo sie wejsc")
        }
        
    }
    this.addStep = function(){
        if(this.position == this.height){
            console.log("Jestes na samej gorze")
        }else{
            this.position += 1;
            console.log(`Twoja pozycja to ${this.position}`)
            this.checkIfFinished()
        }
    }
    this.removeStep = function(){
        if(this.position === 1){
            this.position =0;
            console.log("Zszedles z drabiny")
        }else{
            this.position -=1;
        }
    }
}

let drabina = new Drabina(3)
drabina.getOn();
drabina.addStep()
drabina.addStep()
drabina.addStep()


