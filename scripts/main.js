var myImage = document.querySelector("img");
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

myImage.onclick = function() {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/leha_r.jpg") {
    myImage.setAttribute("src", "images/leha_l.jpg");
  } else {
    myImage.setAttribute("src", "images/leha_r.jpg");
  }
};

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Hello dear " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function() {
  setUserName();
};
