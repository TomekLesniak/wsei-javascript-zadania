//zadanie 1

const buz = document.getElementById("buz");
const baz = document.getElementById("baz");
const foo = document.getElementById("foo");

console.log(buz.parentElement);
console.log(baz.previousElementSibling);
console.log(foo.children);
console.log(foo.parentElement);
console.log(foo.firstChild);
console.log(foo.children[Math.floor(foo.children.length / 2)]);

//zadanie 2
const Listener= (e)=>{
    e.addEventListener("click", function(){
        console.log(this.firstElementChild.innerText.trim());
    });
};

Listener(document.getElementById("ex2"));

//zadanie 3
const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
       const span = button.nextElementSibling;
        if(span.style.display === "none") {
            span.style.display = "block";
        } else {
            span.style.display = "none";
        }
    });
})

//zadanie 4
const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        button.parentElement.style.backgroundColor = randomColor;
    });
})

//zadanie 5

const divs = document.querySelectorAll("#ex5 div");
const listItems = document.querySelectorAll("#ex5 li");

//5.1

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        listItems[0].style.backgroundColor = colors;
    })
})

//5.2

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        listItems[listItems.length - 1].style.backgroundColor = colors;
    })
})

//5.3

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        for (let i = 0; i < listItems.length; i++) {
            if(i % 2 !== 0){
                listItems[i].style.backgroundColor = colors;
            }
        }        
    })
})

//5.4
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        for (let i = 0; i < listItems.length; i++) {          
                listItems[i].style.backgroundColor = colors;      
        }     
    })
})


//5.5

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        div.parentElement.style.background = colors;
    })
})

// Zadanie 6
const parent = document.getElementById('ex6');

let first = parent.firstElementChild.firstElementChild.firstElementChild;
let second = parent.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
let third = parent.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;
console.log(first);
console.log(second);
console.log(third);
