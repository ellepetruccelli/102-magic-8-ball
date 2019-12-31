$(document).ready(function() {
    
    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["It is certain", "Without a doubt", "Outlook good", "Cannot predict now", "Reply hazy, try again", "Don't count on it", "Outlook not so good"];
    
    $("#answer").hide();
    magic8Ball.askQuestion = function(question) {
        $("#answer").fadeIn(3000);
        var randomNumber = Math.random();
        var randomNumberArray = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberArray);
        var answer = this.listOfAnswers[randomIndex];

        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        $("#answer").text( answer );
 
        console.log(question);
        console.log(answer);
    };

    var onClick = function() {
        $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
    
        setTimeout(
            function() {
                var question = prompt("ASK A YES/NO QUESTION!");
                magic8Ball.askQuestion(question);
                $("#8ball").effect("shake");
            }, 500);
    };
 
    $("#questionButton").click( onClick );
});

