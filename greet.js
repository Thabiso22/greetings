var input = document.querySelector('.boxResults');
var btnResults = document.getElementById("btn");
var messageResults = document.querySelector(".msg");
var counter = document.getElementById("counting");
var count = 0;
var resetButt = document.getElementById("resetButton");
var namesGreeted = {};
var countStore = localStorage.getItem("count");
var userName = input.value;

//var userName = input.value;

if (countStore) {
    count = Number(count);
    counter.innerHTML = count;
}


btnResults.addEventListener("click", function() {

addCount();
checkedRadioButt();

countFunc();
localStore();


});
//
