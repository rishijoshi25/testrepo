// This function clear all the values
function clearScreen() {
 document.getElementById("result").value = "";
}

// This function display values
function display(value) {
document.getElementById("result").value = Math.floor(Math.random() * (500 - 1) + 1);
}
// This function evaluates the expression and return result

function gen(no) {
var input = document.getElementById("result").value

var ans = input + no;
document.getElementById("result").value = ans;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function calculate() {
 var p = document.getElementById("result").value;
 var q = parseInt(p);
 for (let i = q; i>=1;i--){
    console.log(i);
    let text = i.toString();
    var textbox3 = document.getElementById('result');
    textbox3.value = text;
    await sleep(0.5);

 }
 var textbox3 = document.getElementById('result');
textbox3.value = 'Happy Birthday';
await sleep(1500);
clearScreen();
}