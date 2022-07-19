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
