var language = document.getElementsByName("language");
var checkedRadioButt=function(){

  for (var i = 0; i < language.length; i++) {
var firstName= input.value;

      if (language[0].checked&&language==="English") {
          //document.querySelector(".boxResults");
          messageResults.innerHTML = "Hello " + firstName;
      } else if (language[1].checked) {
          //document.querySelector(".boxResults");
          messageResults.innerHTML = "Hallo " + firstName;
      } else if (language[2].checked) {
          //document.querySelector(".boxResults");
          messageResults.innerHTML = "Molo " + firstName;
      }

  }


}
