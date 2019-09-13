// message in the console
console.log("Hi there, welcome to the JavaScript console!");

// initialize the application
var app = new Object();

app.shakePokeball = function shakePokeball() {
  // code BELOW this line for challenge #1 -->
  document.getElementById("pokeball").className = "shake";
} // <-- code ABOVE this line for challenge #1
//---------------------------------------------------------
app.setName = function setName() {
  // code BELOW this line for challenge #2 -->
  var name = prompt("What is your first name?");
  document.getElementById("first-name").innerHTML = name;

} // <-- code ABOVE this line for challenge #2
//---------------------------------------------------------
app.setWebsite = function setWebsite() {
  // code BELOW this line for challenge #3 & bonus -->
  var website = prompt("What is your favorit website?");
  document.getElementById("favorite-website").innerHTML = `<a href = ${website}>find out here!</a>`;

} // <-- code ABOVE this line for challenge #3 & bonus
