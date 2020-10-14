    var questions = $('.count li').length;
    var question = 1;
    var questionCount = 0;
    var score = 0;
        
    $(function quiz() {

        $('.count li[data-id="' + questionCount + '"]').addClass('answered');
        
        function nextQuestion() {
            question++;
            questionCount++;
            $('.question-wrapper[data-question="' + question + '"]').css('display','block');
        }

        $('#openQuiz').click(function(){
            $('.question-wrapper[data-question="0"]').css('display','none');
            $('.question-wrapper[data-question="1"]').css('display','block');
            $('.questions-count').css('display','block');
        });
        
        $('.question-wrapper[data-question="' + question + '"] .alternatives .alternative-wrapper').click(function(){
            var correct = $(this).parent().attr('data-alternatives');
            var selected = $(this).attr('data-alternative');
    
            if (correct == selected) {
                $(this).css('background-color','#73fb3b').css('color','#FFF');
                $('.count li[data-id="' + questionCount + '"]').addClass('correct');
                console.log('win');
                score++;
            } else {
                $(this).css('background-color','#ff0000').css('color','#FFF');
                $('.count li[data-id="' + questionCount + '"]').addClass('incorrect');
                console.log('lose');
            }

            $('.question-wrapper[data-question="' + question + '"] .alternatives .alternative-wrapper').addClass('disabled');

            console.log(score);
            
            setTimeout(function(){
                $('.question-wrapper').css('display','none');
                nextQuestion();
                quiz();
                }, 600);

            if(score == 10){
                $('#score').html('<h1 style="text-align:center;">QUE INCRÍVEL!!! <br>Você ama mesmo uma série em...<br>Você acertou: ' + score + ' de 10 perguntas!</h1>');
            }else if(score >= 6){
                $('#score').html('<h1 style="text-align:center;">Parábens, você gosta mesmo de uma série<br>Você acertou: ' + score + ' de 10 perguntas!</h1>');
            }else {
                $('#score').html('<h1 style="text-align:center;">Quase lá,<br>nada como um dia maratonando na Netflix resolva...<br>Você acertou: ' + score + ' de 10 perguntas!</h1>');
            }
            
        });
        
    });