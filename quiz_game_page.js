var player1_score = 0;
var player2_score = 0;
var send_check = 0;
var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

function regulate(){
document.getElementById("player1_name").innerHTML = "<h4>" + player1_name + " : " + "</h4>";
document.getElementById("player2_name").innerHTML = "<h4>" + player2_name + " : " + "</h4>";

document.getElementById("player1_score").innerHTML = "<h2>" +  player1_score + "</h2>";
document.getElementById("player2_score").innerHTML ="<h2>" +  player2_score + "</h2>";

document.getElementById("question_turn").innerHTML = "<h2>" + "Question Turn : " + player1_name + "</h2>";
document.getElementById("answer_turn").innerHTML = "<h2 style= >" + "Answer Turn : " + player2_name + "</h2>";

document.getElementById("question_turn").style.color = "pink";
}

function send(){
number1 = document.getElementById("number1_text_input").value;
number2 = document.getElementById("number2_text_input").value;
actual_answer = parseInt(number1) * parseInt(number2);

var question_display = "<h4>" + number1 + " X " + number2 + "</h4>";
var answer_input = "<br> Answer : <input type = 'text' id = 'input_answer_box'>";
var check_button = "<br><br><button onclick = 'check()' class = 'btn btn-success'>Check</button>";
var row = question_display + answer_input + check_button;
document.getElementById("output").innerHTML = row;

document.getElementById("number1_text_input").value = null;
document.getElementById("number2_text_input").value = null;
question_container = document.getElementById("question_container");
question_container.style.display = 'none';

document.getElementById("answer_turn").style.color = "red";
document.getElementById("question_turn").style.color = "yellow";
}

 question_turn = "player1";
 answer_turn = "player2";
function check(){
player_answer = document.getElementById("input_answer_box").value;
if (player_answer == actual_answer){
    if(answer_turn == "player1"){
player1_score = player1_score + 1;
console.log(player1_score);
document.getElementById("player1_score").innerHTML ="<h3>" + player1_score  + "</h3>";
    } else {
player2_score = player2_score + 1;
console.log(player2_score);
document.getElementById("player2_score").innerHTML ="<h3>" + player2_score  + "</h3>";
    }
}

if (question_turn == "player1"){
    question_turn = "player2";
    document.getElementById("question_turn").innerHTML = "<h2>" + "Question Turn : " + player2_name + "</h2>";
} else {
    question_turn = "player1";
    document.getElementById("question_turn").innerHTML = "<h2>" + "Question Turn : " + player1_name + "</h2>";
}

if (answer_turn == "player1"){
    answer_turn = "player2";
    document.getElementById("answer_turn").innerHTML = "<h2>" + "Answer Turn : " + player2_name + "</h2>";
} else {
    answer_turn = "player1";
    document.getElementById("answer_turn").innerHTML = "<h2>" + "Answer Turn : " + player1_name + "</h2>";
}
document.getElementById("output").innerHTML = "";
question_container = document.getElementById("question_container");
question_container.style.display = 'block';

document.getElementById("question_turn").style.color = "red";
document.getElementById("answer_turn").style.color = "yellow";
}
