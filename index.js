
document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString){
  let split = timeString.split(":"); 
  let time = split[0];
  if (time <= 12){
    return "Good Morning"
  } else if (time >= 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}


function displayMessage(string){
  document.getElementById("greeting").innerText = string 
}
