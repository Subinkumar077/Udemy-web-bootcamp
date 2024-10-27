var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var sourceRandomImages = "images/" + randomImage ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", sourceRandomImages);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber2 + ".png";
var sourceRandomImages = "images/" + randomImage ;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", sourceRandomImages);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 wins🎉"
}
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 wins🎉"
}