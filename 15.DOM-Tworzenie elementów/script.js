//zadanie 1

const newElement = document.createElement("div");
newElement.innerText = "To jest nowy element";
document.body.appendChild(newElement);

//zadanie 2
const favoriteFruits = ["fruit 1", "fruit2", "fruit3", "fruit4", "fruit5", "fruit6"];
const newUl = document.createElement("ul");

for(let fruit in favoriteFruits){
    const newLi = document.createElement("li");
    newLi.innerText = fruit;
    newUl.appendChild(newLi);
}

document.body.appendChild(newUl);


//zadanie 3

newUl.addEventListener("click", () => {
    let allLi = document.querySelectorAll("ul li");
    allLi.forEach((child, index) => {
        if(index % 2 == 0){
            child.remove();
        }
    })
});

//zadanie 4
const newButton = document.createElement("button");
newButton.innerText = "Remove";
newButton.addEventListener("click", () => {
    newButton.remove();
})

document.body.appendChild(newButton);

//zadanie 5

for(let i = 0; i < Math.floor(Math.random() * 10); i++){
    const newDiv = document.createElement("div");
    newDiv.innerText = 'to jest div numer ' + i;
    document.body.appendChild(newDiv);
}

//zadanie 6

let div1 = document.createElement("div");
div1.textContent = "to jest div";
let span1 = document.createElement("span");
span1.textContent = "to jest span";
let div2 = document.createElement("div");
let div3 = document.createElement("div");
div3.textContent = "to jest div";
let span2 = document.createElement("span");
span2.textContent = "to jest span";

div2.appendChild(div3);

document.body.appendChild(div1);
document.body.appendChild(span1);
document.body.appendChild(div2);
document.body.appendChild(span2);

//zadanie 7
let arr = ["item1", "item2", "item3", "item4", "item5", "item6"];
let ulFirst = document.createElement("ul");
let buttonFirst = document.createElement("button");
buttonFirst.textContent = "Swap";

let ulSecond = document.createElement("ul");
let buttonSecond = document.createElement("button");
buttonSecond.textContent = "Swap";

for(let item in arr){
    let newLi = document.createElement("li");
    newLi.innerText = item;
    ulFirst.appendChild(newLi);
}

document.body.appendChild(ulFirst);
document.body.appendChild(buttonFirst);

document.body.appendChild(ulSecond);
document.body.appendChild(buttonSecond);


buttonFirst.addEventListener("click", () => {
    let lastInFirst = ulFirst.lastChild;
    let lastInSecond = ulSecond.lastChild;
    ulSecond.insertBefore(lastInFirst, lastInSecond);

    (ulFirst.children.length == 0) ? buttonFirst.disabled = true : buttonSecond.disabled = false;
})


buttonSecond.addEventListener("click", () => {
    let lastInFirst = ulFirst.lastChild;
    let lastInSecond = ulSecond.lastChild;
    ulFirst.insertBefore(lastInSecond, lastInFirst);

    (ulSecond.children.length == 0) ? buttonSecond.disabled = true : buttonFirst.disabled = false;
})


//zadanie 8
//przykladowy input: div, 2, to co bedzie w divie, red
const newForm = document.createElement("form");
const newInput = document.createElement("input");
const newSpan = document.createElement("span")
const newButton = document.createElement("button");
newButton.setAttribute("type", "submit");

newForm.appendChild(newSpan);
newForm.appendChild(newInput);
newForm.appendChild(newButton);
document.body.appendChild(newForm);

newSpan.textContent = "Wprowadz typ elementu, ilosc elementow, tekst ktory ma zostac powtorzony oraz kolor przedzielone przecinkiem.";
newButton.textContent = "Stworz";

newButton.addEventListener("click", (e) => {
    e.preventDefault();

    const input = newInput.value;
    const values = input.split(',');
    for (let i = 0; i < values[1]; i++) {
        const newElement = document.createElement(values[0]);
        newElement.textContent = values[2];
        newElement.style.color = values[3];
        document.body.appendChild(newElement);
        
    }
})

//zadanie 9
let formInputs = ["Imie", "Nazwisko", "Wiek", "IloscDzieci"];
let formDiv = document.createElement("div");

createFormFields(formInputs);

document.body.appendChild(formDiv);

let submitButton = document.createElement("button");
submitButton.id = "submit";
submitButton.textContent = "Utwórz";

let showMoreButton = document.createElement("button");
showMoreButton.id = "showMore";
showMoreButton.textContent = "Więcej";

document.body.appendChild(showMoreButton);
document.body.appendChild(submitButton);

showMoreButton.addEventListener("click", (e) => {
    e.preventDefault();

    createFormFields(formInputs);
})


