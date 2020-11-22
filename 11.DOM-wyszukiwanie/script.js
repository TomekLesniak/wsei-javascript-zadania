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