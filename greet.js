var input = document.querySelector('.boxResults')
var btnResults = document.querySelector('.btn');
var messageResults = document.querySelector(".msg");

var counter = document.getElementById("counting");
var count = 0;
//var localStorage =window.localStorage;
var countStore = localStorage.getItem("count");
var resetButt = document.getElementById("resetButton");
var namesGreeted = {};




if (countStore) {
  count = Number(countStore);
  counter.innerHTML = count;
}







function add(){
 a = 0;
 document.getElementById('counting').innerHTML = count=0;
 }






btnResults.addEventListener("click", function() {
            //var results = "";
            var language = document.getElementsByName("language");
           for (var i = 0; i < language.length; i++) {

                if (language[0].checked) {
                    //document.querySelector(".boxResults");
                    messageResults.innerHTML = "Hello " + input.value;
                } else if (language[1].checked) {
                    //document.querySelector(".boxResults");
                    messageResults.innerHTML = "Hallo " + input.value;
                } else if (language[2].checked) {
                    //document.querySelector(".boxResults");
                    messageResults.innerHTML = "Molo " + input.value;
                }

              }
//document.getElementById("counting").innerHTML = count;
                 count += 1;
                 localStorage.setItem("count",count);
                 counter.innerHTML=count;



                 var userName = input.value;
                 if (namesGreeted[userName] === undefined){
                    greetingsCounter++;

                    namesGreeted[userName] = 0;

                    userName.innerHTML = greetingsCounter;
                 }




 });
//
