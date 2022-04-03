var factPlaceholder = document.getElementById("motivfact");
var showFact = document.getElementById("displayfact");

var MotivFacts = ["You are doing awesome",
               "You got this, just breathe!",
               "You are enough just as you are.",
                 "Show them what you are made of.",
                 "Be you, do you, for you.",
                  "All you have to do today is breathe.",
                   "You can do big and scary things.",
                     "Who says you are not worth it?"]

var factNumber;

function factRandom(){
  return MotivFacts[factNumber];
}

showFact.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*5);
  factPlaceholder.textContent = factRandom();
});