// Card data
const cardsArray = [{
        name: 'shell',
        img: 'img/roxo.png',
    },
    {
        name: 'star',
        img: 'img/amarelo.png',
    },
    {
        name: 'bobomb',
        img: 'img/azul.png',
    },
    {
        name: 'mario',
        img: 'img/vermelho.png',
    },
    {
        name: 'luigi',
        img: 'img/laranja.png',
    },
    {
        name: 'peach',
        img: 'img/marrom.png',
    },
    {
        name: '1up',
        img: 'img/rosa.png',
    },
    {
        name: 'mushroom',
        img: 'img/verde.png',
    },
    {
        name: 'thwomp',
        img: 'img/verde-claro.png',
    },
    {
        name: 'bulletbill',
        img: 'img/branco.png',
    },
    {
        name: 'coin',
        img: 'img/preto.png',
    },
    {
        name: 'goomba',
        img: 'img/ciano.png',
    },
]

const gameGrid = cardsArray
    .concat(cardsArray)
    .sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;
let score = 0;

const sb = document.querySelector(".scoreboard");
sb.textContent = `Score: ${score}`;
const newGame = document.querySelector(".endgame");
const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
    const {
        name,
        img
    } = item;

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;

    const front = document.createElement('div');
    front.classList.add('front');

    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${img})`;

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

const match = () => {
    const selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.add('match');
    });
};

const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.remove('selected');
    });
};

grid.addEventListener('click', event => {

    const clicked = event.target;

    if (
        clicked.nodeName === 'SECTION' ||
        clicked === previousTarget ||
        clicked.parentNode.classList.contains('selected') ||
        clicked.parentNode.classList.contains('match')
    ) {
        return;
    }

    function increaseScore() {
        score++;
        sb.textContent = `Score: ${score}`;
        setTimeout(match, delay);
        console.log(score);
        
            if(score === 12) {
                setTimeout(() => (newGame.style.display = "flex"), 500);
            }
      };

    

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }

        if (firstGuess && secondGuess) {
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
                increaseScore();
            }
            setTimeout(resetGuesses, delay);
        }
        previousTarget = clicked;
    }

});

