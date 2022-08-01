const date = new Date()
var hour = date.getHours()
var text = ""

if (hour < 12) {
  text = "Good Morning"
} else if (hour >= 12 && hour <= 18) {
  text = "Good Afternoon"
} else if (hour > 18) {
  text = "Good Night"
}

document.getElementById("heading").innerHTML = text 

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "0px";
} 

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
