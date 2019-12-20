//console.log("up and Running!");

const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage : 'images/queen-of-hearts.png'
	},
	{
		rank : "queen",
		suit : "diamonds",
		cardImage : 'images/queen-of-diamonds.png'
	},
	{
		rank : "king",
		suit : "hearts",
		cardImage : 'images/king-of-hearts.png'
	},
	{
		rank : "king",
		suit : "diamonds",
		cardImage : 'images/king-of-diamonds.png'
	}
];
let cardsInPlay = [];
//Creating matchCounter variable

function checkForMatch(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			
			console.log("You found a match!");
			
		}else{
			
			console.log("Sorry, try again.");
			
		}

	};
}
function flipCard(){
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	checkForMatch();
};


function createBoard(){
	
	for( var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

createBoard();

//creating a reset function
function reset(){
	for(var i = 0; i < cards.length; i++){
		document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
	//resets cardsInplay to 0
		cardsInPlay = [];
	}
}
// define reset button
var button = document.getElementById('resetGame');
button.addEventListener('click', reset);


