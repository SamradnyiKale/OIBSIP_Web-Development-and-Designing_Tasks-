let input = document.getElementById("input");
let output = document.getElementById("output");
let ans = 0;

function appendValue(value) {
  input.value += value;
}

function clearDisplay() {
  input.value = "";
  output.value = "";
}

function delChar() {
  input.value = input.value.slice(0, -1);
}

function sqrtValue() {
  try {
    let val = eval(input.value);
    let result = Math.sqrt(val);
    output.value = result;
    ans = result;
  } catch {
    output.value = "Error";
  }
}

function toggleSign() {
  if (input.value.startsWith("-")) {
    input.value = input.value.substring(1);
  } else {
    input.value = "-" + input.value;
  }
}

function useAns() {
  input.value += ans;
}

function calculate() {
  try {
    let result = eval(input.value);
    output.value = result;
    ans = result;
  } catch {
    output.value = "Error";
  }
}
