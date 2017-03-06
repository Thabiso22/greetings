var input = document.querySelector('.boxResults')
var btnResults = document.querySelector('.btn');
var messageResults = document.querySelector(".msg");

btnResults.addEventListener("click", function() {
    //var results = "";
    var language = document.getElementsByName("language");
  for (var i =0 ;i < language.length; i++) {

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
    //return results;
});
