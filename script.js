

// Event listener for when the user clicks the "Submit Answer" button,will discuss in class
document.getElementById("submit-btn").addEventListener("click", checkAnswer);

// Event listener for when the page finishes loading, starting the quiz, will discuss in class
document.addEventListener("DOMContentLoaded", startQuiz);

function startQuiz() {
    // Start the timer by setting an interval to call the updateTimer function every second.
    // Display the first question by calling a function to handle this.
}
this.scoreCountElement = element.querySelector(".score-count");

function checkAnswer(operator) {
    let result = document.getElementById("result")
    result.value += operator;
    console.log(result)
    // Get the user's input from the answer field.
    // Compare it with the correct answer from the questions array.
    // If the answer is correct, increment the currentQuestionIndex and display the next question.
    // If the answer is incorrect, alert the user to try again.
}




 function stoptimer() {
    // Stop the timer by clearing the interval.
    clearInterval(intervalID);
 }
function getQuestion() {


}const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
});
function stoptimer(){
    clearInterval(timer);
  }

