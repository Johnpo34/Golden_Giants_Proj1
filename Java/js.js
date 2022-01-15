var translateButton=document.getElementById("download-button")
var inputData = document.querySelector('.userInput')



document.addEventListener('DOMContentLoaded', function() {
    var drop = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(drop);
  });



 async function runFetch(input){



  var res = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: input.value,
      source: "en",
      target: "es",
      format: "text"
    }),
    headers: { "Content-Type": "application/json" }
  });
  


  console.log(await res.json());
 }

 translateButton.addEventListener("click", function(event){
  event.preventDefault();
console.log(event.target);
runFetch(inputData);
var dataObject = {
}

var userInput = inputData.value;
console.log(userInput);
localStorage.setItem("userInput",dataObject);
// inputData=localStorage.setItem('input-text');

// the IF STATEMENTS GO HERE 

})

