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
        quizBuilder.parseResults(quizResults);
    },
    parseResults : function(quizResults){
        console.log('in parseResults with', quizResults);
        console.log('in parseResults with', quizAnswerKey);
        const dataToSend = [quizResults,quizAnswerKey];
        $.post('quiz.php', {dataToSend: dataToSend}, function(data){
            $('#result').fadeIn('slow').html(data);
        });
    }
}; // end quizBuilder
