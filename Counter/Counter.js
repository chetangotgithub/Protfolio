let counter = document.getElementById("count");
let str = document.getElementById("str");
console.log(counter);
let count = 0;
function inc() {
  console.log("incremented");
  count += 1;
  counter.innerText = count;
}
function dec() {
  count -= 1;
  counter.innerText = count;
}
function save() {
  str.textContent += count + " || ";
  count = 0;
  counter.innerText = 0;
}
