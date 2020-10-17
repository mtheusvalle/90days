var selectPlayer = 0;
var selectComputer = 0;
var winner = 0;
var scoreHuman = 0;
var scoreComputer = 0;

function play(select) {
    selectPlayer = select;
    selectComputer = Math.floor(Math.random() * (2 + 1) + 1);

    console.log(selectComputer);

    $('#rock').removeClass('winner');
    $('#paper').removeClass('winner');
    $('#scissors').removeClass('winner');

    if( selectPlayer == selectComputer ) {
        $('#messageText').text('Empate');
    }

    switch(selectComputer){
        case 1:
            function rock() {
                $('#rock').addClass('winner');
            };
            rock();
            break;
        case 2:
            function paper() {
                $('#paper').addClass('winner');
            };
            paper()
            break;
        case 3:
            function scissors() {
                $('#scissors').addClass('winner');
            };
            scissors()
            break;
    }

    // Humano Ganhar
    if ( selectPlayer == 1 && selectComputer == 3 ) {
        scoreHuman++;
        $('.humanScore p').html('<p>' + scoreHuman + '</p>');
        $('#messageText').text('Você ganhou!');
    } 
    else if ( selectPlayer == 2 && selectComputer == 1 ) {
        scoreHuman++;
        $('.humanScore p').html('<p>' + scoreHuman + '</p>');
        $('#messageText').text('Você ganhou!');
    } 
    else if ( selectPlayer == 3 && selectComputer == 2 ) {
        scoreHuman++;
        $('.humanScore p').html('<p>' + scoreHuman + '</p>');
        $('#messageText').text('Você ganhou!');
    }
      // Computador Ganhar
    else if ( selectPlayer == 1 && selectComputer == 2 ) {
        scoreComputer++;
        $('.computerScore p').html('<p>' + scoreComputer + '</p>');
        $('#messageText').text('Computador ganhou!');
    } 
    else if ( selectPlayer == 2 && selectComputer == 3 ) {
        scoreComputer++;
        $('.computerScore p').html('<p>' + scoreComputer + '</p>');
        $('#messageText').text('Computador ganhou!');
    } 
    else if (selectPlayer == 3 && selectComputer == 1 ) {
        scoreComputer++;
        $('.computerScore p').html('<p>' + scoreComputer + '</p>');
        $('#messageText').text('Computador ganhou!');
    }

}