function createFormFields(formInputs) {
    formInputs.forEach((formInput) => {
        let inputDiv = document.createElement("div");
        let input = document.createElement("input");
        input.className = formInput;
        let textDiv = document.createElement("div");
        textDiv.textContent = formInput;
        let breakLine = document.createElement("br");

        inputDiv.appendChild(textDiv);
        inputDiv.appendChild(input);
        inputDiv.appendChild(breakLine);

        formDiv.appendChild(inputDiv);
    })
}

submitButton.addEventListener("click", () => {
    let names = document.querySelectorAll(".Imie")
    let lastNames = document.querySelectorAll(".Nazwisko");
    let ages = document.querySelectorAll(".Wiek");
    let kids = document.querySelectorAll(".IloscDzieci");
    let tableWrapper = document.createElement("div");

    names.forEach((n) => {
        let tableRow = createRow("Imie", n.value)
        tableWrapper.appendChild(tableRow);
    })

    lastNames.forEach((n) => {
        let tableRow = createRow("Nazwisko", n.value)
        tableWrapper.appendChild(tableRow);
    })
    ages.forEach((n) => {
        let tableRow = createRow("Wiek", n.value)
        tableWrapper.appendChild(tableRow);
    })
    kids.forEach((n) => {
        let tableRow = createRow("Ilosc Dzieci", n.value)
        tableWrapper.appendChild(tableRow);
    })

    document.body.appendChild(tableWrapper);
})

function createRow(rowName, val){
    let removeButton = createRemoveButton();
    let rowWrapper = document.createElement("div");
    const fieldDiv = document.createElement("div");
    const fieldValue = document.createElement("div");
    fieldDiv.textContent = rowName + ": ";
    fieldValue.textContent = val;
    fieldValue.classList = "fieldValue";
    rowWrapper.appendChild(fieldDiv);
    rowWrapper.appendChild(fieldValue);
    rowWrapper.appendChild(removeButton);

    return rowWrapper;
}

function createRemoveButton() {
    let button = document.createElement("button");
    button.textContent = "Usun";

    button.addEventListener("click", (e) => {
        const target = e.target;
        target.parentNode.parentNode.removeChild(target.parentNode);
    })

    return button;
}

//zadanie 10

function capitalizeFirstLetter(sentence){
    return sentence[0].toUpperCase() + sentence.substr(1, sentence.length);
}

//zadnaie 11

function checkAndCreateDivs(string){
    let sum = 0;
    let multiplied = 1;
    for(let i = 0; i < string.length; i++){
        if(!isNaN(string[i])){
          let int = parseInt(string[i]);
          sum += int;
          multiplied *= int;
        }
    }
    if(multiplied !== 1 || sum !== 0){
      for(let i = 0; i < multiplied; i++){
      let newDiv = document.createElement("div");
      newDiv.textContent = string;
      document.body.appendChild(newDiv);
    }
    }
    

    console.log(sum);
}

checkAndCreateDivs("abc52");

//zadanie 12
function create(string) {
    return {
        text: string
    }
}

let tomek = create("tomek ma kota");
tomek.checkIfContainsAla = function() {
    if(this.text.includes("Ala")){
        this.text = this.text.replaceAll("Ala", "Ola");
        console.log(this.text);
    } else {
        let newDiv = document.createElement("div");
        newDiv.textContent = "Słowo Ala nie występuje w tekście."
        document.body.appendChild(newDiv);
    }
}

tomek.checkIfContainsAla();

//zadanie 13

function countLetters(arr) {
    let letterCount = 0;
    arr.forEach(word => {
      for(let i = 0; i < word.length; i++){
        if(isNaN(word[i])){
          letterCount++;
        }
      }
      
    });
    return letterCount;
}

function sumNumbers(arr) {
    let sum = 0;
    arr.forEach((word) => {
      for(let i = 0; i < word.length; i++){
        if(!isNaN(word[i])){
          let int = parseInt(word[i]);
          sum += int;
        }
    }
    })
    return sum;
}

function average(arr) {
    let sum = 0;
    let numbersSpotted = 0;
    arr.forEach((word) => {
      for(let i = 0; i < word.length; i++){
        if(!isNaN(word[i])){
          let int = parseInt(word[i]);
          sum += int;
          numbersSpotted++;
        }
    }
    })
    return sum / numbersSpotted;
}

const sampleData = ['abc42', 'cde2'];
console.log(countLetters(sampleData));
console.log(sumNumbers(sampleData));
console.log(average(sampleData));

//zadanie 14

let obj = {
    name: '',
    surname: '',
    age: ''
}

function changeObject(name, surname, age){
    obj.name = name;
    obj.surname = surname;
    obj.age = age;

    if(name.length > 5 || surname.length > 5 || age.length > 5){
        let newButton = document.createElement("button");
        newButton.textContent = "Przywroc domyslne";
        newButton.addEventListener("click", () => {
            obj.name = "";
            obj.surname = "";
            obj.age = "";
        })
        document.body.appendChild(newButton);
    }
}

changeObject("Tomasz", "Lesniak", "21");