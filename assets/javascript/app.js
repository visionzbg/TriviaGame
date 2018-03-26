// WuTang Trivia JavaScript

//Questions & Answers 1

function triviaQuestion(question, choices, correctAnswer){
  this.question = question;
  this.choices = choices;
  this.correctAnswer = correctAnswer;
}

//Questions & Answers 2

var allQuestions = [
  new triviaQuestion("Which member of the Wu-Tang is not on 'Gravel Pit' due to incarceration?",["Ghost Face Killah", "Method Man", "Gza", "Ol' Dirty Bastard"],3),
  new triviaQuestion("Who is NOT an original member of the Wu-Tang Clan?",["Ghostface Killah", "Cappadonna", "Method Man", "RZA"],1),
  new triviaQuestion("The majority of Wu-Tang Members are from which New York City Borough?",[ "Bronx", "Queens", "Staten Island", "Brooklyn"],2),
  new triviaQuestion(" Who is the first Wu-Tang member to release a solo effort? ",["Ghostface Killah", "Method Man", "Raekwon", "GZA"],3),
  new triviaQuestion("Which of these Ghostface albums does NOT feature Raekwon on the cover?",[ "Bulletproof Wallets", "Supreme Clientele","Ironman","None of the above" ],0),
  new triviaQuestion("What Wu-member real name is Elgin Turner?",["Raekwon the Chef", "RZA", "Method Man","Masta Killah"],3),
  new triviaQuestion("After Bobby Digitals verse on 'Domestic Violence' who does he talk to on the phone?",["Tekitha", "U-GOD", "Masta Killah","MethodMan"],1),
  new triviaQuestion("RZA and GZA are brothers.",["True", "False"],1),
  new triviaQuestion("RZA was acquitted of an attempted murder charge in 1993 that would’ve given him eight years. ",["True", "False"],0),
  new triviaQuestion("Mainstream hip-hop press credits his second album with 'saving the Wu.' He has enjoyed more success than any other member of the group.",["GZA", "Method Man", "Ghostface Killah", "Raekwon"],2),];

var currentquestion = 0;
var correctAnswers = 0;

function setupOptions() {
  $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
  var options = allQuestions[currentquestion].choices;
  var formHtml = '';
  for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" class="options"><label for="option' + i + '">' + options[i] + '</label></div><br/>';
  }
  $('#form').html(formHtml);
  $(".options:eq(0)").prop('checked', true);
}

function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
  }
}

// Game

$(document).ready(function(){
	
  var $jumbotron = $(".jumbotron");
  var $start = $("#start");
  var $progressbar = $("#progressbar");
  var $next = $("#next");
  var $result = $("#result");
  
	$jumbotron.hide();
	$start.click(function() {
	    $jumbotron.fadeIn();
	    $(this).hide();
  	});

	$(function() {
		$progressbar.progressbar({
			max: allQuestions.length-1,			
			value: 0
		});
	});

	setupOptions();

	$next.click(function(){
			event.preventDefault();
			checkAns();
			currentquestion++;
			$(function() {
    			$progressbar.progressbar({
      				value: currentquestion
    			});
  			});
			if(currentquestion<allQuestions.length){
				setupOptions();
				if(currentquestion==allQuestions.length-1){
					$next.html("Submit");
					$next.click(function(){
						$jumbotron.hide();
						$result.html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
						$result.fadeIn(1500);
					});

				}
				
			};
	});	
});
