// Fahrenheit 451 Quiz by Will

// Button Click Listener
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  let numCorrect = 0;

  // Mark Question 1
  let job = document.getElementById("job-in").value.toLowerCase();
  if (job === "fireman") {
    document.getElementById("job-out").innerHTML = "Correct";
    numCorrect++;
  } else {
    document.getElementById("job-out").innerHTML = "Incorrect";
  }

  let death = document.getElementById("death-in").value.toLowerCase();
  if (death === "mildred") {
    document.getElementById("death-out").innerHTML = "Correct";
    numCorrect++;
  } else {
    document.getElementById("death-out").innerHTML = "Incorrect";
  }

  let obsession = document.getElementById("obsession-in").value.toLowerCase();
  if (obsession === "television") {
    document.getElementById("obsession-out").innerHTML = "Correct";
    numCorrect++;
  } else {
    document.getElementById("obsession-out").innerHTML = "Incorrect";
  }

  let betrayal = document.getElementById("betrayal-in").value.toLowerCase();
  if (betrayal === "mildred") {
    document.getElementById("betrayal-out").innerHTML = "Correct";
    numCorrect++;
  } else if (betrayal === "beatty") {
    document.getElementById("betrayal-out").innerHTML = "Correct";
    numCorrect++;
  } else {
    document.getElementById("betrayal-out").innerHTML = "Incorrect";
  }

  // Output Final Score / Feedback

  document.getElementById("output").innerHTML = numCorrect;
}
