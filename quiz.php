<?php
    $sentData = $_POST['dataToSend'];
    if($sentData){
        $quizResults = $sentData[0];
        $quizAnswerKey = $sentData[1];
        $quizLength = count($quizResults);
        echo $quizResults[0];
        for( $i = 0; $i <= $quizLength; $i++){
            echo 'in for loop';
            $currentResult = $quizResults[i];
            $currentAnswer = $quizAnswerKey[i];
            $answer1 = $currentResult[0];
            $answer2 = $currentAnswer[0];
            echo $answer1;
            echo $answer2;
            echo $currentResult;
        }
    }else{
        echo "nothing sent";
    }

 ?>
