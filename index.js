/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(hhmm) {
  let parsedTime = parseInt(hhmm);
  switch (true) {
    case parsedTime < 12:
      return 'Good Morning';
      break;
    case parsedTime < 17:
      return 'Good Afternoon';
      break;
    case parsedTime > 17:
      return 'Good Evening';
      break;
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById('greeting').innerHTML += `${string}`;
}
