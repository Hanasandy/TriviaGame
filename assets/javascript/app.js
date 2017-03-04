  // $(document).ready(function(){
  // $("#start-button").click(function(){
  /*browser:true*/
  // "use strict";
  var timeRemaining = 0;
  var questionObject;
  var timer;
  var rightAnswers = [];
  var wrongAnswers = [];
  var unanswered = [];
  var remainingQuestions = [ {
      q: "When a dog runs to your feet and rolls over on his/her back, what is he/she saying to you?",
      answer: [ "1. Pet me NOW!", "2. Hey Boss what’s up?", "3. C’mon let’s go squirrel hunting", "4. Give me a treat!" ],
      correct: "2. Hey Boss whats up?"
    }, {
      q: "What does it mean when the hair on your dog’s back stands up?",
      answer: [ "1. I feeling guilty and/or submissive", "2. I’m having a bad hair day", "3. I am about to attack", "4. I am angry and/or suspicious" ],
      correct: "4. I am angry and/or suspicious"
    }, {
      q: "During sustained eye contact between you and your dog, if your dog looks away first, it means that:",
      answer: [ "1. He/she is feeling insecure and unloved", "2. He/she is submitting to your dominant role", "3. He/she is shy", "4. He/she is bored with the starting contest" ],
      correct: "2. He/she is submitting to your dominant role"
    }, {
      q: "Your dog would love nothing better than to climb into bed with you. But you insist that he/she sleeps on the floor beside your bed. What does your dog think?",
      answer: [ "1. That you are unfair and mean", "2. That you are punishing him/her", "3. That you are the boss of the household", "4. That you think there is not enough room for the two of you" ],
      correct: "3. That you are the boss of the household"
    }, {
      q: "It is a cool spring day and you and your dog are sitting around watching the world go by. Your dog spontaneously starts panting vigorously, why?",
      answer: [ "1. He/she has to urinate", "2. He/she is having something from you", "3. He/she wants something from you", "4. He/she is under stress" ],
      correct: "4. He/she is under stress"
    }
  ];

 function startTimer() {
    clearTimeout( timer );
    timeRemaining = 20; // in seconds
    incrementTimer();
  }

  function incrementTimer() {
    timer = setTimeout( function () {
      $( '#timer' ).text( "You have " + timeRemaining + " second left!");
      if ( timeRemaining <= 0 ) {
        //unanswered
        unanswered.push( questionObject );
        alert( 'Time is UP' );
        askQuestion();
      } else {
        timeRemaining = timeRemaining - 1;
        incrementTimer();
      }

    }, 1000 );
  }

  

  function askQuestion() {
    if ( remainingQuestions.length <= 0 ) {
      // you done
      clearTimeout(timer);
      $('.correct').html(" You got " + rightAnswers.length + " correct answers!")
      $('.incorrect').html(" You got " + wrongAnswers.length + " wrong answers")
      $('.empty').html(" You got " + unanswered.length + " unanswered")
      // alert (" you got correct: " + rightAnswers.length);
      // alert (" you got wrong: " + wrongAnswers.length);
      // alert (" you got unanswered: " + unanswered.length);
      
      //alert("Do you want to play again?"); 


    } else {
      // startTimer();
      $( '#containerForChoiceOptions' ).html( "" );
      questionObject = remainingQuestions.pop();
   


      var choices = questionObject.answer;
      $( '#asked-question' ).html( questionObject.q );
      for ( var i = 0; i < choices.length; i++ ) {
        var choice = $( '<div>' );
        choice.text( choices[ i ] );
        choice.attr( 'id', "choice-" + i );
        choice.attr( 'index', i );
        $( '#containerForChoiceOptions' ).append( choice );

        choice.click( function () {
          if ( this.innerHTML === questionObject.correct ) {
            alert( "You got it right!" );
            rightAnswers.push( questionObject );
            askQuestion();
          } else {
            alert( "Sorry you got wrong answer" );
            wrongAnswers.push( questionObject );
            askQuestion();
          }
        } );
      }
    }
  }
  askQuestion();

  $('.start').on('click', function(){
    $('.start').css('display', 'none');
    $('.data').css('display', 'block');

    startTimer(20000);

  });





