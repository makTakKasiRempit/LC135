let toggle = () => {
  let elements = document.getElementsByClassName("container");
  if (elements.length > 0) {
    let element = elements[0];
    if (element.hasAttribute("hidden")) {
      element.removeAttribute("hidden");
    } else {
      element.setAttribute("hidden", "hidden");
    }
  }
};

let toggle2 = () => {
  let elements = document.getElementsByClassName("container");
  if (elements.length > 0) {
    let element = elements[0];
    element.removeAttribute("hidden");
  }
};

function balls() {
  for (var i = 0; i < 5; i++) {
    console.log(i + "wippe");
  }
}

balls();

function factorial(a) {
  if (a <= 1) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}

console.log(factorial(6));

var y = 1;
var n = 3;

while (n > 1) {
  y = y * n;
  n -= 1;
  console.log(y);
}

var n = 0;

if (n == 0) {
  console.log("kosong");
} else {
  console.log("not kosong");
}

hour = 5;

if (hour < 10) {
  console.log("hour is less than 10");
} else {
  console.log("hour is more than");
}

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(day);

for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
}

function add(num1, num2) {
  result = num1 + num2;
  return result;
}

console.log(add(5, 7));

//five event
/* 
Mouse events
form events
window events
keyboard events
drag and drop events
*/

//events
/*
on change
onclick
onmouseover
onmouseout
onkeydown
onload
*/

var car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

console.log(car.type);
console.log(car["color"]);
