/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(hourTime){
  let hour = parseInt(hourTime.split(":")[0]);
	switch (true) {
    case (hour < 12):
      return "Good Morning";
      break;
    case (hour > 12 && hour < 17):
      return "Good Afternoon";
      break;
    case (hour > 17):
      return "Good Evening";
      break;
  }
};
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  greeting = document.querySelector("#greeting");
  greeting.textContent = string;
}
