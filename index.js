const readlineSync = require("readline-sync");
var score =0;
var userAns= readlineSync.question("what is your name? ");

console.log("welcome "+ userAns +" how are you");
console.log("---------");
function play(question,answer){
  var userData = readlineSync.question(question);
  console.log(userData)
  if(userData===answer){
    console.log("right");
    score = score+1;
    console.log("Your score is "+score);
    
  }else{
    console.log("wrong");
  }
console.log("---------");
}
var questions = [{
  question: "From where i am? \n A). Mumbai \n B). Banglore \n C).Delhi \n D). Kolkata \n",
  answer: "Mumbai"
},
 {
   question: "How Old I Am? \n A). 22 \n B). 25 \n C). 19 \n D). 17 \n",
     answer: "19"
  },
  {
     question: "Do I love to treak? \n A). yes \n B). No \n",
    answer: "yes"
  }
    ];
for(var i=0;i<questions.length;i++){
var currentquestion = questions[i];
  play(currentquestion.question,currentquestion.answer)
}
console.log("your score "+score)