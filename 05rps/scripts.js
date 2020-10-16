var selectPlayer = 0;
var selectComputer = 0;
var winner = 0;
var scoreHuman = 0;
var scoreComputer = 0;

function play(select) {
    selectPlayer = select;
    selectComputer = Math.floor(Math.random() * (2 + 1) + 1);

    $('#rock').removeClass('winner');
    $('#paper').removeClass('winner');
    $('#scissors').removeClass('winner');

    if( selectPlayer == selectComputer ) {
        console.log('Empate');
        $('#messageText').text('Empate');
    }
    
    // Humano Ganhar
    if ( selectPlayer == 1 && selectComputer == 3 ) {
        scoreHuman++;
        $('#scoreHuman').html('<p>' + scoreHuman + '</p>');
        $('#scissors').addClass('winner');
        $('#messageText').text('Você ganhou!');
    } 
    else if ( selectPlayer == 2 && selectComputer == 1 ) {
        scoreHuman++;
        $('#scoreHuman').html('<p>' + scoreHuman + '</p>');
        $('#rock').addClass('winner');
        $('#messageText').text('Você ganhou!');
    } 
    else if ( selectPlayer == 3 && selectComputer == 2 ) {
        scoreHuman++;
        $('#scoreHuman').html('<p>' + scoreHuman + '</p>');
        $('#paper').addClass('winner');
        $('#messageText').text('Você ganhou!');
    }
      // Computador Ganhar
    else if ( selectPlayer == 1 && selectComputer == 2 ) {
        scoreComputer++;
        $('#scissors').addClass('winner');
        $('#scoreComputer').html('<p>' + scoreComputer + '</p>');
        $('#messageText').text('Computador ganhou!');
    } 
    else if ( selectPlayer == 2 && selectComputer == 3 ) {
        scoreComputer++;
        $('#paper').addClass('winner');
        $('#scoreComputer').html('<p>' + scoreComputer + '</p>');
        $('#messageText').text('Computador ganhou!');
    } 
    else if (selectPlayer == 3 && selectComputer == 1 ) {
        scoreComputer++;
        $('#rock').addClass('winner');
        $('#scoreComputer').html('<p>' + scoreComputer + '</p>');
        $('#messageText').text('Computador ganhou!');
    }
}