<?php
    $sentAnswers = $_POST['dataToSend'];
    $sentResults = $_POST['sentResults'];
    $sentData = $_POST['dataToSend'];
    if($sentData){
        $quizResults = $sentData[0];
        $quizAnswerKey = $sentData[1];
        $quizLength = var_dump(count($quizResults));
        for( $i = 0; $i <= $quizLength; $i++){
            echo $quizResults[$i];
            echo $quizAnswerKey[$i];
            echo $i;
        }
    }else{
        echo "nothing sent";
    }

 ?>
