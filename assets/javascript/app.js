function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;

    if (question1 === "Blue") {
        correct++;
    }
    if (question2 === "Yes") {
        correct++;
    }
    if (question3 === "Austin") {
        correct++;
    }
    if (question4 === "Only God Knows") {
        correct++;
    }

    var messages = ["Great Job!", "Could be worse", "You can do better!"];
    var pictures = []

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}
var form = `
<form id="quiz" name="quiz">

<p>What color is the sky?</p>
<input type="radio" id="mc" name="question1" value="Blue"> Blue
<br>
<input type="radio" id="mc" name="question1" value="Green"> Green
<br>
<input type="radio" id="mc" name="question1" value="Red"> Red
<br>
<input type="radio" id="mc" name="question1" value="Brown"> Brown
<br>


<p>Does 1+1=2 </p>
<input type="radio" id="mc" name="question2" value="Yes"> Yes
<br>
<input type="radio" id="mc" name="question2" value="No"> No
<br>

<p>What is the capital of Texas?</p>
<input type="radio" id="mc" name="question3" value="Austin"> Austin
<br>
<input type="radio" id="mc" name="question3" value="Baltimore"> Baltimore
<br>
<input type="radio" id="mc" name="question3" value="New York"> New York
<br>
<input type="radio" id="mc" name="question3" value="Las Vegas"> Las Vegas
<br>

<p>Will I pass this class?</p>
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

var time = 5;

function timer() {
    var timing = setInterval(function () {
        time = time - 1
        console.log(time)
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
    })

})