sound.play();

function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;

    if (question1 === "Big Dipper") {
        correct++;
    }
    if (question2 === "Iraq") {
        correct++;
    }
    if (question3 === "Hippopotamus") {
        correct++;
    }
    if (question4 === "Only God Knows") {
        correct++;
    }

    var messages = ["Great Job!", "Could be worse", "You can do better!"];
    var pictures = [0, 1, 2]




    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

}

function startTime() {
    document.getElementById("clock").style.visibility = "visible"
    document.getElementById("clock").innerHTML = "Time Remaining: " + time + " seconds";
}

var form = `
<form id="quiz" name="quiz">

<p>Question 1: The 7 Brightest Stars In Ursa Major Are Collectively Known As This</p>
<input type="radio" id="mc" name="question1" value="Big Dipper"> Big Dipper
<br>
<input type="radio" id="mc" name="question1" value="Lyra"> Lyra
<br>
<input type="radio" id="mc" name="question1" value="Orion"> Orion
<br>
<input type="radio" id="mc" name="question1" value="Aquila"> Aquila
<br>


<p>Questin 2: MOSUL & RAMADI CAN BOTH BE FOUND IN THIS MIDEAST COUNTRY</p>
<input type="radio" id="mc" name="question2" value="Iraq"> Iraq
<br>
<input type="radio" id="mc" name="question2" value="Syria"> Syria
<br>
<input type="radio" id="mc" name="question2" value="Iran"> Iran
<br>
<input type="radio" id="mc" name="question2" value="Turkey"> Turkey
<br>

<p>Question 3: ITS NAME IS FROM THE GREEK FOR "RIVER HORSE"</p>
<input type="radio" id="mc" name="question3" value="Hippopotamus"> Hippopotamus
<br>
<input type="radio" id="mc" name="question3" value="Tiger"> Tiger
<br>
<input type="radio" id="mc" name="question3" value="Elephant"> Elephant
<br>
<input type="radio" id="mc" name="question3" value="Snake"> Snake
<br>

<p>Question 4: Will I pass this class?</p>
<input type="radio" id="mc" name="question4" value="Yes"> Yes
<br>
<input type="radio" id="mc" name="question4" value="No"> No
<br>
<input type="radio" id="mc" name="question4" value="Maybe"> Maybe
<br>
<input type="radio" id="mc" name="question4" value="Only God Knows"> Only God Knows
<br>

<input id="button" type="button" value="I'm finished!" onclick="check();">

</form>

`
var clicked = false;

var time = 40;

function timer() {
    var timing = setInterval(function () {
        time = time - 1
        console.log(time)
        startTime()
        if (time === 0) {
            check();
            window.clearInterval(timing)
        }
    }, 1000)

}

$(function () {
    $(".start_button").on('click', function () {
        clicked = true;
        $(".start_button").remove()
        if (clicked) {
            $("#form").html(form)
        }
        timer()
        startTime()
        $("#clock")
    })

})