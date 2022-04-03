var neverScore = 0;
var hauntingScore= 0;

var questionCount = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");
var surprise = document.getElementById("surprise");

restart.addEventListener("click", restartQuiz);

function restartQuiz () {
  result.innerHTML = "You should watch ...";
    neverScore = 0;
      hauntingScore= 0;
        questionCount = 0;
        }
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");


q1a1.addEventListener("click", never);
q1a2.addEventListener("click", haunting);

q2a1.addEventListener("click", never);
q2a2.addEventListener("click", haunting);

q3a1.addEventListener("click", never);
q3a2.addEventListener("click", haunting);

q4a1.addEventListener("click", never);
q4a2.addEventListener("click", haunting);

q5a1.addEventListener("click", never);
q5a2.addEventListener("click", haunting);

function never () {
  neverScore = neverScore+1;
    questionCount +=1;
    if (questionCount ==5) {
      console.log("The quiz is done!");
        updateResult();
        }
        }

function haunting () {
  hauntingScore+= 1;
    questionCount += 1;
    if (questionCount ==5) {
      console.log("The quiz is done!");
        updateResult();
        }
 }

surprise.addEventListener("click", display);
function updateResult () {
  if (neverScore >= 3) {
result.innerHTML = "";
result.appendChild(document.createElement('img')).src = 'never.png';
 resultinfo.innerHTML= "You should watch: Never Have I Ever! The fresh take on the coming-of-age comedy is hilariously honest, sweetly smart, and likely to have viewers falling head over heels for charming newcomer Maitreyi Ramakrishnan.(PS: Some amazing representation of mental health!)"
}
else if (hauntingScore>= 3) {
result.innerHTML = "";
result.appendChild(document.createElement('img')).src = 'horror.png';
resultinfo.innerHTML= "You should watch Stranger Things! After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters. The boy's mother desperately tries to find him, convinced he is in grave danger, while the police chief searches for answers. (PS: Some amazing character development) "
}
}

function display()  {
	if (neverScore >= 3) {
result.innerHTML = "";
 resultinfo.innerHTML= ""
}
else if (hauntingScore>= 3) {
 result.innerHTML = "";
resultinfo.innerHTML= ""
}
}
