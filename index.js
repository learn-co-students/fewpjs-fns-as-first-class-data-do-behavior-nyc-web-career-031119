/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let message
  const timeInt = parseInt(time)
  switch (true){
    case (timeInt < 12):
    message =  "Good Morning"
    break
    case (timeInt < 17 && timeInt > 11):
    message =  "Good Afternoon"
    break
    default:
    message =  "Good Evening"
  }
  return message
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  const greeting = document.querySelector("#greeting")
  greeting.innerHTML = string
}
