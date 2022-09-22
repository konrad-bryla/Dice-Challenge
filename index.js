var randNum1 = Math.floor(Math.random() * 6) + 1;
var randNum2 = Math.floor(Math.random() * 6) + 1;

document.getElementById("img1").setAttribute("src", "images/dice" + randNum1 + ".png");
document.getElementById("img2").setAttribute("src", "images/dice" + randNum2 + ".png");

if(randNum1 > randNum2){
    document.getElementById("winner").innerHTML = "Player 1 Wins!";
} else if(randNum1 < randNum2){
    document.getElementById("winner").innerHTML = "Player 2 Wins!";
} else{
    document.getElementById("winner").innerHTML = "Its a tie!";
}