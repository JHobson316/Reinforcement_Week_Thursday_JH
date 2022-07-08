console.log('Ready to go!');
let form = document.getElementById("form");
let inputText = document.getElementById("inputText");
let button = document.getElementById("button");
let resultBox = document.getElementById("resultBox");
let reset = document.getElementById("reset");
let stringArea = document.getElementById("stringArea");
let countdown = document.getElementById("countdown");
let ex4 = document.getElementById("ex4");

// NOTE: Use Arrow function syntax when adding event listeners!

// PRO TIP: A string is nothing more than an array of characters
const main = () => {
  // Exercise 1:
  // Create a page with a blank label and a text area. 
  // When someone types into the text area, change the label to show what the person has typed.

  button.addEventListener("click", function (event){
    event.preventDefault();
    result.innerHTML = inputText.value;
  });
  

  //   Exercise 2:
  // Using the exercise above, replace the user's typing with the string below. 
  // Each time they press a key, a letter from the string below should display in the label instead. 
  // There's no need to have the text start over from the beginning.

  let codeCrewString = ("Code School is a hands-on class designed to train individuals to be entry - level software developers within a six - month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real - word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.");
  let codeCrewArray = codeCrewString.split("");
  console.log(codeCrewArray);
  let numCount = 0;
  inputText.addEventListener("keypress", function(e){
    //console.log(`${e.code}`);
    if (numCount<codeCrewArray.length){
      stringArea.textContent = stringArea.textContent + codeCrewArray[numCount];
      numCount++;
    }
  });

  // Exercise 3:
  // Enhance your solution by creating a reset button that will erase everything from the label
  //  so the user can start over.
  reset.addEventListener("click", function(){
    form.reset
  });

  // Exercise 4: Repeating timer
  // Create a button with the text Start Countdown!.
  //  When the User clicks the button, display a countdown sequence in the browser 
  //  as an <h2> from 10 to LIFTOFF!!. 
  //  Display each number during the countdown each second (1000 ms),
  //   leading up to the word LIFTOFF!!!. Be sure to stop the timer once liftoff achieved.
  let counting = 10;
  countdown.addEventListener("click", function(){
    if (counting==0){
      console.log(`LIFTOFF!!`)
      const p = document.createElement("p");
      const newContent = document.createTextNode(`LIFTOFF!!`);
      p.appendChild(newContent);
      ex4.appendChild(p);
    }
    else {
      console.log(`${counting}`);
      const p = document.createElement("p");
      const newContent = document.createTextNode(`${counting}`);
      p.appendChild(newContent);
      ex4.appendChild(p);
      --counting;
    }
  });

  //   Challenge 1
  // Create additional strings and load them in an array
  // then randomly select one of the three each time the page is reloaded.
  let quotes = ["Don't tell people your plans. Tell them your results.","Try again. Fail again. Fail better.","Take the risk or lose the chance."];
  let rando = Math.floor(Math.random()*quotes.length);
  const p = document.createElement("h2");
  const newContent = document.createTextNode(`${quotes[rando]}`);
  p.appendChild(newContent);
  challenge.appendChild(p);
};

main();
