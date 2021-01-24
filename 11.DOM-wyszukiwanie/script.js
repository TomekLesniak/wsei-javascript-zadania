
//zadanie 1

const list = document.getElementsByClassName("list");
console.log(list); 
//pseudo tablica - rozny typ, nie ma metod tablicowych

//zadanie 2

function getElements(tag) {
    return document.getElementsByTagName(tag);
}

const uls = getElements("ul");
console.log(uls);

//zadanie 3
const x = document.getElementById("list");
console.log(x);

//zadanie 4
const displayElement = (element) => {
    console.log(element);
}

const liItems = document.querySelectorAll("li");
const ulItems = document.getElementsByTagName("ul");
const spansItems = document.getElementsByTagName("span");
const spansInDiv = document.querySelectorAll("div.list span");
const spansInDivWithId = document.querySelectorAll("div#spans span");

displayElement(liItems);
displayElement(ulItems);
displayElement(spansItems);
displayElement(spansInDiv);
displayElement(spansInDivWithId);