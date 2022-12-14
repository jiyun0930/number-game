const result = document.getElementById("result");
const resultForm = document.querySelector("#result input:first-child");
const start = document.querySelector("div.box");
const fontP = document.querySelector("div.hidden");

const HIDDEN_CLASS = "hidden";
let randomNumber = Math.floor(Math.random() * 100) + 1;


function submitIf(event) {
  event.preventDefault();
  const myResult = parseInt(resultForm.value);
  console.log(typeof(myResult))
  if(myResult === randomNumber) {
    fontP.innerText = "정답입니다!!!!"
  } else if(myResult > randomNumber){
    fontP.innerText = "오답입니다!!! 당신의 숫자보다 작습니당"
  } else {
    fontP.innerText = "오답입니당!!! 당신의 숫자보다 큽니당"
  }
}


function startGame() {
  result.classList.remove(HIDDEN_CLASS);
  fontP.classList.remove(HIDDEN_CLASS);
  start.classList.add(HIDDEN_CLASS);
}

start.addEventListener("click", startGame);
result.addEventListener("submit", submitIf);