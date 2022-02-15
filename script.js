
// js 8-ball Om

//variables
let outputQEl = document.getElementById("outputQ");
let magicbtnEl = document.getElementById("8-btn");


//add event listener 
document.getElementById("8-btn").addEventListener ("click", magicBall);

// probability for answer
  let randA = Math.random();
//function
function magicBall() {
  let randA = Math.random();
  let questionEl = document.getElementById("question").value;
  if (questionEl === "Does a magic 8 ball actually work?") {
    outputQEl.innerHTML = "How dare you doubt me!";
    } else if (questionEl === "Is JavaScript awesome?") {
    outputQEl.innerHTML = "Of Course!";
    } else if (questionEl === "") {
    outputQEl.innerHTML = "Please ask a question...";
  } else if (randA < 0.2) {
    outputQEl.innerHTML = "Without a Doubt.";
  } else if (randA < 0.4) {
    outputQEl.innerHTML = "As I see it, yes.";
  } else if (randA < 0.6) {
    outputQEl.innerHTML = "Don't count on it.";
  } else if (randA < 0.8) {
    outputQEl.innerHTML = "Concentrate and ask again.";
  } else {
    outputQEl.innerHTML = "Outlook not so good.";
    }
  
}



