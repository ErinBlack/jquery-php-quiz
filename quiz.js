$(function() {
    // buildQuiz();
    quizBuilder.buildQuiz();

    $( "#js-quiz__submit" ).click(function( event ) {
        quizBuilder.serializeResults(event);
    });
});

const answers = [];

const quizBuilder = {
    buildQuiz : function (){
        const quizOutput = [];

        quizQuestions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];
                const currentQuestionNum = currentQuestion.question;
                // HTML to print question number
                const questionHTML = `<h3>Question ${currentQuestionNum}</h3>`;
                // Loop through all answer choices
                for(var letter in currentQuestion.answers){
                    const currentAnswer = currentQuestion.answers[letter];
                    // HTML to print quiz answers
                    var answersHtml = `<div class="c-quizAnswer"><input type="radio"
                        name="${currentQuestionNum}" value="${letter}" id="${letter}">
                        <label for="${letter}"> ${currentAnswer}</label></div>`;
                    answers.push(answersHtml);
                } // end currentQuestions forLoop
                // pushing all code into the questionHTML array
                const htmlJoin = questionHTML + answers.join('');
                quizOutput.push(htmlJoin);
            } //end quizQuestions forEach loop
        ); // end quizQuestions forEach
        const quizOutputJoin = quizOutput.join('');
        $(quizOutputJoin).prependTo('.c-quiz__form');
    },// end buildQuiz function
    // Serializing quiz results
    serializeResults : function(event){
        event.preventDefault();
        const quizResults = $("#js-quiz__form").serializeArray();
        if(quizResults.length < quizAnswerKey.length){
            $('.js-quiz__error').empty();
            $('.js-quiz__error').append('Please answer all the questions');
        }
        if(quizResults.length == quizAnswerKey.length){
            $('.js-quiz__error').empty();
            quizBuilder.calculateResults(quizResults);
        }
    },
    calculateResults : function(quizResults){
        let correctAnswerCount = 0;
        let itemsProcessed = 0;
        quizResults.forEach(function(length, i){
            const currentResult = quizResults[i].value;
            const currentAnswer = quizAnswerKey[i].correctAnswer;
            itemsProcessed ++;
            if(currentResult == currentAnswer){
                correctAnswerCount ++;
            } // end if statement
            // checking to see if processed all items
            if(itemsProcessed == quizResults.length){
                quizBuilder.printResultsFreeLance(correctAnswerCount);
            }
        }); // end quizResults.forEach
    },
    printResultsFreeLance : function(correctCount){
        let quizResultText = '';
        if(correctCount == 7 || correctCount == 8 || correctCount == 9  || correctCount == 10) {
            quizResultText = `Gig work is a great choice for you! Your flexibility
            and desire for autonomy make you a great candidate.`;
        }
        if(correctCount == 4 || correctCount == 5 || correctCount == 6 ) {
            quizResultText = `Gig work could be a good choice for you. Be
            thoughtful about how flexible you can be in your work before deciding
            whether to proceed.`;
        }
        if(correctCount == 1 || correctCount == 2  || correctCount == 3) {
            quizResultText = `Gig work may not be the best choice for you.
            Your desire for consistency in your work may make you better suited
            for a traditional job.`;
        }
        $('.js-quiz__result').empty();
        $('.js-quiz__result').append(quizResultText);
    }
}; // end quizBuilder
