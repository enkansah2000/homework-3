//JAVASCRIPT STUFF
var userGuess;
//Generate random number
var secretNumber = Math.ceil(Math.random()*99);
console.log(secretNumber);

//capture user guess
function playGame()
{
   userGuess = document.getElementById("user-guess").value
   if(userGuess == secretNumber) changeDisplay("Win");
   else if (userGuess > secretNumber) changeDisplay(" High");
   else if (userGuess < secretNumber) changeDisplay(" Low");
   else changeDisplay("not correct");
}
//compare my guess to random
//change interface
function changeDisplay(winCode)
{
    if (winCode == "win") document.getElementById("display-message").innerText = "You Won!";
   else if (winCode == "high") document.getElementById("display-message").innerText = "Too High!";
   else if (winCode == "low") document.getElementById("display-message").innerText = "Too Low!";

   else document.getElementById("display-message").innerText = "Not a num";



}