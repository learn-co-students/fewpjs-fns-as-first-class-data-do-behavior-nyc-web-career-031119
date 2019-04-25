/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  console.log(string.split(':'))
  let num = parseInt(string.split(':')[0])
  console.log(parseInt(num))
  console.log(string)
  if (num < 12) {
    return "Good Morning"
  } else if (num > 12 && num < 17) {
    return "Good Afternoon"
  } else if (num > 17) {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let input = document.getElementById('greeting');
  input.innerHTML = string
}
