var translateButton=document.getElementById("download-button")
var inputData = document.querySelector('.userInput')
var showForm = document.getElementById('showForm')
var selectButton = document.getElementById('selectButton')
var arabicSelect = document.getElementById('arabicCheck')
var spanishSelect = document.getElementById('spanishCheck')
var frenchSelect = document.getElementById('frenchCheck')


document.addEventListener('DOMContentLoaded', function() {
    // var drop = document.querySelectorAll('.dropdown-trigger');
    // M.Dropdown.init(drop);
    


  });



 async function runFetch(input){

// if (arabicSelect.checked){
//   targetLanguage=""
// }


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

var userInput = inputData.value;
console.log(userInput);
localStorage.setItem("lastEntry", userInput);
// inputData=localStorage.setItem('input-text');

// the IF STATEMENTS GO HERE 

})

selectButton.addEventListener("click", function(event){
  event.preventDefault()
  console.log("this works")
  showForm.setAttribute("style", "display:block")
  
})
