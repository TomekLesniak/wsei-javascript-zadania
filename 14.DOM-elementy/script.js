//zadanie 1
function getTags(elements) {
    const array = Array.from(elements);
    return array.map((item) => item.tagName);
}

const allDivs = document.getElementsByClassName("more-divs");
console.log(getTags(allDivs));

//zadanie2

const list = document.querySelector(".short-list");
displayDetails(list);

function displayDetails(element){
    console.log(element.innerHTML); //1
    console.log(element.outerHTML); //2
    console.log(element.className); //3 
    console.log(element.classList); //4
    console.log(element.dataset); //5
}

//zadanie 3

function calculate(elem){
    let sum = 0;
    let diff = 0;

    for(const key in elem.dataset){
        if(key.search("number") != -1){
            sum += parseInt(elem.dataset[key]);
            diff -= parseInt(elem.dataset[key]);
        }
    }

    console.log('Sum: ', sum);
    console.log("Diff:", diff)
}

calculate(document.getElementById("datasetCheck"));

//zadanie 4
document.getElementById("spanText").innerHTML = "zmienionyTekstWJs";

//zadanie 5
document.getElementById("spanText").className = "dowolna_klasa";

//zadanie 6
var classes = document.getElementById("classes");

function manageClasses(classes) {
    classes.classList.forEach(e => console.log(e));
    var divClass = "";
    classes.classList.forEach(e => divClass = divClass + (divClass != "" ? ' + ' : '') + e);
    console.log(divClass);
    classes.classList.remove(...classes.classList);
    console.log("Usunięto wszystkie klasy");
}

manageClasses(classes);

//zadanie 7

function addTextToDataset(elems){
    for(let el in elems){
        if(el.getAttribute("data-text") == false){
            el.dataset.text = "text";
        }
    }
}

addTextToDataset(document.querySelectorAll('#longList > li'));

//zadanie 8

function createNew(className) {
    return {
        newClass: className
    }
}

function change(obj){
    const assignedClass = obj.newClass;
    document.querySelector('#myDiv').classList.add(assignedClass);
}

const obj = createNew('string_z_parametru');
change(obj);

//zadanie 9

function addNumberClass(num){
    let className = (num % 2 == 0) ? 'even' : 'odd';
    document.getElementById('numbers').className += newClass;
}

addNumberClass(1);

//zadanie 10
function readValuesFromLongList(longList){
    let values = [];
    let lis = longList.querySelectorAll('li');
    for(let listItem in lis){
        values.push(listItem.innerText);
    }
    return values;
}

console.log(readValuesFromLongList(document.querySelector('#longList')))


//zadanie 11
function changeToRandomNumbers(listItems){
    for(let listItem in listItems){
        listItem.dataset.data = listItem.innerText;
        listItem.innerText = Math.floor(Math.random() * 10);
    }
}

changeToRandomNumbers(document.querySelectorAll("#longList li"));
