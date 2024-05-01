const textinp = document.getElementById("input-el");
const inputbtn = document.getElementById("input-btn");
const geturl = document.getElementById("geturl-btn");
const deletall = document.getElementById("delete-btn");
const print = document.getElementById("print-el");
let input = [];

const leadsfromstorage = JSON.parse(localStorage.getItem("array"));
if (leadsfromstorage) {
  input = leadsfromstorage;
  render();
}

inputbtn.addEventListener("click", function () {
  input.push(textinp.value);
  localStorage.setItem("array", JSON.stringify(input));
  render();
  textinp.value = "";
});

geturl.addEventListener("click", function () {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url;
    console.log(tabs);
    console.log(url);
    input.push(url);
    localStorage.setItem("array", JSON.stringify(input));
    render();
  });
});

deletall.addEventListener("dblclick", function () {
  console.log("double clicked");
  input = [];
  localStorage.clear();
  render();
});

function render() {
  let list = "";
  for (let i = 0; i < input.length; i++) {
    list += `<li><a target="_blank" href="${input[i]}">${input[i]}</a></li>`;
  }
  print.innerHTML = list;
}
