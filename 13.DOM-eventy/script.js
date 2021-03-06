// Zadanie 1
//1.1

document.querySelector("#test-event").addEventListener("click", e => {
    console.log(e);
});

// 1.2

document.addEventListener("mousemove", e => {
    console.log(e);
})

// 1.3

document.querySelector("#test-event").addEventListener("mouseover", e => {
    console.log(e);
});

// 1.4

document.addEventListener("keypress", e => {
    console.log(e);
});
  
// 1.5
  
document.addEventListener("scroll", e => {
console.log(e);
});
  
// 1.6

  
document.querySelector("#input-test").addEventListener("input", e => {
console.log(e);
});

// Zadanie 2

let span = document.querySelector("#span-ex2")

document.querySelector("#ex2").addEventListener("click", e => {
    span.innerHTML = e.target.getAttribute("data-text");
});
  
// Zadanie 3

let redElement = document.querySelector("#ex3");

redElement.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "blue"; 
});

redElement.addEventListener("mouseout", e => {
    e.target.style.backgroundColor = "red";
});

// Zadanie 4

let errorSpan = document.querySelector("#ex3-err");

document.querySelector("#input-test").addEventListener("input", e => {
    const input = e.target.value;
    var regex = /[0-9]/
    let text = "";


    if(regex.test(input)){
        text = "Nie mozna wpisywac wartosci liczbowych.";
    } else {
        text = "";
    }

    errorSpan.innerHTML = text;
})

// Zadanie 5

let element = document.querySelector("#ex5");
let button = document.querySelector("#ex5-button");
let counter = 0;

button.addEventListener("click", () => {
    counter++;
    element.innerHTML = counter;

    if(counter === 10 ){
        counter = 0;
        element.innerHTML = 0;
    }
})

// Zadanie 6

window.addEventListener("scroll", () => {
    if(window.scrollY > 200) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "white";
    }
});


// Zadanie 7

let buttons = document.querySelectorAll("#calculator button");
let input = document.querySelector("#calculator input");

let calculation = "";

buttons.forEach( item => {
    item.addEventListener("click", () => {
        calculation += item.textContent;
        console.log(calculation);
        input.value = calculation;
    })
})

window.addEventListener("keydown", e => {
    if(e.key === "Enter"){
        input.value = eval(calculation);
    }
})

//zadanie 8
let el = document.getElementById("myDiv");
let obj = {
    newClass: 'string_z_parametru'
}
let sting = "mynewclass";

const fun1 = (obj,string) => {
    obj['newClass'] = string;
    console.log(obj)
}
 
fun1(obj,sting);

const fun2 = (el,one) => {
    el.classList.add(one.newClass);
}

fun2(el,obj);
console.log()

//zadanie 9
const div = document.getElementById('numbers');

const addClass = () => {
  let params = Math.floor(Math.random() * 10);
    
  if(params % 2 == 0) div.className = "even";
    else div.className = "odd";
};

addClass();