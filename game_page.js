Player1_name = localStorage.getItem("Player1_name");
Player2_name = localStorage.getItem("Player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("Player1_name").innerHTML = Player1_name + " : ";
document.getElementById("Player2_name").innerHTML = Player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn - " + Player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + Player2_name;

function Send() {
    Number1 = document.getElementById("multiplication1").value;
    Number2 = document.getElementById("multiplication2").value;
    equation = parseInt(Number1) * parseInt(Number2);
    console.log(equation);


    question_number = "<h4>" + Number1 + " X " + Number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number1").value;
    document.getElementById("Number2").value;
}


question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == equation) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("question_turn").innerHTML = "Question Turn - " + Player2_name;
    } else {
        question_turn = "player1"
        document.getElementById("question_turn").innerHTML = "Question Turn - " + Player1_name;
    }

    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + Player2_name;
    } else {
        answer_turn = "player1"
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + Player1_name;
    }

    document.getElementById("output").innerHTML = "";
}
