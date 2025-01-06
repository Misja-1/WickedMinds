let counter1 = 0 
let counter2 = 0
let unlock2 = false

function funcAdd() {
  let counterNumber1 = document.getElementById("counterText");
  counter1 +=1;
  counterNumber1.innerHTML = String(counter1);
}
function funcAdd2() {
  let counterNumber2 = document.getElementById("counterText2");
  let infoText2 = document.getElementById("info2");
  if (counter1 >= 10) {
    unlock2 = true
    infoText2.innerHTML = "CLICK"
  }
  if (unlock2) {
  counter2 +=1;
  counterNumber2.innerHTML = String(counter2);
  }
}
function reload() {
    window.location.reload()
}