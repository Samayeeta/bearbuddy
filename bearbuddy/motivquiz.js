var motiv1 = 0;
var motiv2= 0;

var questionCount = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");
var surprise = document.getElementById("surprise");

restart.addEventListener("click", restartQuiz);

function restartQuiz () {
  result.innerHTML = "You should watch ...";
    motiv1 = 0;
      motiv2= 0;
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


q1a1.addEventListener("click", m2);
q1a2.addEventListener("click", m1);

q2a1.addEventListener("click", m2);
q2a2.addEventListener("click", m1);

q3a1.addEventListener("click", m2);
q3a2.addEventListener("click", m1);

q4a1.addEventListener("click", m2);
q4a2.addEventListener("click", m1);

q5a1.addEventListener("click", m2);
q5a2.addEventListener("click", m1);

function m2 () {
  motiv1 = motiv1+1;
    questionCount +=1;
    if (questionCount ==5) {
      console.log("The quiz is done!");
        updateResult();
        }
        }

function m1 () {
  motiv2+= 1;
    questionCount += 1;
    if (questionCount ==5) {
      console.log("The quiz is done!");
        updateResult();
        }
 }

surprise.addEventListener("click", display);
function updateResult () {
  if (motiv1 >= 3) {
result.innerHTML = "";
result.appendChild(document.createElement('img')).src = 'm2.png';
 resultinfo.innerHTML= "Be gentler with yourself! It is possible that school or work will become difficult. It becomes difficult for everyone. We are often much harsher on ourselves than we are on others. You will experience failure from time to time. It's unavoidable. During stressful times, we can fall into traps such as negative self-talk—those damaging things we say to ourselves that hinder our own success. You aren't perfect at everything, but neither is anyone else! Maintain a positive attitude, take care of yourself, let go of the need to be perfect, and always strive to improve yourself. Check out our Resources Section!"
}
else if (motiv2>= 2) {
result.innerHTML = "";
result.appendChild(document.createElement('img')).src = 'm1.png';
resultinfo.innerHTML= "Modern life is more hectic than ever, and we all have a lot on our plates on a daily basis. From work stresses to responsibilities, financial concerns, and important calendar dates, we could all use a break now and then! In fact, it's possible that's more accurate than you think. Relaxation is essential for being able to function effectively, regardless of what you spend your days doing. Check out our Resources page! "
}
}

function display()  {
	if (motiv1 >= 3) {
result.innerHTML = "";
 resultinfo.innerHTML= ""
}
else if (motiv2>= 3) {
 result.innerHTML = "";
resultinfo.innerHTML= ""
}
}