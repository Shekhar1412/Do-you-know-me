var read = require("readline-sync");
var score = 0;
var userName = read.question("Name please ? \n");
console.log("Hello " + userName +" ,lets's see how well do yo know me ?\n");

function play(ques, ans)
{
var a = read.question(ques + "\n");
if(a.toUpperCase() == ans.toUpperCase())
{
  console.log("You are right!");
  score++;
}
else{
  console.log("I'm afraid you are wrong!!");
  score--;
}
console.log("Your current score is " + score);
console.log("----------------------------");
}

var questionare = [

{q : "Spell my name correctly! ", a : "Subham Sekhar Mohanty"},
{q:"My college ? ", a : "SRM IST"},
{q:"Am I an engineer or a doctor ? ", a : "Engineer"},
{q : "My favourite subject? ", a : "Physics"},
{q : "My aspirations ", a : "Full stack Developer"}

];

var i ;
for( i = 0; i<questionare.length; i++)
{
  var response = read.question("If you wish to continue, type 'yes' or else 'no' \n");
  if(response.toUpperCase() === 'YES')
  {
    play(questionare[i].q, questionare[i].a);
  }
  else
  {
  
      console.log("Your final score is " + score);
    
    console.log("Good Bye ! ! !");
    break;
  }
}
 if(i===5){
   console.log("GAME OVER \nYour final score is " + score);
       console.log("Good Bye ! ! !");

 }
