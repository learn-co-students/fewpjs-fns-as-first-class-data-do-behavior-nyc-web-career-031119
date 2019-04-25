/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let message
  const times = parseInt(time)
  switch(true) {
    case (times < 12):
    message = "Good Morning"
    break
    case (12 < times && times < 17):
    message = "Good Afternoon"
    break
    case ( times > 17):
    message = "Good Evening"
    break
    }
    return message
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
const greeting = document.getElementById("greeting")
greeting.innerHTML = string
}
